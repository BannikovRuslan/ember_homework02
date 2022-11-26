/* eslint-disable no-console */
const jsonServer = require('json-server');
const path = require('path');
const multer = require('multer');
const fs = require("fs");

const pathToSave = 'public/uploads';
const urlBase = '/uploads/';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(path.join(__dirname, pathToSave))) {
      fs.mkdirSync(path.join(__dirname, pathToSave));
    }
    cb(null, path.join(__dirname, pathToSave));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.win32.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

const upload = multer({ storage });

const getErrors = (errorsToSend) => {
  let errors = [];
  if (errorsToSend && Array.isArray(errorsToSend)) {
    errors = [...errorsToSend];
  }

  return {
    errors
  };
};

const getError = (title, detail, status, pathToAttribute) => {
  let errors = [];
  errors.push({
    title,
    detail,
    status,
    source: pathToAttribute ? { pointer: pathToAttribute } : null
  });

  return getErrors(errors);
};

const server = jsonServer.create()
const router = jsonServer.router('./tests/test-data/db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post("/FileUpload", upload.any(), function (req, res) {

  let filedata = req.files;

  if (!filedata) {
    res.status(500).json(getError('File upload', 'Error during file upload', 500, null));
  }
  else {
    res.status(201).json({ filename: filedata[0].filename });
  }
});

server.post('/saveURL', function (req, res) {
  const entityId = req.body.id;
  const entityName = req.body.entityName;
  const fileName = req.body.fileName;

  const db = router.db; //lowdb instance
  const book = db.get(entityName).find({ id: entityId }).assign({ cover: `${urlBase}${fileName}` }).write();
  res.status(200).json(book);
});


function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function() {
    let body = arguments[0];

    if (req.method === 'DELETE') {
      let urlSegms = req.url.split('/');
      let idStr = urlSegms[urlSegms.length - 1];
      let id = parseInt(idStr);
      id = isNaN(id) ? idStr : id;

      let newBody = Object.assign({}, JSON.parse(body));
      newBody.id = id;
      arguments[0] = JSON.stringify(newBody);
    }
    originalSend.apply(res, arguments);
  };

  next();
}

server.use(responseInterceptor);

server.use((request, response, next) => {
  console.log(request.query);
  const speakerId = Number(request.query.speaker);  const bookId = Number(request.query.book);  const meetingDate = request.query.date;
  const pageLimit = Number(request.query._limit); const pageNumber = Number(request.query._page);

  console.log("speakerId = ", speakerId);  console.log("bookId = ", bookId);  console.log("meetingDate = ", meetingDate);
  console.log("pageLimit = ", pageLimit);  console.log("pageNumber = ", pageNumber);

  // const author = Number(request.query.author);
  if (request.method === 'GET' && request.path === '/meetings' 
      && (!Number.isNaN(speakerId) || !Number.isNaN(bookId) || typeof meetingDate != 'undefined')) {
    let meetings = [];
    if (typeof meetingDate == 'undefined') {
      meetings = router.db.get('meetings').value();
    } else {
      meetings = router.db.get('meetings').filter((meeting) => meeting.date.indexOf(meetingDate) >= 0).value();
    }

    meetings = meetings.map((meeting) => 
      {
        meeting.presentations = router.db.get('presentations').filter((p) =>  
            { 
              return p.meetingId === meeting.id 
              && (Number.isNaN(speakerId) ? true: p.speakerId === speakerId) 
              && (Number.isNaN(bookId) ? true: p.bookId === bookId);
            }).value();
        return meeting;
      });
    
    meetings = meetings.filter((meeting) => meeting.presentations.length > 0);
    const total = meetings.length;
    const endMeeeting = pageLimit * pageNumber - 1; 
    const startMeeting = pageLimit * pageNumber - pageLimit;
    meetings = meetings.slice(startMeeting, endMeeeting + 1);
    // console.log(meetings);

    response.header('X-Total-Count', total);
    response.header('Access-Control-Expose-Headers', 'X-Total-Count');
    
    response.json(meetings);
  } else {
    next();
  }
});



// Use default router
server.use(router)

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
})

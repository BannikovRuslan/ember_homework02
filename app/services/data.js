import Service from '@ember/service';
import ENV from 'ember-homework02/config/environment';

export default Service.extend({

  getBooks(search, tags) {
    //http://localhost:3000/books?q=Art&tags_like=bestseller
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
      if (tags) {
        queryParams = `?q=${search}&tags_like=${tags}`;
      }
    } else {
      if (tags) {
        queryParams = `?tags_like=${tags}`;
      }
    }
    
    return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

 createBook(book) {
    return fetch(`${ENV.backendURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }).then((response) => response.json());
  },

  async updateBook(book, bookID) {
    return fetch(`${ENV.backendURL}/books/${bookID}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        }).then((response) => response.json());
  },

  async saveBook(book, uploadData, bookID) {
    return new Promise(async (resolve, reject) => {
      try {
        let savedBookPromise;
        if (typeof bookID == "undefined") {
          savedBookPromise = await this.createBook(book, uploadData);
        }
        else {
          savedBookPromise = await this.updateBook(book, bookID);
        }         

        const savedBook = savedBookPromise;

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;

        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {         
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };
        
            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });
            // eslint-disable-next-line no-console          
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },

  deleteBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, { method: 'DELETE' });
  },

  getAuthors(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }
    return fetch(`${ENV.backendURL}/authors${queryParams}`).then((response) => response.json());
  },

  getAuthor(id) {
    return fetch(`${ENV.backendURL}/authors/${id}`).then((response) => response.json());
  },

  deleteAuthor(author) {
    return fetch(`${ENV.backendURL}/authors/${author.id}`, { method: 'DELETE' });
  },

  updateAuthor(author) {
    return fetch(`${ENV.backendURL}/authors/${author.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(author)
    });
  },

  async createAuthor(author) {
    return fetch(`${ENV.backendURL}/authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(author)
    });
  }
});

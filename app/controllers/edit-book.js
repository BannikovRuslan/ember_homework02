import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'ember-homework02/config/environment';

export default Controller.extend({
  dataService: service('data'),
  
  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
      //console.log(get(this, 'tags'));
    },

    async saveBook(e) {
      e.preventDefault();
      //console.log(get(this, 'tags'));
      try {
        
        set(this, 'isUploadingFile', true);

        const bookID = this.get('model.id');

        const book = {
          title: this.get('model.title'),
          author: this.get('model.author'),
          pages: parseInt(this.get('model.pages')),
          cover: this.get('model.cover'),
          tags: typeof get(this, 'tags') == "undefined" ? this.get('model.tags'): get(this, 'tags'),
          description: this.get('model.description'),
          rating: parseFloat(this.get('model.rating'))
        }

        const uploadData = get(this, 'uploadData');

        let savedBook;
        if (typeof bookID == "undefined") {
          savedBook = this.store.createRecord('book', book);
        }
        else {
          this.get('model').setProperties(book);
          savedBook = this.get('model');
        }

        if (!uploadData) {
          await savedBook.save();
          set(this, 'isUploadingFile', false);
          this.transitionToRoute('books');
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        await uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
            // const dataToUpload = {
            //   entityName: 'books',
            //   id: savedBook.id,
            //   fileName: result.filename
            // };

            savedBook.set('cover', '/uploads/' + result.filename) 
            await savedBook.save();
            
        }); 
        set(this, 'isUploadingFile', false);
        this.transitionToRoute('books');
      } catch (error) {
        this.send('error', error);
      }
    },
    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    }
  }
});


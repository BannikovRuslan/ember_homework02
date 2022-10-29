import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

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
        const uploadData = get(this, 'uploadData');
        await this.get("dataService").saveBook({
          title: this.get('model.title'),
          author: this.get('model.author'),
          pages: this.get('model.pages'),
          cover: this.get('model.cover'),
          tags: get(this, 'tags'),
          description: this.get('model.description'),
          rating: this.get('model.rating')
        }, uploadData, this.get('model.id'));

        set(this, 'isUploadingFile', false);
        this.transitionToRoute('books');
      } catch (error) {
        this.send('error', new Error('Connection failed'));
      }

      
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    }
  }
});


import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },

    async saveBook(e) {
      e.preventDefault();
      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');
      await this.get("dataService").createBook({
        title: this.get('model.title'),
        author: this.get('model.author'),
        pages: this.get('model.pages'),
        cover: this.get('model.cover'),
        tags: this.get('model.tags'),
        description: this.get('model.description'),
        rating: this.get('model.rating')
      }, uploadData);

      set(this, 'isUploadingFile', false);
      this.transitionToRoute('books');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    change() {
      set(this, 'tags', ['1', '2', '3']);
    },

    goToTemp(/* e */) {
      //e.preventDefault();
      this.transitionToRoute('temp')
    }
  },

  reset() {
    set(this, 'isUploadingFile', false);
    set(this, 'bookName', '');
    set(this, 'authorFIO', '');
    set(this, 'pagesCount', '');
    set(this, 'bookDescriptionURL', '');
    set(this, 'tags', []);
    set(this, 'uploadData', null);
  }
});


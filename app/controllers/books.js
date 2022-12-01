import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    dataService: service('data'),
    queryParams: ["search", "tags"],
    search: '',
    tags: '',

    actions: {
        async deleteBook(book) {
            try {
                //await this.get('dataService').deleteBook(book);
                //console.log("book deleted ");
                //this.transitionToRoute("books", {queryParams: { search: '#' }});

                await book.destroyRecord();
                book.unloadRecord();
                // this.get('model').findRecord('book', book.get('id'), {backgroundReload: false}).then(function(book) {
                //     book.destroyRecord();
                // });

                //this.send('refreshBooks');
            } 
            catch (error) {
                this.send('error', new Error('Connection failed'));
            }
        },
        
        async searchBooks(event) {
            event.preventDefault();
            this.transitionToRoute("books", {queryParams: { search: this.searchBook, tags: this.tagsBook }});
        }
        
    }
});

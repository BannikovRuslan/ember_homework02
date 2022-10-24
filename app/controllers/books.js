import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service('data'),
    queryParams: ["search", "tags"],
    search: '',
    tags: '',
    actions: {
        async deleteBook(book) {
            try {
                await this.get('dataService').deleteBook(book);
                console.log("book deleted ");
                this.transitionToRoute("books", {queryParams: { search: '' }});
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

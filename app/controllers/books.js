import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service('data'),
    queryParams: ["search", "tags"],
    search: '',
    tags: '',

    async loadData() {
        try {
            this.set('isLoading', true);
            const search = typeof this.search == 'undefined'? '':this.search.replace("#","").replace(",","");
            const tags = typeof this.tags == 'undefined'? '':this.tags.replace("#","").replace(",","");
            this.set('tagsBook', tags); 
            //console.log("search=", search);
            //console.log("tags=", tags);
            const data = await this.get('dataService').getBooks(search, tags);
            this.set('model', data);
            this.set('isLoading', false);
        }
        catch (error) {
            this.send('error', new Error('Connection failed'));
        }
    },

    actions: {
        async deleteBook(book) {
            try {
                await this.get('dataService').deleteBook(book);
                //console.log("book deleted ");
                //this.transitionToRoute("books", {queryParams: { search: '#' }});
                this.send('refreshBooks');
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

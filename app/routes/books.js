import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
    dataService: service('data'),

    model() {
        let promise = new Promise((resolve, reject) => {
            later(async () => {
                try {
                    let books = await this.get('dataService').getBooks();
                    resolve(books);    
                } catch (error) {
                    reject('Connection failed');
                }
            }, 500);
        }).
        then((books) => {
            this.set('controller.model',  books);
        }).
        finally(() => {
            if (promise === this.get('modelPromise')) {
                this.set('controller.isLoading',false); 
            }
        });

        this.set('modelPromise', promise);
    },

    setupController(controller) {
        this._super(...arguments);
        if (this.get('modelPromise')) {
            controller.set('isLoading', true);
            
        }        
        
    }
});

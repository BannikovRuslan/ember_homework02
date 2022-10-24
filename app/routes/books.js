import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
    dataService: service('data'),
    
    queryParams: {
        search: {
            refreshModel: true
        },
        tags: {
            refreshModel: true
        }
    },

    model( {search, tags} ) {
        let promise = new Promise((resolve, reject) => {
            later(async () => {
                try {
                    search = typeof search == 'undefined'? '':search.replace("#","").replace(",","");
                    tags = typeof tags == 'undefined'? '':tags.replace("#","").replace(",","");
                    this.controller.set('tagsBook', tags); 
                    console.log("search=", search);
                    console.log("tags=", tags);
                    let books = await this.get('dataService').getBooks(search, tags);
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

    beforeModel(transition) {
        let chi = transition.router.currentHandlerInfos;
        let currentRouteName = this.get('routeName');
        let prevRouteName = '';
        if (chi && chi.length > 0) {
            let lastRouteName = chi[chi.length - 1].name
            prevRouteName = lastRouteName === 'loading' ? chi[chi.length - 2].name : lastRouteName;
        }

        if (prevRouteName != currentRouteName && prevRouteName !== 'application') {
            transition.promise.then(() => {
                this.send('refreshBooks');
            });
        }
    },

    actions : {
        refreshBooks() {
            this.refresh();
        }
    }
});

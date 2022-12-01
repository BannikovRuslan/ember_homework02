import Route from '@ember/routing/route';


export default Route.extend({

    queryParams: {
        search: {
            refreshModel: true
        },
        tags: {
            refreshModel: true
        }
    },

    async model({search, tags}) {
        try {
            this.set('isLoading', true);
            if (search || tags) {
                this.controller.set('tagsBook', tags);
                const data = await this.store.query('book', { q: search, tags_like: tags});
                this.set('isLoading', false);
                return data
            }
            const data = await this.store.findAll('book');
            this.set('isLoading', false);
            return data
        }
        catch (error) {
            this.send('error', error);
        }
    },


    actions : {
        refreshBooks() {
            this.refresh();
        },
        
    }
});

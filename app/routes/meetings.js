import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        fio: {
            refreshModel: true
        },
        book: {
            refreshModel: true
        }
        ,
        date: {
            refreshModel: true
        }
    },

    async model({fio, date, book}) {
        try {
            this.set('isLoading', true);
            if (fio || date || book) {
                //this.controller.set('tagsBook', tags);
                const data = await this.store.query('presentation', { q: [fio, book], tags_like: date});
                this.set('isLoading', false);
                return data
            }
            const data = await this.store.findAll('meeting');
            this.set('isLoading', false);
            return data
        }
        catch (error) {
            this.send('error', error);
        }
    },
});

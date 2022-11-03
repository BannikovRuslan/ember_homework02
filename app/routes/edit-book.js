import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
    dataService: service('data'),

    async model({ id }) {
        if (id === "new") {
            return EmberObject.create({
            "cover": "",
            "title": "",
            "author": "",
            "pages": "",
            "tags" : [],
            "rating": 0,
            "description":"https://empty.com"
        })
        }
        else {
            let data = await this.get('store').findRecord('book', id);
            let tags = data.get('tags');
            if (typeof tags == 'undefined') {
                data.set('tags', []);
            }
            return data
        }
    },
});

// import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import checkAccess from './check-access';

export default checkAccess.extend({
    can: service(),

    async model({ id }) {
        if (id === "new") {
            return EmberObject.create({
            "cover": "",
            "title": "",
            "author": "",
            "pages": "",
            "tags" : [],
            "rating": 0,
            "description":""
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

    setupController(controller, model) {
        this._super(...arguments);
        controller.set('inputErrors', false);
    },
});

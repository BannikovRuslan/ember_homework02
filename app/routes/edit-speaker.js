// import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import checkAccess from './check-access';

export default checkAccess.extend({
    dataService: service('data'),
    can: service(),

    model({ id }) {
        if (id === "new") {
            return EmberObject.create({
            "firstName": "",
            "lastName": "",
            "middleName": "",
            "foto": "/images/speaker.jpg"
        })
        }
        else {
            return this.get('store').findRecord('speaker', id);
        }
    },
});

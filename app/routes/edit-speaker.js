import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
    dataService: service('data'),
    session: service(),
    beforeModel() {
        if (!this.session.isAuthenticated) {
            this.transitionTo('login');
        }
    },

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

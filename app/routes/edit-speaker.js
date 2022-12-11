import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
    dataService: service('data'),
    currentUser: service(),
    session: service(),
    can: service(),
    
    async beforeModel() {
        this._super(...arguments);

        if (!this.session.isAuthenticated) {
            this.transitionTo('login');
        } else {
            this.currentUser.load().then(() => {
                if (this.can.cannot('edit entity')) {
                    this.transitionTo('index');
                }
            });
            
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

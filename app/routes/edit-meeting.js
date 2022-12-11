import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
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

    async model({ id }) {
        if (id === "new") {
            return EmberObject.create({
            "date": new Date(),
            "presentations": {}
        })
        }
        else {
            let data = await this.get('store').findRecord('meeting', id);
            return data
        }
    },
});

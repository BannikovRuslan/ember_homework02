import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),
    currentUser: service(),

    beforeModel() {
        this._super(...arguments);
        this.loadUser();
    },

    sessionAuthenticated() {
        this._super(...arguments);
        this.loadUser();
    },

    sessionInvalidated() {
        this.get('currentUser').resetCurrentUser();
        window.location.replace('/login');
    },

    loadUser() {
        if (this.get('session.isAuthenticated')) {
            this.get('currentUser').load();
        }
    },
    
    actions: {
        error(error, transition) {
            if (transition) {
                transition.abort();
            }            
            this.intermediateTransitionTo('error', { error: error.message});
        }
    }    
});

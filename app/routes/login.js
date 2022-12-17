import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend( {
    session: service(),
    beforeModel() {
        if (this.session.isAuthenticated) {
            this.transitionTo('index');
        }
    },

    model() {
        return {
          email: '',
          password: ''
        }
    },

    resetController(controller, isExiting, transition) {
    this._super(...arguments);
    if (isExiting) {
        controller.resetErrors();
    }
    }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default Route.extend({
    currentUser: service(),
    session: service(),

    async beforeModel() {
        this._super(...arguments);
        this.getAccess();
    },

    getAccess() {
        if (!this.session.isAuthenticated) {
            const appInstance = getOwner(this);
            const applicationLogger = appInstance.lookup('logger:app');
            const errors = [
                {
                    'detail': `Access to route denied. Anonymous user.`
                }
            ];
            applicationLogger.log(errors);
            this.transitionTo('login');
        } else {
            this.currentUser.load().then(() => {
                if (this.can.cannot('edit entity')) {
                    const appInstance = getOwner(this);
                    const applicationLogger = appInstance.lookup('logger:app');
                    const errors = [
                        {
                            'detail': `Access to route denied. User email: ${this.currentUser.user.email}`
                        }
                    ];
                    applicationLogger.log(errors);
                    this.transitionTo('index');
                }
            });
            
        }
    }
});
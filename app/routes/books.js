import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
    dataService: service('data'),
    
    queryParams: {
        search: {
            refreshModel: true
        },
        tags: {
            refreshModel: true
        }
    },

    async model( {search, tags} ) {
        return {
            isLoading: true
        }
    },

    setupController(controller, model) {
        this._super(...arguments);
        controller.set('isLoading', true);
        controller.loadData();
    },

    beforeModel(transition) {
        let chi = transition.router.currentHandlerInfos;
        let currentRouteName = this.get('routeName');
        let prevRouteName = '';
        if (chi && chi.length > 0) {
            let lastRouteName = chi[chi.length - 1].name
            prevRouteName = lastRouteName === 'loading' ? chi[chi.length - 2].name : lastRouteName;
        }

        if (prevRouteName != currentRouteName && prevRouteName !== 'application') {
            transition.promise.then(() => {
                this.send('refreshBooks');
            });
        }
    },

    actions : {
        refreshBooks() {
            this.refresh();
        },
        
    }
});

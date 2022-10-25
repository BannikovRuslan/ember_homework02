import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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

    async model() {
        return {
            isLoading: true
        }
    },

    setupController(controller) {
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
                this.send('refreshSpeakers');
            });
        }
    },

    actions : {
        refreshSpeakers() {
            this.refresh();
        },
        
    }
});

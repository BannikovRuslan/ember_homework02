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

    actions : {
        refreshSpeakers() {
            this.refresh();
        },
        
    }
});

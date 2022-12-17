// import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import checkAccess from './check-access';

export default checkAccess.extend({
    can: service(),

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

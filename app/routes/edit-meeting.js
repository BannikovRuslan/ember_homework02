import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    async model({ id }) {
        if (id === "new") {
            return EmberObject.create({
            "date": "2022-11-10",
            "presentations": {

            }
        })
        }
        else {
            let data = await this.get('store').findRecord('meeting', id);
            return data
        }
    },
});

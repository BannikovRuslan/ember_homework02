import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
    dataService: service('data'),

    model({ id }) {
        if (id === "new") {
            return EmberObject.create({
            "cover": "",
            "title": "",
            "author": "",
            "pages": "",
            "tags" : [],
            "rating": 0,
            "description":"https://empty.com"
        })
        }
        else return this.get("dataService").getBook(id);
    },
});

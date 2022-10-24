import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model() {
        console.log("create");
        return EmberObject.create({
            "cover": "пусто",
            "title": "пусто",
            "author": "пусто",
            "pages": 10,
            "tags" : ["пусто"],
            "rating": 10,
            "description":"https://empty.com"
        })
    }
});

import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
//import RSVP from 'rsvp';


export default Route.extend({
    async model({ report_id }) {
        let data;
        if (report_id === "new") {
            data = EmberObject.create({
            "date": "10.11.2022",
            "rating": 1,
            "urlPresentation": "", 
            "urlVideo": "https://presentation-video.com",
            "book": "",
            "speaker": "",
            "meetingId": this.get("meetingId"),
            "review": "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором."
        })
        }
        else {
            data = await this.get('store').findRecord('presentation', report_id);
        }

        return data;
        // return RSVP.hash({
        //     report: data,
        //     speakers1: await this.store.findAll('speaker'),
        //     books: await this.store.findAll('book'),
        // });
    },

});

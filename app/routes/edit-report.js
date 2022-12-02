import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';


export default Route.extend({
    session: service(),
    beforeModel() {
        if (!this.session.isAuthenticated) {
            this.transitionTo('login');
        }
    },

    async model({ report_id, meetingId }) {
        let data;
        let meeting = meetingId === "new" ? null : await this.get('store').findRecord('meeting', meetingId);
        if (report_id === "new") {
            const currentDate = meetingId === "new" ? new Date() : meeting.date;
            data = EmberObject.create({
            "date":  currentDate,
            "rating": 0,
            "urlPresentation": "", 
            "urlVideo": "https://presentation-video.com",
            "review": "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором."
        })
        }
        else {
            data = await this.get('store').findRecord('presentation', report_id);
        }
        data.meeting = meeting;
        return data;
        // return RSVP.hash({
        //     report: data,
        //     speakers1: await this.store.findAll('speaker'),
        //     books: await this.store.findAll('book'),
        // });
    },

});

import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';


export default Route.extend({
    currentUser: service(),
    session: service(),
    can: service(),
    
    async beforeModel() {
        this._super(...arguments);

        if (!this.session.isAuthenticated) {
            this.transitionTo('login');
        } else {
            this.currentUser.load().then(() => {
                if (this.can.cannot('edit entity')) {
                    this.transitionTo('index');
                }
            });
            
        } 
    },

    async model({ report_id, meetingId }) {
        let data;
        let meeting = meetingId === "new" ? null : await this.get('store').findRecord('meeting', meetingId);
        if (report_id === "new") {
            const currentDate = meetingId === "new" ? new Date() : meeting.date;
            data = EmberObject.create({
            "date":  currentDate,
            "rating": "",
            "urlPresentation": "", 
            "urlVideo": "",
            "review": ""
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
    
    setupController(controller, model) {
        this._super(...arguments);
        controller.set('inputErrors', false);
    },
});

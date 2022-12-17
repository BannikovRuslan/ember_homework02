import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
    actions: {
        deletePresentation(presentation) {
            this.onclick(presentation);
        },
        deleteMeeting(presentation) {
            this.onclick(presentation);
        }
    },
});

import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),

    actions: {
        deleteSpeaker(event) {
            event.preventDefault();

            this.onclick({
                id: this.get('id'),
                firstName: this.get('firstName'),
                lastName: this.get('lastName'),
                middleName: this.get('middleName'),
            });
        }
    },
});

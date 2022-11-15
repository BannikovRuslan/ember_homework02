import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(event) {
            event.preventDefault();

            this.onsubmit({
                id: this.get('idSpeaker'),
                firstName: this.get('firstName'),
                lastName: this.get('lastName'),
                middleName: this.get('middleName'),
                foto: "/images/speaker.jpg",
            });
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        this.setProperties({
            idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
            firstName: this.get('speaker.firstName'),
            lastName: this.get('speaker.lastName'),
            middleName: this.get('speaker.middleName')
        });
    }
});

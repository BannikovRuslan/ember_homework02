import Component from '@ember/component';

export default Component.extend({
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

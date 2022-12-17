import Component from '@ember/component';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
    firstName: [
        validator('presence', true),
    ],
    lastName: [
        validator('presence', true),
    ],
    middleName: [
        validator('presence', true),
    ]
});

export default Component.extend(Validations, {
    isFormValid: computed.alias('validations.isValid'),
    actions: {
        submitForm(event) {
            event.preventDefault();
            this.set('inputErrors', !this.get('isFormValid'));
            if (this.get('isFormValid')) {
                this.onsubmit({
                    id: this.get('idSpeaker'),
                    firstName: this.get('firstName'),
                    lastName: this.get('lastName'),
                    middleName: this.get('middleName'),
                    foto: "/images/speaker.jpg",
                });
            }
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        this.setProperties({
            idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
            firstName: this.get('speaker.firstName'),
            lastName: this.get('speaker.lastName'),
            middleName: this.get('speaker.middleName'),
            inputErrors: false,
        });
    }
});

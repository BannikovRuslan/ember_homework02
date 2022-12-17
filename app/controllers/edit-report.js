import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    'presentation.book': [
        validator('presence', true),
    ],
    'presentation.speaker': [
        validator('presence', true),
    ],
    'presentation.rating': [
        validator('number', {
          integer: true,
          positive: true,
          gte: 0,
          lte: 5
        }),
    ],
});


export default Controller.extend(Validations, {

    queryParams: ['meetingId'],
    meetingId: "new",
    isFormValid: computed.alias('validations.isValid'),
    
    speakersData: computed('', async function() {
        const data = await this.store.findAll('speaker');
        return data;
    }),

    booksData: computed('', async function() {
        const data = await this.store.findAll('book');
        return data;
    }),

    actions: {
        async savePresentation(event) {
            event.preventDefault();

            try {
                let meeting;
                if (this.get('meetingId') === "new") {
                    const newMeeting = {
                        "date": this.get('model.date'),
                    }
                    
                    let meetingData = this.get('store').createRecord('meeting', newMeeting)
                    meeting = await meetingData.save();
                } else {
                    meeting = this.model.meeting;//await this.get('store').findRecord('meeting', this.get('meetingId'));
                }

                if (typeof meeting.id != "undefined") {
                    let presentationData;
                    if (typeof this.get('model.id') == "undefined") {
                        const newPresentation = {
                            "date": this.get('model.date'),
                            "rating": parseInt(this.get('model.rating')),
                            "urlPresentation": this.get('model.urlPresentation'),
                            "urlVideo": this.get('model.urlVideo'),
                            "review": this.get('model.review'),
                            "speaker": this.get('model.speaker'),
                            "meeting": meeting,
                            "book": this.get('model.book'),
                        }
                        presentationData = this.get('store').createRecord('presentation', newPresentation);
                    } else {                      
                        presentationData = this.get('model');
                    }
                    this.set('presentation', presentationData);
                    this.set('inputErrors', !this.get('isFormValid'));
                    if (this.get('isFormValid')) {
                        await presentationData.save();
                        this.transitionToRoute("edit-meeting", meeting.id); 
                    }
                    
                }

            } catch (error) {
                this.send('error', error);
            }                    
        },

    },

    didReceiveAttrs() {
        this._super(...arguments);
        this.setProperties({
            inputErrors: false,
            presentation: {}
        });
    }

});

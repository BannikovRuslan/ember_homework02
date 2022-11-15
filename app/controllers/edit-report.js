import Controller from '@ember/controller';
import { computed } from '@ember/object';
import EmberObject from '@ember/object';
import { Alert } from 'bootstrap';

export default Controller.extend({

    queryParams: ['meetingId'],
    meetingId: "new",
    
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

            if (typeof this.get('model.book.id') == "undefined") {
                alert("Укажите книгу!");
                return;
            }

            if (typeof this.get('model.speaker.id') == "undefined") {
                alert("Укажите докладчика!");
                return;
            }

            try {
                let meeting;
                if (this.get('meetingId') === "new") {
                    const newMeeting = {
                        "date": this.get('model.date'),
                    }
                    
                    let meetingData = this.get('store').createRecord('meeting', newMeeting)
                    meeting = await meetingData.save();
                } else {
                    meeting = await this.get('store').findRecord('meeting', this.get('meetingId'));
                }

                if (typeof meeting.id != "undefined") {
                    let presentationData;
                    if (typeof this.get('model.id') == "undefined") {
                        const presentation = {
                            "date": this.get('model.date'),
                            "rating": parseInt(this.get('model.rating')),
                            "urlPresentation": this.get('model.urlPresentation'),
                            "urlVideo": this.get('model.urlVideo'),
                            "review": this.get('model.review'),
                            "speaker": this.get('model.speaker'),
                            "meeting": meeting,
                            "book": this.get('model.book'),
                        }
                        presentationData = this.get('store').createRecord('presentation', presentation);
                    } else {
                        
                        presentationData = this.get('model');
                    }
                    await presentationData.save();
                    this.transitionToRoute("edit-meeting", meeting.id); 
                }

            } catch (error) {
                this.send('error', error);
            }                    
        },

    }

});

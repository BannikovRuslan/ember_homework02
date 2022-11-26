import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async deletePresentation(presentation) {
            try {
                await presentation.destroyRecord();
                presentation.unloadRecord();
            } 
            catch (error) {
                this.send('error', error);
            }
        },
        async saveMeeting(event) {
            event.preventDefault();

            try {
                let meeting = this.get('model');
                if (typeof meeting.id == "undefined") {
                    const newMeeting = {
                        "date": meeting.date,
                    }
                    let meetingData = this.store.createRecord('meeting', newMeeting);
                    meeting = await meetingData.save();
                } else {
                    // await this.get('store').findRecord('meeting', meeting.id).then(function(meeting) {
                    //     meeting.set('date', )
                    // });
                    await meeting.save();
                    await meeting.presentations.forEach(presentation => {
                        presentation.set('date', meeting.date);
                        presentation.save();
                    });
                }
                if (typeof meeting.id != "undefined") {
                    this.transitionToRoute('meetings', { queryParams: { page: meeting.id } });
                }
                
            } catch (error) {
                this.send('error', error);
            }                    
        },
    }
});

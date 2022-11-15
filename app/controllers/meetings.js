import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async searchPresentations(meetingId) {
            event.preventDefault();
            let data = await this.store.query('presentation', { meetingId: meetingId});
            return data;
        }     
    }
});

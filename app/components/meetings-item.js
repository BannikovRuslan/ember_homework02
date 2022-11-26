import Component from '@ember/component';

export default Component.extend({
    actions: {
        deletePresentation(presentation) {
            this.onclick(presentation);
        },
        deleteMeeting(presentation) {
            this.onclick(presentation);
        }
    },
});

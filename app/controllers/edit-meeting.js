import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async deletePresentation(presentation) {
            try {
                await presentation.destroyRecord();
            } 
            catch (error) {
                this.send('error', error);
            }
        },
    }
});

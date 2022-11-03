import Controller from '@ember/controller';


export default Controller.extend({
    actions: {
        async saveSpeaker(speaker) {
            try {
                let savedSpeaker;
                if (typeof speaker.id == "undefined") {
                    savedSpeaker = this.store.createRecord('speaker', speaker);
                } else {
                    this.get('model').setProperties(speaker);
                    savedSpeaker = this.get('model');
                }

                await savedSpeaker.save();
                this.transitionToRoute('speakers'); 

            } catch (error) {
                this.send('error', error);
            }                    
        },
    }
});

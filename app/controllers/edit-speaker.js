import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service('data'),
    actions: {
        async saveSpeaker(speaker) {
            try {
                if (typeof speaker.id == "undefined") {
                    await this.get("dataService").createSpeaker(speaker);
                } else {
                    await this.get("dataService").updateSpeaker(speaker);
                }
                
                this.transitionToRoute('speakers'); 
            } catch (error) {
                this.send('error', new Error('Connection failed'));
            }                    
        },
    }
});

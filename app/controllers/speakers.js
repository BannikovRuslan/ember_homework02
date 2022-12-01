import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    queryParams: ["search"],
    search: '',

    async loadData() {
        try {
            this.set('isLoading', true);
            const search = typeof this.search == 'undefined'? '':this.search.replace("#","").replace(",","");

            if (search) {
                const data = await this.store.query('speaker', { q: search});
                this.set('model', data);
            } 
            else {
                const data = await this.store.findAll('speaker');
                this.set('model', data);
            }
            this.set('isLoading', false);
        }
        catch (error) {
            this.send('error', error);
        }
    },

    actions: {
        async deleteSpeaker(speaker) {
            try {
                await speaker.destroyRecord();
                speaker.unloadRecord();
            } 
            catch (error) {
                this.send('error', error);
            }
        },
        
        async searchSpeakers(event) {
            event.preventDefault();
            this.transitionToRoute("speakers", {queryParams: { search: this.searchBook }});
        }     
    }
});

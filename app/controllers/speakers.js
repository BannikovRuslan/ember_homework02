import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';

const DELAY_TIME = 2000;

export default Controller.extend({
    session: service(),
    queryParams: ["search"],
    search: '',

    async loadData() {
        this.set('searchSpeaker', this.search); 
        this.set('isLoading', true);
        this.loadDataStore();
        this.set('isLoading', false);
    },

    async loadDataStore() {
        try {
            const search = this.searchSpeaker;
            if (search) {
                const data = await this.store.query('speaker', { q: search});
                this.set('model', data);
            } 
            else {
                const data = await this.store.findAll('speaker');
                this.set('model', data);
            }
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
            this.transitionToRoute("speakers", {queryParams: { search: this.searchSpeaker }});
        },
        
        loadDataOnInput(event) {
            event.preventDefault();
            
            debounce(() => {
                this.set('isLoading', true);
                this.loadDataStore();
                this.set('isLoading', false);
                console.log(this.searchSpeaker);
            }, DELAY_TIME);
            
        },
    }
});

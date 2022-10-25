import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service('data'),
    queryParams: ["search"],
    search: '',

    async loadData() {
        try {
            this.set('isLoading', true);
            const search = typeof this.search == 'undefined'? '':this.search.replace("#","").replace(",","");
            console.log("search=", search);
            const data = await this.get('dataService').getSpeakers(search);
            this.set('model', data);
            this.set('isLoading', false);
        }
        catch (error) {
            this.send('error', new Error('Connection failed'));
        }
    },

    actions: {
        async deleteSpeaker(speaker) {
            try {
                await this.get('dataService').deleteSpeaker(speaker);
                console.log("speaker deleted ");
                this.send('refreshSpeakers');
            } 
            catch (error) {
                this.send('error', new Error('Connection failed'));
            }
        },
        
        async searchSpeakers(event) {
            event.preventDefault();
            this.transitionToRoute("speakers", {queryParams: { search: this.searchBook }});
        }     
    }
});

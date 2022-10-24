import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    actions: {
        searchBooks(event) {
            event.preventDefault();

            this.onsubmit({
                
            })
        }
    }
});

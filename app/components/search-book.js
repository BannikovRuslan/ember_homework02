import Component from '@ember/component';

export default Component.extend({

    actions: {
        searchBooks(event) {
            event.preventDefault();

            this.onsubmit({
                
            })
        }
    }
});

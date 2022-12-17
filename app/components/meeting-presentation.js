import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
    ratingInPercent: computed('presentation.rating', function() {
        const rating = this.get('presentation.rating');
        return rating / 5 * 100;
    }),
    styleRatingInPercent: computed('presentation.rating', function() {
        const rating = this.ratingInPercent;
        return htmlSafe("width: " + rating + "%;");
    }),
    actions: {
        deletePresentation(event) {
            event.preventDefault();
            this.onclick(this.get('presentation'));
        }
    },
});

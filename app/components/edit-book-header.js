import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    titlePhrase: computed('modelID', function () {
        return typeof this.get('modelID') == "undefined" ? "Новая книга:" : 'Редактирование книги: ' + this.get('title');
    }),
    
    didInsertElement() {
        this._super(...arguments);
    }
});

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';
import { get, set, computed } from '@ember/object';

export default Controller.extend({
    session: service(),
    currentUser: service(),
    i18n: service(),

    currentLocale: ENV.i18n.defaultLocale,

    isRussian: computed('currentLocale', function () {
        return get(this, 'currentLocale') === 'ru';
    }),

    isEnglish: computed('currentLocale', function () {
        return get(this, 'currentLocale') === 'en';
    }),


    actions: {
        async logout(e) {
            e.preventDefault();
            this.get('session').invalidate();
        },
        changeLocale(e) {
            set(this, 'currentLocale', e.target.value);
            set(this, 'i18n.locale', get(this, 'currentLocale'));
        }
    },

    init() {
      this._super(...arguments);
      set(this, 'i18n.locale', get(this, 'currentLocale'));
    }
});

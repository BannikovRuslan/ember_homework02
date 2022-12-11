import { Ability } from 'ember-can';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Ability.extend({
    currentUser: service(),
    session: service(),

    // only the person who can edit it
    canEdit: computed(function () {
        if (!this.get('session.isAuthenticated')) {
            return false;
        }

        try {
            const adminDomain = "@admin.ru";
            return this.currentUser.get('user.email').endsWith(adminDomain);
        } catch (error) {
            return false;
        }
        
    }).volatile()
});

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import { getOwner } from '@ember/application';

const Validations = buildValidations({
  'user.email': [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: EmberObject.extend({
      //   message: computed('user.email', 'model.i18n.locale', function () {
      //     return '{description}' + '\n';
      //   })
      // }).create().toString(),
    }),
    validator('format', { type: 'email' })
  ],
  'user.password': [
    validator('ds-error'),
    validator('presence', {
      presence: true,
    }),
  ],
});


export default Controller.extend(Validations, {
  i18n: service(),
  isFormValid: computed.alias('validations.isValid'),

  session: service(),
  isRemember: false,

  errorsLogger: service(),
  
  actions: {
    async login(e) {
      e.preventDefault();
      let authUser = {
        email: this.get("model.email"),
        password: this.get("model.password"),
      };
      this.set('user', authUser);
      this.set('inputErrors', !this.get('isFormValid'));
      if (this.get('isFormValid')) {
        try {
          await this.get('session').authenticate('authenticator:jwt', this.user);
          this.send('refreshSessionAuthenticated');
        }
        catch(e) {
          this.send('error', e);
          const appInstance = getOwner(this);
          const applicationLogger = appInstance.lookup('logger:app');
          applicationLogger.log(e.json.errors);
        }
      }      
    },

    error(error, transition) {
      if (error instanceof Error) {
        return true;
      }

      this.set('errors', error.json.errors);
      return false;
    }
  },

  resetErrors() {
    this.set('errors', {});
  }
});

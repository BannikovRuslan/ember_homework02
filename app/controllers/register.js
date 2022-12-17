import Controller from '@ember/controller';
import fetch from 'fetch';
import ENV from '../config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { getOwner } from '@ember/application';

const Validations = buildValidations({
  'user.email': [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  'user.password': [
    validator('ds-error'),
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
});

export default Controller.extend(Validations, {
  i18n: service(),
  isFormValid: computed.alias('validations.isValid'),

  iAmRobot: true,
  reset: false,

  actions: {
    async saveUser(e) {
      e.preventDefault();
      let newUser = {
        'email': this.model.email,
        'password': this.model.password
      };

      this.set('user', newUser);
      this.set('inputErrors', !this.get('isFormValid'));
      if (this.get('isFormValid')) {
        try {
          newUser = this.get('store').createRecord('user', newUser);
          ///this.set('user', this.get('store').createRecord('user', newUser));
          await newUser.save();
          //this.toto=await this.user.save();
          this.transitionToRoute('index');
        }
        catch(e) {
          e.user = newUser;
          this.set('user', newUser);
          this.set('inputErrors', !this.get('isFormValid'));
          this.send('error', e);
          const appInstance = getOwner(this);
          const applicationLogger = appInstance.lookup('logger:app');
          applicationLogger.log(e.errors);
        }
      }      
    },

    error(error, transition) {
      this.set('errors', error.user.errors);
      return false;
    },

    async verified(key) {
      try {
        const { success } = await (await fetch(`${ENV.backendURL}/recaptcha?key=${key}`)).json();

        this.set('iAmRobot', !success);
      } catch (error) {
        this.set('reset', true);
      }
    },

    expired() {
      this.set('iAmRobot', true);
    }
  },

  resetErrors() {
    this.set('errors', {});
  },

  didReceiveAttrs() {
    this.setProperties({
      user:{},
      inputErrors: false,
    });
  }
});

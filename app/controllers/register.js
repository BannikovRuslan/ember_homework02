import Controller from '@ember/controller';
import fetch from 'fetch';
import ENV from '../config/environment';

export default Controller.extend({
  iAmRobot: true,
  reset: false,
  actions: {
    async saveUser(e) {
      e.preventDefault();
      let newUser = {
        'email': this.model.email,
        'password': this.model.password
        };

      try {
        newUser = this.get('store').createRecord('user', newUser);
        await newUser.save();
        this.transitionToRoute('index');
      }
      catch(e) {
        e.user = newUser;
        this.send('error', e);
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
  }
});

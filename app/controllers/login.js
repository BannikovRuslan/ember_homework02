import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    isRemember: false,
    
    actions: {
      async login(e) {
        e.preventDefault();
        try {
          await this.get('session').authenticate('authenticator:jwt', {
            email: this.get("model.email"),
            password: this.get("model.password"),
            isRemember: this.isRemember
          });
        }
        catch(e) {
          this.send('error', e);
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

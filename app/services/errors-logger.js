import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Ember from 'ember';
import RSVP from 'rsvp';

export default Service.extend({
    store: service(),

    init() { 
        this._super(...arguments);
        let _this = this;

        let onError = function(error) {
            // If `this` is not undefined then assuming this function was called as promise error handler. So we not performing it.
            if (error instanceof Error) {
                Ember.Logger.error(error);
                const errors = [{
                    'detail': error.stack
                }];
                _this.log(errors);
            }
        }

        // let onPromiseError = function(reason) {
        //     if (_this.get('showPromiseErrors')) {
        //         Ember.Logger.error(reason);
        //     }
        
        //     _this.log(reason);
        // };

        Ember.onerror = onError;
        // RSVP.on('error', onPromiseError);
    },

    async log(errors) {
        try {

            for (const error of errors) {
                const errorObject = {
                    'date': new Date(),
                    'ip': '',
                    'url': document.location.href,
                    'message': error.detail,
                }
    
                const newError = this.get('store').createRecord('error', errorObject);
                await newError.save();
            }
            
        } catch (e) {
            this.send('error', e);
        }
    }
});

import DS from 'ember-data';

import { validator, buildValidations } from 'ember-cp-validations';

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

export default DS.Model.extend(Validations, {
    email: DS.attr('string'),
    password: DS.attr(),
    passwordConfirmation: DS.attr()
});

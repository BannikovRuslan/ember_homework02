import ErrorsLogger from '../services/errors-logger';

export function initialize(application) {
  application.register('logger:app', ErrorsLogger);
  application.inject('route', 'errorsLogger', 'logger:app');
  application.inject('controller', 'errorsLogger', 'logger:app');
  application.inject('component', 'errorsLogger', 'logger:app');
}

export default {
  initialize
};

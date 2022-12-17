import application from "../initializers/application";

export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  // const appLogger = appInstance.lookup('logger:app');
  appInstance.inject('route', 'errorsLogger', 'logger:app');
  appInstance.inject('controller', 'errorsLogger', 'logger:app');
  appInstance.inject('component', 'errorsLogger', 'logger:app');
}

export default {
  initialize
};

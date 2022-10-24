import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books');
  this.route('speakers');
  this.route('edit-book', { path: '/edit-book/:id'});
  this.route('edit-speaker');
  this.route('create-book');
  this.route('loading');
  this.route('404', { parh: '*path'});
  this.route('error');
});

export default Router;

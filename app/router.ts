import Router from '@ember/routing/router';
import config from './config/environment';

const MyRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('show', { path: ':id' });
  });

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
});

export default Router;

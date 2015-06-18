import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todos', {path: '/'}, function() {
    this.route('active');
    this.route('complete');
  });

  this.resource('order', {path: '/order'}, function() {
    this.route('details');
  });
  
});

export default Router;

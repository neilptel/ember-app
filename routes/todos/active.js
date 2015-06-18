import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    console.log('model hook called');
    return this.store.filter('todo',function(todo){
      console.log(todo);
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller, model){
    this.render('todos.index', {
      model:model
    });
  }
});


/*Remeber the job of the route is to get the data and decide which template to display. 

1. Our model hook tells the route that we want to filter the todo model base on whether each todo is not complete, 
return !todo.get('isCompleted');

2. Our renderTemplate hook tells the app that we want render our todos.index template.

Our renderTemplate hook tells the app that we want render our todos.index template. 
The reason for this is that our index route should just be a list of our resource, 
our active route is a list of our resources with a few resources filtered out (as is the complete route) 

*/
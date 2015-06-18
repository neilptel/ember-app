import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('todo');
  },
  actions: {            //This action will be executed if controller is not present, if action is present in controller then it will be executed first.

    createTodo: function(newTitle)
    {
      var todo = this.store.createRecord('todo', {
        title:newTitle,
        isCompleted: false
      });

      //this.controllerFor('todos').set('newTitle','');

      todo.save();
    },
    acceptChanges: function (todo){
      alert(todo.get('title'));
      if(Ember.isEmpty(todo.get('title'))){     //I think 'get' is used here becasue its datastore object not the model object
        this.send('deleteTodo', todo);
      }
      else{
        todo.save();
      }
    },
    deleteTodo: function(todo){
      todo.deleteRecord();
    }
  }

});


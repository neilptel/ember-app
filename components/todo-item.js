import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editTodo : function(){
      this.set('isEditing',true);
    },
    acceptChanges: function() {
      this.set('isEditing',false);
      this.sendAction('action',this.get("todoc"));  //We are using the sendAction method to send our acceptChanges method out of the component.
    },
    deleteTodo: function(todo) {
      this.sendAction('deleteTodo', todo);          //Similar case but here we are taking todo as parameter and passing it along
    }
  }
    
});

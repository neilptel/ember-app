import Ember from "ember";

export default Ember.ArrayController.extend({
  remaining: function(){
    alert('called');
      return this.filterBy('isCompleted',false).get('length');     ///'this' is controller, and it returns the items with matched properties
   }.property('@each.isCompleted'), //THis is computed property: oberservs on the value here
  inflection: function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';  //sigular vs plural
  }.property('remaining')

});



/* OTHER WAY TO DO THIS:

LOOK AT THE components/todo-list.js to see the diffirence. there "this" is not available so above code wont work there.

remaining: Ember.computed('model.@each.isCompleted', function() {
        var model = this.get('model');
        return model.filterBy('isCompleted', false).get('length');
    }),
    inflection: Ember.computed('remaining', function() {
        var remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    })



*/

/*
In our remaining property, we are observing model.@each.isComplete.
This means that we are looking at every instance (@each) of the model and the isComplete property of each instance. 
This means that if the isComplete property changes on any of the todos, the computed property will recalculate.

if you changed the title property of a todo, this function would not recalculate. 
The actual computed property is the number (.get('length')) of models where isComplete is false (model.filterBy('isComplete', false)
*/
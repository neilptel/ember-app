import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createTodo: function(newTitle){
      this.set('newTitle','');
      this.sendAction('createTodo', newTitle);
    },
    clearCompleted: function(){
      var model = this.get('model');

    }
  },
  remaining: Ember.computed('model.@each.isCompleted', function() {
    var model = this.get('model');
    return model.filterBy('isCompleted', false).get('length');
  }),
  inflection: Ember.computed('remaining', function() {
    var remaining = this.get('remaining');
    return (remaining === 1) ? 'item' : 'items';
  }),
  //hasCompleted: Ember.computed('model.@each.isCompleted', function() {                    //I did this way before, but this can be dependent on computed property as you can see below
  //  var model = this.get('model');
  //  console.log(model.filterBy('isCompleted',true).get('length') > 0);
  //  return model.filterBy('isCompleted',true).get('length') > 0;
  //}),
  completed: Ember.computed('model.@each.isCompleted', function(){
    var model = this.get('model');
    return model.filterBy('isCompleted',true).get('length');
  }),
  hasCompleted: Ember.computed('completed', function() {
    return this.get('completed') > 0;
  }),
  allAreDone: function(key,value){
    var model = this.get('model');
    console.log(key + ':' + value);
    if(value === undefined) ///When checkbox is not set explicitly: when page is loaded first time and this property is requested.
    {
      return model.get('length') > 0 && model.isEvery('isCompleted',true);
    } else {
      model.setEach('isCompleted',value);
      model.invoke('save');
      return value;
    }

  }.property('@each.isCompleted') //observer on this

});

import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('order');
  },
  actions: {            //This action will be executed if controller is not present, if action is present in controller then it will be executed first.

    createOrder: function(neworder)
    {
      
    },
    acceptChanges: function (order){
      
    },
    deleteOrder: function(order){
      
    }
  }

});


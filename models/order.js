import DS from 'ember-data';
 
export default DS.Model.extend({
    $id: DS.attr('string'),  
    $type: DS.attr('string'),
    //id: DS.attr('string'), //This is not required
    customer: DS.attr('string'),
    orderdate: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            $id: 1,
            $type: "Full Type Name",
            id: 1,
            customer: "Customer Name 1",
            orderdate: "01/01/01"
        },
        {
          $id: 2,
          $type: "Full Type Name hahah",
          id: 2,
          customer: "Customer Name 2",
          orderdate: "01/01/01"
        }, {
          $id: 3,
          $type: "Full Type Name",
          id:3,
          customer: "Customer Name 3",
          orderdate: "01/01/01"
        }, {
          $id: 4,
          $type: "Full Type Name",
          id:4,
          customer: "Customer Name 4",
          orderdate: "01/01/01"
        }, {
          $id: 5,
          $type: "Full Type Name",
          id: 6,
          customer: "Customer Name 6",
          orderdate: "01/01/2016"
        },
    ]
});
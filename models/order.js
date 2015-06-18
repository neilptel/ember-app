import DS from 'ember-data';
 
export default DS.Model.extend({
    $id: DS.attr('string'),
    $type: DS.attr('string'),
    Id :DS.attr('string'),
    Customer: DS.attr('string'),
    OrderDate: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            $id: 1,
            $type: "Full Type Name",
            Id: 1,
            Customer: "Customer Name 1",
            OrderDate: "01/01/01"
        },
        {
          $id: 2,
          $type: "Full Type Name",
          Id: 2,
          Customer: "Customer Name 2",
          OrderDate: "01/01/01"
        }, {
          $id: 3,
          $type: "Full Type Name",
          Id:3,
          Customer: "Customer Name 3",
          OrderDate: "01/01/01"
        }, {
          $id: 4,
          $type: "Full Type Name",
          Id:4,
          Customer: "Customer Name 4",
          OrderDate: "01/01/01"
        }, {
          $id: 5,
          $type: "Full Type Name",
          Id: 6,
          Customer: "Customer Name 6",
          OrderDate: "01/01/01"
        },
    ]
});
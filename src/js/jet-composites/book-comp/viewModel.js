/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';


    function Task(data) {
            this.image = ko.observable(data.image);
      this.title = ko.observable(data.title);
      this.author = ko.observable(data.author);
      this.description = ko.observable(data.description);
      this.available_Books = ko.observable(data.available_Books);
    }
    function BookModel() {
      var self = this;
      self.books = ko.observableArray([]);

      $.getJSON("https://immense-refuge-39063.herokuapp.com/api/booklist", function(allData) {
        // console.log(allData);
        var mappedTasks = $.map(allData, function(item) {
          return new Task(item)
        });
        self.books(mappedTasks);
      });


    }

    return new BookModel();

function addNewBooks(){
        var self = this;
        self.addedBooks = ko.observableArray([]);

        $.getJSON("https://immense-refuge-39063.herokuapp.com/api/booklist", function(shoesAdded){
                // console.log("-----------", shoesAdded);
                var mappedShoes = $.map(shoesAdded, function(shoe){
                        return new Task( shoe)
                });
                self.addedBooks(mappedShoes);
        });
}

  });




  // function Guest(data){
  //     this.id = ko.observable(data.id);
  //     this.name = ko.observable(data.name);
  //     this.email = ko.observable(data.email);
  //     this.guests = ko.observable(data.guests);
  //     this.code = ko.observable(data.code);
  // }
  //
  // function guestListViewModel(){
  //     //Data
  //     var self = this;
  //     self.guests = ko.observableArray([]);
  //     self.guestsNumber = 0;
  //
  //     $.getJSON('/php/guests_json.php', function(json) {
  //         var mappedGuests = $.map(json, function(item) { return new Guest(item) });
  //         self.guests(mappedGuests);
  //         self.guestsNumber = (self.guests().length);
  //         $('.dlt_btn').button();
  //
  //     });
  //
  //     self.removeGuest = function(guest) {
  //         self.guests.destroy(guest);
  //     };
  //
  //     self.save = function() {
  //         var data = 'json=' + ko.toJSON({guests: self.guests });
  //         $.ajax("/php/save_guests.php", {
  //             data: data,
  //             type: "post",
  //             success: function(result) {$('#server').html(result)}
  //         })
  //     }
  //
  //     self.totalGuests = ko.computed(function() {
  //         var total = 0;
  //         ko.utils.arrayForEach(self.guests(), function(guest) {
  //             var value = guest.id;
  //             console.log(value);
  //             if (!isNaN(value)) {
  //                 total += value;
  //             }
  //         });
  //         return total;
  //     });
  //
  // }
  //
  // ko.applyBindings(new guestListViewModel);
  //
  //


    // function ExampleComponentModel(context) {
    //     var self = this;
    //     self.composite = context.element;
    //     //Example observable
    //
    //     context.props.then(function (propertyMap) {
    //         //Store a reference to the properties for any later use
    //         self.properties = propertyMap;
    //
    //         //Parse your component properties here
    //
    //     });
    // };
    //
    // //Lifecycle methods - uncomment and implement if necessary
    // //ExampleComponentModel.prototype.activated = function(context){
    // //};
    //
    // //ExampleComponentModel.prototype.attached = function(context){
    // //};
    //
    // //ExampleComponentModel.prototype.bindingsApplied = function(context){
    // //};
    //
    // //ExampleComponentModel.prototype.detached = function(context){
    // //};
    //
    // return ExampleComponentModel;
// });

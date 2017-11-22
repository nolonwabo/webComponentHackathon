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

    //return new DashboardViewModel();
    function BookModel() {
      var self = this;

      $.getJSON("https://immense-refuge-39063.herokuapp.com/api/booklist", function(allData) {
        console.log(allData);
        var mappedTasks = $.map(allData, function(item) {
          return new Task(item)
        });
        self.books(mappedTasks);
      });

      self.books = ko.observableArray([]);

    }

    return new BookModel();

  });





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

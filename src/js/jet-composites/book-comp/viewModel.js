/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery','ojs/ojrouter'], function (oj, ko, $) {
    'use strict';



    function Task(data) {
      return {
        image : ko.observable(data.image),
        title :  ko.observable(data.title),
        author : ko.observable(data.author),
        description : ko.observable(data.description),
        available_Books : ko.observable(data.available_Books),
        index: data._id
      }
    }

    //return new DashboardViewModel();
    function BookModel() {

      var self = this;
      var router = oj.Router.rootInstance;
      self.clickHandler = function(evt,ui){
        console.log(evt.index);
        router.store(evt.index);
        router.go('about');
      }

      self.books = ko.observableArray([]);

      $.getJSON("https://immense-refuge-39063.herokuapp.com/api/booklist", function(allData) {
        //console.log("-----");
        //console.log(allData);
        var mappedTasks = $.map(allData.data, function(item) {
          //console.log("***");
          //console.log(item);

          return new Task(item)
        });
        self.books(mappedTasks);
      });


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

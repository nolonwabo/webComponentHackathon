/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';



    function Task(data) {
      return {
        image : ko.observable(data.image),
        title :  ko.observable(data.title),
        author : ko.observable(data.author),
        description : ko.observable(data.description),
        available_Books : ko.observable(data.available_Books),
      }
    }
    function BookModel() {
      var self = this;
      self.books = ko.observableArray([]);

      $.post( "https://immense-refuge-39063.herokuapp.com/api/booklist", function( newShoes ) {
              console.log("+==============================");
              var mappedBooks = $.map(newShoes.data, function(shoe){
                      return new Task(shoe)
              });
              self.books(mappedBooks)
      });

      $.getJSON("https://immense-refuge-39063.herokuapp.com/api/booklist", function(allData) {
              console.log("ppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");

        var mappedTasks = $.map(allData.data, function(item) {
          return new Task(item)
        });
        self.books(mappedTasks);
      });


    }

    return new BookModel();
// ========================================================================
    // function BookModels() {
    //   var self = this;
    //   self.newBooks = ko.observableArray([]);
    //
    //   $.post( "https://immense-refuge-39063.herokuapp.com/api/booklist", function( newShoes ) {
    //     console.log("+==============================");
    //     var mappedBooks = $.map(newShoes.data, function(shoe){
    //             return new Task(shoe)
    //     });
    //     self.newBooks(mappedBooks)
    //   });
    //
    // }
    //
    // return new BookModels();
  });

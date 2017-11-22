/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';



    // function AddBooks(book) {
    //   return {
    //     image : ko.observable(data.image),
    //     title :  ko.observable(data.title),
    //     author : ko.observable(data.author),
    //     description : ko.observable(data.description),
    //     available_Books : ko.observable(data.available_Books),
    //   }
    // }
    //
    // function newBooksModel() {
    //         var self = this;
    //         self.shoesArray = ko.observableArray([]);
    //
    //         $.post( "https://immense-refuge-39063.herokuapp.com/api/booklist", function( newBook ) {
    //                 console.log("+==============================");
    //                 var mappedBooks = $.map(newBook.book, function(newBooks){
    //                         return new AddBooks(newBooks)
    //                 });
    //                 self.shoesArray(mappedBooks)
    //         });
    // }
    // return new newBooksModel();
    // ===================================

    function Task(data) {
      return {
        image : ko.observable(data.image),
        title :  ko.observable(data.title),
        author : ko.observable(data.author),
        description : ko.observable(data.description),
        available_Books : ko.observable(data.available_Books),
      }
    }

$("#add").click(function(data){
        $.post( "https://immense-refuge-39063.herokuapp.com/api/booklist", function( newBook ) {
                console.log("+==============================");
                var mappedBooks = $.map(newBook.data, function(book){
                        return new Task(book)
                });
                self.books(mappedBooks)
        });
})

    function BookModel() {
      var self = this;
      self.books = ko.observableArray([]);

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





// function addNewBooks(data) {
//
// }
//
// //   var data = [];
// // var viewModel = {
// //     vendors: ko.observableArray(data)
// // };
// ko.applyBindings(viewModel);
//
//         var self = this;

    // $('#add').click(function (data) {
    //     // return{image : ko.observable("data.image"),
    //     // var title =  ko.observable("data title");
    //     // var author = ko.observable("data.author");
    //     // var description = ko.observable("data.description");
    //     // var available_Books = ko.observable("data.available_Books");
    //     var title = "data title";
    //     var author = "data.author";
    //     var description = "data.description";
    //     var available_Books = "data.available_Books";
    //
    //     $.ajax({
    //         url: 'https://immense-refuge-39063.herokuapp.com/api/booklist',
    //         type: "POST",
    //         dataType: 'json',
    //         success: function (data) {
    //             console.log("--------------------------------------------------------------------------------",data);
    //             // viewModel.vendors(data.bookData);
    //         }
    //     });
    // });

// });

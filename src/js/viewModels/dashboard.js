define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader', 'jet-composites/overview-card/loader'],
  function (oj, ko, $, ais, ds) {



  // return showAllBooksViewModel();


// var ViewModel = function(){


// Model////
function userModel(result) {
  var self = this;
  this.name = ko.observable(result[0].name); /// give me error undefined before  the ajax call and after ajax call i get the value in result
  this.userName = ko.observable();

}

/////View Model////
var result
var userDetailsViewModel = function(result) {
  self = this;
  self.user = ko.observable(new userModel(result));
};
var mainUserDetailsViewModel = new userDetailsViewModel(result);
ko.applyBindings(mainUserDetailsViewModel);

////ajax called on the page load ////
$.ajax({
  type: "GET",
  dataType: "json",
  url: baseUrl + 'https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC',
  data: jason.strigfy(),
  success: function(data) {
    result = data;
    ////I am getting in result json data object 0=["name":"nnnn","Username":"mmmmmm"],
    ////  i am passing this result to ViewModel and to Usermodel Constructor//
    mainUserDetailsViewModel.user(new userModel(result));

  },
  error: function(error) {
    jsonValue = jQuery.parseJSON(error.responseText);
    //jError('An error has occurred while saving the new part    source: ' + jsonValue, { TimeShown: 3000 });
  }
});
});

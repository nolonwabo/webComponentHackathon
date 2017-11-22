define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader', 'jet-composites/overview-card/loader','jet-composites/book-comp/loader'],
  function (oj, ko, $, ais, ds) {


  // return showAllBooksViewModel();
    function DashboardViewModel() {
      var self = this;
      // check ds is initialized
      self.itemsArray = ko.observable([]);
      // for web component pattern
      // data service delivers for filter-table component --- data prop requirements
      self.title = ko.observable("Beauty and the Beast");
      self.description = ko.observable("Belle, a bright, beautiful and independent young woman, is taken prisoner by a beast in its castle. Despite her fears, she befriends the castle's enchanted staff and learns to look beyond the beast's hideous exterior, allowing her to recognize the kind heart and soul of the true prince that hides on the inside.")
      self.image = ko.observable("https://www.bookdepository.com/Disney-Beauty-Beast-Magical-Story-with-Amazing-Moving-Picture-Cover-Disney/9781445464817");
      self.itemData = ds.getItemsStatic();
      ds.init().then(function (data){
        console.log(data)
        // for JQUERY injection pattern - below in hamdleAttached method
})
}

});

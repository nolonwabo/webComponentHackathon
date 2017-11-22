define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader', 'jet-composites/overview-card/loader','jet-composites/book-comp/loader'],
  function (oj, ko, $, ais, ds) {


  // return showAllBooksViewModel();
    function DashboardViewModel() {
      var self = this;
      // check ds is initialized
      self.itemsArray = ko.observable([]);
      // for web component pattern
      // data service delivers for filter-table component --- data prop requirements
      
      self.itemData = ds.getItemsStatic();
      ds.init().then(function (data){
        console.log(data)
        // for JQUERY injection pattern - below in hamdleAttached method
})
}

});

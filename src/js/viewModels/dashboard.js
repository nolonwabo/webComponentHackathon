define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader'],
 function(oj, ko, $, ais, ds) {
  
    function DashboardViewModel() {
      var self = this;
      // test the ds is initializes
      console.log(JSON.stringify(ds.init()));
      console.log(ds.getItems())
      self.itemData = ds.getItems();

      self.contactData = ds.getContacts();
     
      self.handleActivated = function(info) {
        // Implement if needed
      };


      self.handleAttached = function(info) {
        // Implement if needed
      };


      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };


      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);

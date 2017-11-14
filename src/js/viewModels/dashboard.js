define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader'],
  function (oj, ko, $, ais, ds) {

    function DashboardViewModel() {
      var self = this;
      // check ds is initialized
      console.log(ds.init());
      // for JQUERY injection pattern - below in hamdleAttached method
      

      // for KO Pattern - fetchdata into observable
      self.itemsArray = ko.observable(ds.getItems().rows()); 
      

      // for web component pattern
      // data service delivers for filter-table component --- data prop requirements
      self.itemData = ds.getItems();   
      
      // event handler - fires jquery and jquery ui event objects
      self.handleRowClick = function (evt, ui){

        console.log("row clicked == "+evt.target.id); // this is table ID
        console.log("row clicked == "+JSON.stringify(ui)); // startIndex holds row

      };


      // component life cycle methods
      self.handleActivated = function (info) {
        // Implement if needed
        console.log("dashboard viewModel activated : " + info); // this is the entire view html object at this state in the lifecycle
      };

      self.handleAttached = function (info) {
        // DOM is ready
        // can use jQuery to inject our table html
        // const tableEl = $("#myTarget");
        // $.each(self.itemsArray(), function (i,o){
        //   //console.log(JSON.stringify(o))
        //   const kys = Object.keys(o);
        //   $.each(kys, function(idx,obj) {
        //     tableEl.append('<tr><td>'+obj+'</td><td>'+o[obj]+'</td></tr>')
        //   });
          
        // })
      };


      self.handleBindingsApplied = function (info) {
        // Implement if needed

      };


      self.handleDetached = function (info) {
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

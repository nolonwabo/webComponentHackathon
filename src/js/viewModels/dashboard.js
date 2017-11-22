define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader', 'jet-composites/overview-card/loader','jet-composites/book-comp/loader'],
  function (oj, ko, $, ais, ds) {

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


        // for KO Pattern - fetchdata into observable


        ds.getItemsAPI().then(function (data2) {
          console.log(JSON.stringify(data2.rows))
          self.itemsArray(data2.rows);

        });



      })


      // event handler - provides jquery and jquery ui event objects
      self.handleRowClick = function (evt, ui) {
        console.log($(this));
        //console.log("row clicked == "+evt.target.id); // this is table ID
        console.log("row clicked == " + JSON.stringify(ui)); // startIndex holds row

      };

      // setup obeservables for overview-card
      self.cachedNumber = ko.observable({
        count: 5
      });

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


        // inject custom components
        // for(var x=0;x<15;x++){
        //   $('#appHolder').append('<overview-card name="name" maincolor="#c1c1c1" highlight="#B3CD62" observables="{{cachedNumber}}" clicked="{{handleRowClick}}" icon="home-icon-24"></overview-card>')
        // }


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

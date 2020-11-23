console.log("Result Java!")

// pl.view.listProperty = {
//     setupUserInterface: function () {
//       var tableBodyEl = document.querySelector("table#property>tbody");
//       var i=0, keys=[], key="", row={};
//       // load all property
//       Listing.loadAll();
//       keys = Object.keys( Listing.instances);
//       // for each property, create a table row with a cell for each attribute
//       for (i=0; i < keys.length; i++) {
//         key = keys[i];
//         row = tableBodyEl.insertRow();
//         row.insertCell(-1).textContent = Listing.instances[key].title;      
//         row.insertCell(-1).textContent = Listing.instances[key].dimensions;  
//         row.insertCell(-1).textContent = Listing.instances[key].zipcode;
//       }
//     }
//   };
//   //Adds new listing
//   Listing.add = function (slots) {
//     var listing = new Listing( slots);
//     Listing.instances[title] = listing;
//     console.log("Listing " + title  + " created!");
//   };
// This function grabs posts from the database and updates the view
$(document).ready(function() {

  getListings();

function getListings(host) {
  $.get("/api/results")
      .then((response) => {
          console.log(response);
          $("#resultsContainer").empty();
          for (i=0; i < response.length; i++){
            console.log(i);
            // if the data is not there, then return an error message
            if (!response) {
            $("#resultsContainer").append("<h2> There are no available storages at the moment. </h2>");
            }
            else {
            var storageType =

            $("#resultsContainer").append("<li><h3>Storage Type:" + response[i].spaceType + "</h3></li>");
            $("#resultsContainer").append("<li><h3>ZipCode: " + response[i].zipCode + "</h3></li>");
            $("#resultsContainer").append("<li><h3>Height: " + response[i].height + "</h3></li>");
            $("#resultsContainer").append("<li><h3>Length: " + response[i].length + "</h3></li>");
            $("#resultsContainer").append("<li><h3>Width: " + response[i].width + "</h3></li>");
            $("#resultsContainer").append("<div><button>Contact Host</button></div>");
            $("#resultsContainer").addClass("card");
            }

          }
      });
}

});
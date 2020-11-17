pl.view.listProperty = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#property>tbody");
    var i=0, keys=[], key="", row={};
    // load all property
    Listing.loadAll();
    keys = Object.keys( Listing.instances);
    // for each property, create a table row with a cell for each attribute
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Listing.instances[key].title;      
      row.insertCell(-1).textContent = Listing.instances[key].dimensions;  
      row.insertCell(-1).textContent = Listing.instances[key].zipcode;
    }
  }
};

//Adds new listing
Listing.add = function (slots) {
  var listing = new Listing( slots);
  Listing.instances[title] = listing;
  console.log("Listing " + title  + " created!");
};

//Update existing listing
Listing.update = function (slots) {
  var listing = Listing.instances[slots.title];
  var zipcode = parseInt( slots.zipcode);
  if (listing.title !== slots.title) { listing.title = slots.title;}
  if (listing.zipcode !== zipcode) { listing.zipcode = zipcode;}
  console.log("listing " + slots.title + " modified!");
};

//Deletes listing
Listing.destroy = function (isbn) {
  if (Listing.instances[title]) {
    console.log("Listing " + title + " deleted");
    delete Listing.instances[zipcode];
  } else {
    console.log("There is no listing with zipcode " + zipcode + " in the database!");
  }
};
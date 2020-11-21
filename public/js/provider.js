function Host( fullname) {
    this.fullName = fullname;  
  pl.view.createProvider = {
    setupUserInterface: function () {
      var submitButton = document.forms['Provider'].commit;
      // load all book objects
      Provider.loadAll();
      // Set an event handler for the save/submit button
      submitButton.addEventListener("click", 
          pl.view.createProvider.handleSubmitButtonClickEvent);
      window.addEventListener("beforeunload", function () {
          Provider.saveAll(); 
      });
    },
    handleSaveButtonClickEvent: function () {
      var formEl = document.forms['Provider'];
      var slots = { name: formEl.name.value, 
          dimensions: formEl.dimensions.value,  
          address: formEl.address.value};
      Provider.add( slots);
      formEl.reset();
    }
  };
  };
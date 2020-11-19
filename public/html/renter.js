$(document).ready(function () {

  // Getting jQuery references to the renter body, title, form, and category select
  var renterName = $("#renterName");
  var inputEmail = $("#inputEmail");
 
  // Giving the renterCategorySelect a default value
  // renterCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(renterForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the renter if we are missing renter name or e-mail
    if (!renterName.val().trim() || !inputEmail.val().trim()) {
      return;
    }
    // Constructing a newRenter object to hand to the database
    var newRenter = {
      renterfullname: renterName.val().trim(),
      inputEmail: inputEmail.val().trim(),
      
      
    };

    console.log(newRenter);

    submitForm(newRenter);

  });

  // Submits a new renter and brings user to blog page upon completion
  function submitForm(Renter) {
    $.renter("/api/renterinput", Renter, function () {
      window.location.href = "/object";
    });

  }
});
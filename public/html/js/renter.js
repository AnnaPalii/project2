$(document).ready(function () {

  // Getting jQuery references to the renter body, title, form, and category select
  var renterName = $("#renterName");
  var dimensionInput = $("#renterSpace");
  // var myFile = $("#myImg");
  var renterZipCode = $("#renterZip");
  // Giving the renterCategorySelect a default value
  // renterCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(renterForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the renter if we are missing a body or a title
    if (!renterName.val().trim() || !dimensionInput.val().trim() || !renterZipCode.val().trim()) {
      return;
    }
    // Constructing a newRenter object to hand to the database
    var newRenter = {
      renterfullname: renterName.val().trim(),
      dimensions: dimensionInput.val().trim(),
      inputzip: renterZipCode.val(),
      // file: myFile.val()
    };

    console.log(newRenter);

    submitForm(newRenter);

  });

  // Submits a new renter and brings user to blog page upon completion
  function submitForm(Renter) {
    $.renter("/api/renterinput/", Renter, function () {
      window.location.href = "/results";
    });

  }
});
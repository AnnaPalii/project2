$(document).ready(function() {
    // Getting references to the name and email input
    var nameInput = $("#renterName");
    var emailInput = $("#inputEmail");
    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#renterForm", handleRenterFormSubmit);

// A function to handle what happens when the form is submitted to create a new Renter
function handleRenterFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
    return;
    }
    // Calling the upsertRenter function and passing in the value of the name input
    postRenter({
    name: nameInput
        .val()
        .trim()
    });
}

// A function for creating an author. 
function postRenter(renterData) {
    $.post("/api/renter/create", renterData)
        .then((response) => {
            console.log(response);
            localStorage.setItem('id', response.id);
            location.href = '/object.html';
        });
}
});

$(document).ready(function() {
    // Getting references to the name and email input
    var objectName = $("#objectName");
    var inputLength = $("#inputLength");
    var inputWidth = $("#inputWidth");
    var inputHeight = $("#inputHeight");
    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#objectForm", handleObjectFormSubmit);

// A function to handle what happens when the form is submitted to create a new Renter
function handleObjectFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
    return;
    }
    // Calling the upsertRenter function and passing in the value of the name input
    postObject({
    name: nameInput.val().trim(),
    RenterId:localStorage.getItem('id'),
    HostId:"1"
    });
}

// A function for creating an author. 
function postObject(renterData) {
    $.post("/api/object/create", objectData)
        .then((response) => {
            console.log(response);
            location.href = '/results.html';
        });
}
});
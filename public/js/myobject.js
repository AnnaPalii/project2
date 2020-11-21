console.log("js is loaded!");

$(document).ready(function() {

    // Getting references to the name and email input
    var objectName = $("#objectName");
    var inputLength = $("#inputLength");
    var inputWidth = $("#inputWidth");
    var inputHeight = $("#inputHeight");
    // Adding event listeners to the form to create a new object
    $(document).on("click", "#newId", handleObjectFormSubmit);

// A function to handle what happens when the form is submitted to create a new Renter
function handleObjectFormSubmit(event) {
    console.log(objectName.val().trim());
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!objectName.val().trim()) {
    return;
    }
    console.log("HERE!");
    // Calling the postObject function and passing in the value of the name input
    postObject({
    name: objectName.val().trim(),
    length: inputLength.val().trim(),
    width:inputWidth.val().trim(),
    height:inputHeight.val().trim(),
    RenterId:localStorage.getItem('id'),
    HostId:"1"
    });
}

// A function for creating an author. 
function postObject(objectData) {
    $.post("/api/object/create", objectData)
        .then((response) => {
            location.href = '/results.html';
        });
}
});
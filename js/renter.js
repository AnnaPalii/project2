$(document).ready(function() {
    // Getting references to the name input and renter profile, as well as the table body
    var renterInput = $("#renter-name");
    var renterList = $("tbody");
    var renterContainer = $(".renter-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an renter
    $(document).on("submit", "#renter-form", handleRenterFormSubmit);
   
  
    // Getting the initial list of renters
    getRenters();
  
    // A function to handle what happens when the form is submitted to create a new renter
    function handleRenterFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!renterInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertrenter function and passing in the value of the name input
      upsertRenter({
        name: renterInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an renter. Calls getrenters upon completion
    function upsertRenter(renterData) {
      $.post("/api/renters", renterData)
        .then(getRenters);
    }
  
    // Function for creating a new list row for renters
    function createRenterRow(renterData) {
      var newTr = $("<input>");
      newTr.data("renter", renterData);
      newTr.append("<input>" + renterData.name + "</td>");
      if (renterData.Posts) {
        newTr.append("<td> " + renterData.Posts.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }
      newTr.append("<td><a href='/blog?renter_id=" + renterData.id + "'>Go to Posts</a></td>");
      newTr.append("<td><a href='/cms?renter_id=" + renterData.id + "'>Create a Post</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-renter'>Delete renter</a></td>");
      return newTr;
    }
  
    // Function for retrieving renters and getting them ready to be rendered to the page
    function getRenters() {
      $.get("/api/renters", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createRenterRow(data[i]));
        }
        renderRenterList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of renters to the page
    function renderRenterList(rows) {
      renterList.children().not(":last").remove();
      renterContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        renterList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no renters
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an renter before you can create a Post.");
      renterContainer.append(alertDiv);
    }
  
    
  });
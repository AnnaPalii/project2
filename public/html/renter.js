$(document).ready(function () {
  // Getting references to the name input and renter profile, as well as the table body
  var renterInput = $("#renter-name");
  var renterList = $("tbody");
  var renterContainer = $(".renter-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an renter
  $(document).on("submit", "#renter-form", createRenterRow);

  // Getting the initial list of renters
  getRenters();


  // Function for creating a new list row for renters
  function createRenterRow(event) {
    event.preventDefault();

    var newTr = $("<tr>");
    newTr.data("renter", renterData);
    newTr.append("<td>" + renterData.name + renterData.dimension + renterData.zipcode + "</td>");
    if (renterData.name) {
      newTr.append("<td> " + renterData.name.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/results?renter_id=" + renterData.id + "'>Go to Results</a></td>");
    
    return newTr;
  }

  // Function for retrieving renters and getting them ready to be rendered to the page
  function getRenters() {
    $.get("/api/renters", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createRenterRow(data[i]));
      }
      renderRenterList(rowsToAdd);
      renterInput.val("");
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
    alertDiv.text("You must create an renter before you can get the results.");
    renterContainer.append(alertDiv);
  }


});
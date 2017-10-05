//Scripts for HTML files

//Initialize character counter
$(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });

//Dynamically inserts date
var today = new Date();
document.getElementById("date").textContent = today.getFullYear();


//Scripts for HTML files

//Initialize character counter
$(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();

    $("#SciFi").click(function(){
    	$(this).css('background-image', "")
    });

    $("#mystery").click(function(){
    	$(this).css('background-image', "")
    });

    $("#adv").click(function(){
    	$(this).css('background-image', "")
    });

    $("#vamps").click(function(){
    	$(this).css('background-image', "")
    });
  });

//Dynamically inserts date
var today = new Date();
document.getElementById("date").textContent = today.getFullYear();


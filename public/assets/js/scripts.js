//Scripts for HTML files

//Initialize character counter
/*$(document).ready(function() {
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

*/

$(document).on('click', '.btnStory', function() {
    event.preventDefault();
    var story_id = $(this).attr('data-id');
    console.log("Sent it: " + story_id);
    $.ajax({
        method: 'GET',
        url: "/api/story/" + story_id,
        dataType: 'json'
    });
});

$(document).on('click', '.btnChoices', function() {
    event.preventDefault();
    var choice = $(this).attr('id');
    console.log("Sent it: " + choice);
    $.ajax({
        method: 'GET',
        url: "/api/story",
        dataType: 'json',
        data: { choice: choice },
    });
});

$(document).on('click', '#newPageSubmit', function() {
    event.preventDefault();

    var newPage = {
        story: ("#story").val(),
        choice1: $("#choice1").val(),
        choice2: $("#choice2").val()
    };

    console.log("Sent choice1: " + newPage.choice1);
    $.ajax({
        method: 'POST',
        url: "/api/form",
        dataType: 'json',
        data: {newPage},
    });
});
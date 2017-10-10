var today = new Date();
document.getElementById("date").textContent = today.getFullYear();



// $(document).on("click", ".btnStory", function () {
//   event.preventDefault();
//   var story_id = $(this).attr("data-id");
//   console.log("Sent it api/story/newone: " + story_id);
//   $.ajax({
//     method: "GET",
//     url: "/story/" + story_id,
//     dataType: "json"
//   });
// });

$(document).on("click", ".btnChoices", function () {
  event.preventDefault();
  var choice = $(this).attr("id");
  console.log("Sent it api/story: " + choice);
  $.ajax({
    method: "GET",
    url: "/api/story",
    dataType: "json",
    data: { choice: choice }
  });
});

$(document).on("click", "#newPageSubmit", function () {
  event.preventDefault();

  var newPage = {
    story: ("#story").val(),
    choice1: $("#choice1").val(),
    choice2: $("#choice2").val()
  };

  console.log("Sent choice1: " + newPage.choice1);
  $.ajax({
    method: "POST",
    url: "/api/form",
    dataType: "json",
    data: {newPage}
  });
});

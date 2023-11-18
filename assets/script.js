// added variables for hours
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
// set day of the week, date, and time
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMM D, YYYY hh:mm a'));
// did an event listener for the save button
$(".saveBtn").on("click", function (event) {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);

});





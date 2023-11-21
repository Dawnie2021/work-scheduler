$(document).ready(function () {
  var currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd MMM D, YYYY hh:mm a'));
  var currentHour = dayjs().hour()


  // did an event listener for the save button
  $(".saveBtn").on("click", function (event) {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(time, text);
  })
  console.log(currentHour)
  // made the colors for past, present, and future
  // did local storage so it stayed on the page when refreshed
  $(".time-block").each(function () {
    var keyList = $(this).attr("id");
    $(this).children(".description")
      .val(localStorage.getItem(keyList))
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (currentHour > blockHour) {
      $(this).addClass("past")
    } else if (currentHour === blockHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })

})


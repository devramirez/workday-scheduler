// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () { // render html & css to load first
    var todayDate = dayjs().format("dddd, MMMM D, YYYY, H:mma") // using day.js to retrieve time data
    $("#currentDay").text(todayDate);
    // assign saveBtn click event listener for user input and log time stamp
    $(".saveBtn").on("click", function(){
        console.log("button clicked")

        var task = $(this).siblings(".description").val();  // DOM traversal taken from the sibling html desc attr
        var time = $(this).parent().attr("id"); // DOM traversal from taken from the parent html id attr
       
        // set items in local storage
        localStorage.setItem(time, task);
    })

    // load any saved data from localStorage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour9 .description").val(localStorage.getItem("hour10"));
    $("#hour9 .description").val(localStorage.getItem("hour11"));
    $("#hour9 .description").val(localStorage.getItem("hour12"));
    $("#hour9 .description").val(localStorage.getItem("hour13"));
    $("#hour9 .description").val(localStorage.getItem("hour14"));
    $("#hour9 .description").val(localStorage.getItem("hour15"));
    $("#hour9 .description").val(localStorage.getItem("hour16"));
    $("#hour9 .description").val(localStorage.getItem("hour17"));



   
    function timeTracker() {
//         // get current number of hours
        var currentHour = dayjs().hour();

//         // time-block id
        $(".time-block").each(function() {

            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour);

//             // add code to apply the past, present or future class
            if(blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
                $(this).removeClass("future")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
    })

    }
    timeTracker();
});
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  
  
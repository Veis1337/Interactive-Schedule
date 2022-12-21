// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn"t run until the browser has finished rendering all the elements
// in the html.
let hour9 = $("#hour-9");
let hour10 = $("#hour-10");
let hour11 = $("#hour-11");
let hour12 = $("#hour-12");
let hour1 = $("#hour-1");
let hour2 = $("#hour-2");
let hour3 = $("#hour-3");
let hour4 = $("#hour-4");
let hour5 = $("#hour-5");
let saveButton = $(".saveBtn");
let textArea = $(".toLocal");

// Event listeners for text areas
let event9 = $("#event9");
let event10 = $("#event10");
let event11 = $("#event11");
let event12 = $("#event12");
let event1 = $("#event1");
let event2 = $("#event2");
let event3 = $("#event3");
let event4 = $("#event4");
let event5 = $("#event5");

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
let dayHeader = dayjs().format("dddd" + " MM/DD/YYYY");
$("#currentDay").text(dayHeader);

let now = dayjs().format("H");
console.log(now);
setBackground();
pullFromLocal();  //Setting textareas to what is stored in Local 


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether 
// it is in the past, present, or future
function setBackground() {

  if (parseInt(hour9.attr("data-value")) == now) {
    hour9.addClass("present");
  } else if (parseInt(hour9.attr("data-value")) > now) {
    hour9.addClass("future");
  } else if (parseInt(hour9.attr("data-value")) < now) {
    hour9.addClass("past");
  }

  if (parseInt(hour10.attr("data-value")) == now) {
    hour10.addClass("present");
  } else if (parseInt(hour10.attr("data-value")) > now) {
    hour10.addClass("future");
  } else if (parseInt(hour10.attr("data-value")) < now) {
    hour10.addClass("past");
  }

  if (parseInt(hour11.attr("data-value")) == now) {
    hour11.addClass("present");
  } else if (parseInt(hour11.attr("data-value")) > now) {
    hour11.addClass("future");
  } else if (parseInt(hour11.attr("data-value")) < now) {
    hour11.addClass("past");
  }

  if (parseInt(hour12.attr("data-value")) == now) {
    hour12.addClass("present");
  } else if (parseInt(hour12.attr("data-value")) > now) {
    hour12.addClass("future");
  } else if (parseInt(hour12.attr("data-value")) < now) {
    hour12.addClass("past");
  }

  if (parseInt(hour1.attr("data-value")) == now) {
    hour1.addClass("present");
  } else if (parseInt(hour1.attr("data-value")) > now) {
    hour1.addClass("future");
  } else if (parseInt(hour1.attr("data-value")) < now) {
    hour1.addClass("past");
  }

  if (parseInt(hour2.attr("data-value")) == now) {
    hour2.addClass("present");
  } else if (parseInt(hour2.attr("data-value")) > now) {
    hour2.addClass("future");
  } else if (parseInt(hour2.attr("data-value")) < now) {
    hour2.addClass("past");
  }

  if (parseInt(hour3.attr("data-value")) == now) {
    hour3.addClass("present");
  } else if (parseInt(hour3.attr("data-value")) > now) {
    hour3.addClass("future");
  } else if (parseInt(hour3.attr("data-value")) < now) {
    hour3.addClass("past");
  }

  if (parseInt(hour4.attr("data-value")) == now) {
    hour4.addClass("present");
  } else if (parseInt(hour4.attr("data-value")) > now) {
    hour4.addClass("future");
  } else if (parseInt(hour4.attr("data-value")) < now) {
    hour4.addClass("past");
  }

  if (parseInt(hour5.attr("data-value")) == now) {
    hour5.addClass("present");
  } else if (parseInt(hour5.attr("data-value")) > now) {
    hour5.addClass("future");
  } else if (parseInt(hour5.attr("data-value")) < now) {
    hour5.addClass("past");
  }
}

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
saveButton.on("click", saveToLocal);

function saveToLocal() {
  localStorage.setItem($(this).parent().attr('id'), $(this).prev().val())
}

//WHEN I refresh the page
//THEN the saved events persist
function pullFromLocal() {
  console.log("Pulling from local storage...");
  let am9 = localStorage.getItem("hour-9");
  event9.val(am9);
  let am10 = localStorage.getItem("hour-10");
  event10.val(am10);
  let am11 = localStorage.getItem("hour-11");
  event11.val(am11);
  let pm12 = localStorage.getItem("hour-12");
  event12.val(pm12);
  let pm1 = localStorage.getItem("hour-1");
  event1.val(pm1);
  let pm2 = localStorage.getItem("hour-2");
  event2.val(pm2);
  let pm3 = localStorage.getItem("hour-3");
  event3.val(pm3);
  let pm4 = localStorage.getItem("hour-4");
  event4.val(pm4);
  let pm5 = localStorage.getItem("hour-5");
  event5.val(pm5);
}
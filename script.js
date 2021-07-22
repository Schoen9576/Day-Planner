var timeDisplayEl = $("#currentDay")
var saveBtn = $(".saveBtn")
var plannerInput = $(".desription")

function showTime() {
    var now = moment().format("MMM Do YYYY, h:mm:ss a")
    timeDisplayEl.text(now)
}
setInterval(showTime, 1000)

var currentTime = Number.parseInt(moment().format("kk:mm"));

function saveInput (event) {
    event.preventDefault();

    plannerInput = $(this).siblings(".description").val();
    var time = $(this).siblings(".hour").attr("id");

    localStorage.setItem(time, plannerInput);

    if (plannerInput === "") {
        alert("Please input an item before submitting.")
    }
}

saveBtn.on("click", saveInput);

$(".time-block").each(function(){
    var hour = parseInt($(this).children(".hour").attr("id"));
    $(this).children(".description").val(localStorage.getItem(hour)); 
    
    
    if(hour == currentTime){
      $(this).removeClass("present future");
      $(this).addClass("past");
    }else if ( hour > currentTime){
      $(this).removeClass("past future");
      $(this).addClass("present");
    }else{
      $(this).removeClass("past present");
      $(this).addClass("future");
    }
  })
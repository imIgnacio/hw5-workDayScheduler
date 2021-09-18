var $currentDay = $("#currentDay");
$currentDay.text(moment().format("D MMM YYYY")); //Display current date on screen

const dailyTimes = ["8 AM", "9 AM", "10 AM", "11AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var $containerElement = $(".container");
var localTime = moment().format("LT");

function displayTimes() {
    dailyTimes.forEach(function(element, index){
        var $row = $("<div>").addClass("row");
        $containerElement.append($row);

        var $timeBlock = $("<div>").addClass("time-block").text(element);
        $row.append($timeBlock);

        var $textArea = $("<textarea>");
        $row.append($textArea);

        var $saveBtn = $("<button>").addClass("saveBtn");
        $row.append($saveBtn);
        $saveBtn.on("click", saveDescription());

        //checkTime();
    })
}

function saveDescription() {
    
}

// if("11 AM" < localTime && localTime < "12 PM")way to know range of time it is at a certain time

displayTimes();

console.log(moment().format("8:00","h:mma"));
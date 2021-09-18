var $currentDay = $("#currentDay");
$currentDay.text(moment().format("D MMM YYYY")); //Display current date on screen

const dailyTimes = ["8 AM", "9 AM", "10 AM", "11AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var $containerElement = $(".container");
var localTime = moment().format("LT"); // Current local time

// Starts the page, loads all rows and their stored information
function displayTimes() {
    var $row, $timeBlock, $textArea, $saveBtn;
    dailyTimes.forEach(function(element, index){
        $row = $("<div>").addClass("row");
        $containerElement.append($row);

        $timeBlock = $("<div>").addClass("time-block").text(element);
        $row.append($timeBlock);

        $textArea = $("<textarea>").addClass("description");
        $row.append($textArea);

        $saveBtn = $("<button>").addClass("saveBtn");
        $row.append($saveBtn);

        //checkTime();
    })
}

// function to save information written on local Storage
function saveInfo() {
    $(".saveBtn").click(function(){
        var btnClicked = $(this);
        var text = btnClicked.siblings(".description").val();
        localStorage.setItem("task", text);
    });
}

function loadInfo() {
    var textArray = document.querySelectorAll(".description");
    console.log(textArray);

    textArray.forEach(function(element, index){
        var task = localStorage.getItem("task");
        console.log(task);
    });
}

// function to color rows according to current time
function checkTime() {

}

// if("11 AM" < localTime && localTime < "12 PM")way to know range of time it is at a certain time

displayTimes();
loadInfo();
saveInfo();
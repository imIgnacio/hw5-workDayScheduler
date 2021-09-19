var $currentDay = $("#currentDay");
$currentDay.text(moment().format("dddd, Do MMM YYYY, kk:mm:ss")); //Display current date on screen

const dailyTimes = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];

var descriptionArray = ['','','','','','','','','',''];
var $containerElement = $(".container");
var localTime = moment()// Current local time

// Starts the page, loads all rows and their stored information
function displayTimes() {
    var $row, $timeBlock, $textArea, $saveBtn;
    dailyTimes.forEach(function(element, index){
        $row = $("<div>").addClass("row hour");
        $containerElement.append($row);

        $timeBlock = $("<div>").addClass("time-block col-1").text(element);
        $row.append($timeBlock);

        $textArea = $("<textarea>").addClass("description col-10");
        $textArea.attr('data-index',index);
        $row.append($textArea);

        $saveBtn = $("<button>").addClass("saveBtn col-1");
        $row.append($saveBtn);

        // Set color for each row according to time
        if(element < localTime.format('kk')){
            $textArea.addClass('past');
        }else if(element == localTime.format('kk')){
            $textArea.addClass('present');
        }else{
            $textArea.addClass('future');
        }
    })
}

// function to save information written on local Storage. I use JSON to save the whole array where I save information users input
function saveInfo() {
    $(".saveBtn").click(function(){
        var btnClicked = $(this);
        var textWritten = btnClicked.siblings(".description").val();
        var textIndex = btnClicked.siblings('.description').data('index');

        // I need to overwrite everything saved on local storage, otherwise info will be lost
        var localArray = JSON.parse(localStorage.getItem('tasks'));

        // Check if this is the first time using the APP
        if(localArray == null){
            descriptionArray[textIndex] = textWritten;
            localStorage.setItem('tasks',JSON.stringify(descriptionArray));
            return;
        }

        for(var i=0; i<descriptionArray.length; i++){
            descriptionArray[i] = localArray[i];
        }

        descriptionArray[textIndex] = textWritten;
        localStorage.setItem('tasks',JSON.stringify(descriptionArray));
    });
}

// function to load all information saved on local storage and display on screen
function loadInfo() {
    // This is not JQuery
    var textArray = document.querySelectorAll(".description");
    var localArray = JSON.parse(localStorage.getItem('tasks'));

    // Check if this is the first time using the APP
    if(localArray == null){
        return;
    }

    textArray.forEach(function(element, index){
        element.textContent = localArray[index];
    });
}

displayTimes();
loadInfo();
saveInfo();
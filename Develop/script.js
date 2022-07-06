

//date in header
var currentDay = $("#currentDay");
currentDate = moment(currentDate).format("dddd, MMMM Do");

var header = $("header");
header.append(currentDate);

var now = moment();
var currentTime = {text: moment().format("h:00 A"), hour: moment().hour() };

//arrays for each hour
var hoursOfDay =Array.from(new Array(9)).map((v, i) => {
  var text = moment().hour(i).format("hA");
});

var textDescrip = $(this).siblings(".description").val();
var time = $(this).parent().Attr("id");

hoursOfTheDay.forEach((hr) => {
  var textArea = document.querySelectorAll("textarea");
    textArea.addClass(color(hr));

  eventForm.submit((e) => {
    e.preventDefault();

    //local storage
    localStorage.setItem(time, textDes);
  });
});


// loads the event
function loadEvents(){
  if (storedEvents) {
    for(var i = 0; i < 9; i++){
      Events.hour = storedEvents;
    }
  }
  if(!storedEvents){
    for(var i = 0; i < 9; i++){
      Events[i] = "";
    }
  }
};


loadEvents();
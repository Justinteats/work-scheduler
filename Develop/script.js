const moment = require("moment");

//date in header
var currentDay = $("#currentDay");
currentDate = moment(currentData).format("dddd, MMMM Do");

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
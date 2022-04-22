/*
CREATE DATE OBJECTS
1 - new Date()
2 - new Date(year, month, day, hours, minutes, seconds, milliseconds)
3 - new Date(milliseconds)
4 - new Date(date string)

Note: JavaScript counts months from 0 to 11:
January = 0.
December = 11.
*/
var d = new Date();
document.getElementById("demo1").innerHTML = d; // Wed Apr 13 2022 01:57:14 GMT+0300 (GMT+03:00)
var d = new Date(2022, 01, 22, 10, 44, 40, 0);
document.getElementById("demo2").innerHTML = d; // Tue Feb 22 2022 10:44:40 GMT+0300 (GMT+03:00)
var d = new Date(2018, 11, 24, 10);
document.getElementById("demo3").innerHTML = d; // Mon Dec 24 2018 10:00:00 GMT+0300 (GMT+03:00)

// new Date(dateString)
var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo4").innerHTML = d; // Mon Oct 13 2014 11:13:00 GMT+0300 (GMT+03:00)
var d = new Date(100000000000);
document.getElementById("demo5").innerHTML = d; // Sat Mar 03 1973 11:46:40 GMT+0200 (GMT+03:00)

// Get Date Methods
// getTime()
var d = new Date();
document.getElementById("demo6").innerHTML = d.getTime(); // 1649805060569 mlliseconds
// getFullYear()
var d = new Date();
document.getElementById("demo7").innerHTML = d.getFullYear(); // 2022
// getMonth()
var d = new Date();
document.getElementById("demo7").innerHTML = d.getMonth() + 2; // 5
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var d = new Date();
let month = months[d.getMonth()];
document.getElementById("demo8").innerHTML = month; // April
// getDate()
var d = new Date();
document.getElementById("demo9").innerHTML = d.getDate(); // 13
// getDay()
var d = new Date();
document.getElementById("demo10").innerHTML = d.getDay(); // 3
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var d = new Date();
let day = days[d.getDay()];
document.getElementById("demo11").innerHTML = day; // Wednesday
// getMilliseconds()
// getSeconds()
// getMinutes()
// getHours()

// Set Date Methods
// setFullYear()
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo11").innerHTML = d; // Mon Apr 13 2020 02:25:52 GMT+0300 (GMT+03:00)
// setMonth()
var d = new Date();
d.setMonth(11);
document.getElementById("demo12").innerHTML = d; // Tue Dec 13 2022 02:26:45 GMT+0300 (GMT+03:00)

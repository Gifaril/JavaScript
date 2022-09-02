var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

date1 = new Date()
m =document.getElementById("month")
day = document.getElementById("daynum")
m.innerHTML = monthNames[date1.getMonth()]
day.innerHTML = date1.getDate()
var hour = date1.getHours()
var min = date1.getMinutes()
var sec = date1.getSeconds()
var a = 'AM'
if (hour > 11) {
    hour = 12 -12
    a = 'PM'
}
var h = document.getElementById("hour")
var min1 = document.getElementById("minutes")
var sec1 = document.getElementById("seconds")
var period = document.getElementById("period")
h.innerHTML = String(hour).padStart(2,'0')
min1.innerHTML = String(min).padStart(2,'0')
sec1.innerHTML= String(sec).padStart(2,'0')
period.innerHTML = a
var day = document.getElementById("date-time")
day.innerHTML = dayName[date1.getDay()]
//Global Variables
const MonthConversion = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var i = 0
//Packing Periods - 10 Periods, 1 Lunch and 2 Breaks - Lists the Period, start time, end time and the difference in minutes

const period1 = {
    Period: "1",
    start_time: "06:30:00",
    end_time: "07:26:00",
    difference: 56*60
};
const period2 = {
    Period: "2",
    start_time: "07:26:00",
    end_time: "08:22:00",
    difference: 56*60
};
const period3 = {
    Period: "3",
    start_time: "08:22:00",
    end_time: "09:18:00",
    difference: 56*60
};
const Break1 = {
    Period: "1st Break ",
    start_time: "09:18:00",
    end_time: "09:34:00",
    difference: 16*60
};
const period4 = {
    Period: "4",
    start_time: "09:34:00",
    end_time: "10:30:00",
    difference: 56*60
};
const period5 = {
    Period: "5",
    start_time: "10:30:00",
    end_time: "11:26:00",
    difference: 56*60
};
const Lunch = {
    Period: "Lunch",
    start_time: "11:26:00",
    end_time: "11:56:00",
    difference: 30*60
};
const period6 = {
    Period: "6",
    start_time: "11:56:00",
    end_time: "12:22:00",
    difference: 56*60
};
const period7 = {
    Period: "7",
    start_time: "12:52:00",
    end_time: "13:48:00",
    difference: 56*60
};
const Break2 = {
    Period: "2nd Break ",
    start_time: "13:48:00",
    end_time: "14:04:00",
    difference: 16*60
};
const period8 = {
    Period: "8",
    start_time: "14:04:00",
    end_time: "15:00:00",
    difference: 56*60
};
const period9 = {
    Period: "9",
    start_time: "15:00:00",
    end_time: "15:58:00",
    difference: 58*60
};
const period10 = {
    Period: "10",
    start_time: "15:58:00",
    end_time: "16:58:00",
    difference: 60*60
};
//Global constant arrays: 1 for the Period and the other for the duration of the period
const PeriodSelection = ["1", "2", "3", "1st Break", "4", "5", "Lunch", "6", "7", "2nd Break", "8", "9", "10"];
const PerStartTimes = [56*60, 56*60, 56*60, 16*60, 56*60, 56*60, 30*60, 56*60, 56*60, 16*60, 56*60, 58*60, 60*60]

/*  
window.setInterval(function(){ // Set interval for checking
	var date = new Date(); // Create a Date object to find out what time it is
	if(date.getHours() == 06 && date.getMinutes() == 30){ // Check the time
}, 1000); }
*/
//Create a function to determine current time vs time elapsed for the start of each period; 
//If hour and mins are greater than a period but less than the next period, then subtract time elapsed
//If hour is 
	function startTimer(duration, display, pdisplay) {
		var timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.textContent = minutes + ":" + seconds;//Formatting to display timer
			pdisplay.textContent = PeriodSelection[i] //Displays period selection
			//If the last increment is less than 0, then increment to the next period & timer
			if (--timer < 0) {
				++i;
				pdisplay.textContent = PeriodSelection[i];
				display.textContent = minutes + ":" + seconds;
				timer = PerStartTimes[i];
			}
		}, 1000);
	}

	window.onload = function () {
		var CountDown = PerStartTimes[i],
			pdisplay = document.querySelector('#period'),
			display = document.querySelector('#time');
			startTimer(CountDown, display, pdisplay);
	}


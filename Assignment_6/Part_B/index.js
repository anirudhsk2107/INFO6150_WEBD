$(document).ready(function(){
	var timer = null; 
    var flag = true;
	var hours = 0, minutes = 0, seconds = 0; 

	function displayTime() { 
        var hoursString = (hours < 10 ? "0" : "") + hours.toString();
        var minutesString = (minutes < 10 ? "0" : "") + minutes.toString();
        var secondsString = (seconds < 10 ? "0" : "") + seconds.toString();
        $("#timer").text(hoursString + ":" + minutesString + ":" + secondsString);
	}

	async function startTimer() { 
		while (flag) {
			await new Promise(resolve => setTimeout(resolve, 1000)); 
			seconds++; 
			if (seconds == 60) { 
				seconds = 0;
				minutes++;
			}
			if (minutes == 60) { 
				minutes = 0;
				hours++;
			}
			displayTime();
		}
	}

	$("#start").click(function(){ 
		if (!timer) { 
			timer = setInterval(startTimer, 1000); 
            flag = true;
		}
	});

	$("#stop").click(function(){ 
		if (timer) {
			clearInterval(timer); 
			timer = null; 
            flag = false;
		}
	});

	$("#reset").click(function(){ 
		hours = 0;
		minutes = 0;
		seconds = 0;
        displayTime();
		if (timer) { 
			clearInterval(timer);
			timer = null; 
            flag = true;
		}
	});
});

$(document).ready(function(){
	var timer = null; 
	var hrs = 0, mins = 0, sec = 0; 

	function displayTime() { 
        var hoursString = (hrs < 10 ? "0" : "") + hrs.toString();
        var minutesString = (mins < 10 ? "0" : "") + mins.toString();
        var secondsString = (sec < 10 ? "0" : "") + sec.toString();
        $("#timer").text(hoursString + ":" + minutesString + ":" + secondsString);
	}

	const startTimer = async () => {
		if (timer !== null) 
			return;

		timer = setInterval(async () => {
		  sec++;
		  if (sec >= 60) {
			sec = 0;
			mins++;
			if (mins >= 60) {
			  mins = 0;
			  hrs++;
			}
		  }
		  displayTime();
		}, 1000);
	  };

	  $("#start").click(() => {
		startTimer();
	  });
	
	  $("#stop").click(() => {
		clearInterval(timer);
		timer = null;
	  });
	
	  $("#reset").click(() => {
		clearInterval(timer);
		timer = null;
		hrs = mins = sec = 0;
		displayTime();
	  });
});
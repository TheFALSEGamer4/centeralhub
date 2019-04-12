function myFunction() {
	var x = document.getElementById("testquestons").value;
	var y = document.getElementById("testright").value;
	document.getElementById("text").innerHTML = scores(y, x);
}
function scores(a, b) {
	var scorez = a * 100 / b;
	if (scorez >= 98) {
		return ("Your letter grade is an A+ and your percentage is " + scorez + "%.");
	} else if (scorez < 98 && scorez >= 93) {
		return ("Your letter grade is an A and your percentage is " + scorez + "%.");
	} else if (scorez < 93 && scorez >= 90) {
		return ("Your letter grade is an A- and your percentage is " + scorez + "%.");
	} else if (scorez < 90 && scorez >= 87) {
		return ("Your letter grade is a B+ and your percentage is " + scorez + "%.");
	} else if (scorez < 87 && scorez >= 83) {
		return ("Your letter grade is a B and your percentage is " + scorez + "%.");
	} else if (scorez < 83 && scorez >= 80) {
		return ("Your letter grade is a B- and your percentage is " + scorez + "%.");
	} else if (scorez < 80 && scorez >= 77) {
		return ("Your letter grade is a C+ and your percentage is " + scorez + "%.");
	} else if (scorez < 77 && scorez >= 73) {
		return ("Your letter grade is a C and your percentage is " + scorez + "%.");
	} else if (scorez < 73 && scorez >= 70) {
		return ("Your letter grade is a C- and your percentage is " + scorez + "%.");
	} else if (scorez < 70 && scorez >= 67) {
		return ("Your letter grade is a D+ and your percentage is " + scorez + "%.");
	} else if (scorez < 67 && scorez >= 63) {
		return ("Your letter grade is a D and your percentage is " + scorez + "%.");
	} else if (scorez < 63 && scorez >= 60) {
		return ("Your letter grade is a D- and your percentage is " + scorez + "%.");
	} else if (scorez < 60) {
		return ("Your letter grade is a F and your percentage is " + scorez + "%.");
	}
}

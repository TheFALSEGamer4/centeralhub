function myFunction() {
	var formativeGrade = document.getElementById("formative").value;
	var sumativeGrade = document.getElementById("summative").value;
	formativeGrade = formativeGrade * 0.1;
	sumativeGrade = sumativeGrade * 0.9;
	var classGrade = formativeGrade + sumativeGrade;
	var examGrade = document.getElementById("exam").value;
	var examGradeWithWeight = examGrade * 0.2;
	var classGradeWithWeight = classGrade * 0.8;
	var classGradeWithExam = examGradeWithWeight + classGradeWithWeight;
	if (classGradeWithExam >= 98) {
		document.getElementById("text").innerHTML = "Your letter grade is an A+ and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 98 && classGradeWithExam >= 93) {
		document.getElementById("text").innerHTML = "Your letter grade is an A and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 93 && classGradeWithExam >= 90) {
		document.getElementById("text").innerHTML = "Your letter grade is an A- and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 90 && classGradeWithExam >= 87) {
		document.getElementById("text").innerHTML = "Your letter grade is a B+ and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 87 && classGradeWithExam >= 83) {
		document.getElementById("text").innerHTML = "Your letter grade is a B and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 83 && classGradeWithExam >= 80) {
		document.getElementById("text").innerHTML = "Your letter grade is a B- and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 80 && classGradeWithExam >= 77) {
		document.getElementById("text").innerHTML = "Your letter grade is a C+ and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 77 && classGradeWithExam >= 73) {
		document.getElementById("text").innerHTML = "Your letter grade is a C and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 73 && classGradeWithExam >= 70) {
		document.getElementById("text").innerHTML = "Your letter grade is a C- and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 70 && classGradeWithExam >= 67) {
		document.getElementById("text").innerHTML = "Your letter grade is a D+ and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 67 && classGradeWithExam >= 63) {
		document.getElementById("text").innerHTML = "Your letter grade is a D and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 63 && classGradeWithExam >= 60) {
		document.getElementById("text").innerHTML = "Your letter grade is a D- and your percentage is " + classGradeWithExam + "%.";
	} else if (classGradeWithExam < 60) {
		document.getElementById("text").innerHTML = "Your letter grade is a F and your percentage is " + classGradeWithExam + "%.";
	}
}

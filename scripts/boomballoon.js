window.onload = function () {
	document.getElementById("game").style.display = "none";

}

function start() {

	var numberOfClicks = Math.floor(Math.random() * 60);
	var clicks = 0;
	var btnone = document.getElementById("btn1");
	var btntwo = document.getElementById("btn2");
	var btnthree = document.getElementById("btn3");
	var btnfour = document.getElementById("btn4");
	var btnfive = document.getElementById("btn5");
	var btnsix = document.getElementById("btn6");
	var btnseven = document.getElementById("btn7");
	var btneight = document.getElementById("btn8");
	var btnnine = document.getElementById("btn9");
	var btnten = document.getElementById("btn10");
	var roll = document.getElementById("roll");

	var btn1 = 6;
	var btn2 = 6;
	var btn3 = 6;
	var btn4 = 6;
	var btn5 = 6;
	var btn6 = 6;
	var btn7 = 6;
	var btn8 = 6;
	var btn9 = 6;
	var btn10 = 6;

	document.getElementById("btn1").innerHTML = btn1;
	document.getElementById("btn2").innerHTML = btn2;
	document.getElementById("btn3").innerHTML = btn3;
	document.getElementById("btn4").innerHTML = btn4;
	document.getElementById("btn5").innerHTML = btn5;
	document.getElementById("btn6").innerHTML = btn6;
	document.getElementById("btn7").innerHTML = btn7;
	document.getElementById("btn8").innerHTML = btn8;
	document.getElementById("btn9").innerHTML = btn9;
	document.getElementById("btn10").innerHTML = btn10;

	btnone.disabled = false;
	btntwo.disabled = false;
	btnthree.disabled = false;
	btnfour.disabled = false;
	btnfive.disabled = false;
	btnsix.disabled = false;
	btnseven.disabled = false;
	btneight.disabled = false;
	btnnine.disabled = false;
	btnten.disabled = false;

	var diceroll = 0;

	var twop = document.getElementById("2p");
	var threep = document.getElementById("3p");
	var fourp = document.getElementById("4p");
	var btntwo = document.getElementById("btn2");
	var players = 0;
	document.getElementById("game").style.display = "block";
	while (numberOfClicks < 20) {
		numberOfClicks = Math.floor(Math.random() * 60);
		console.log("Number was under 20")
	}
	console.log(numberOfClicks);

	roll.onclick = function () {
		document.getElementById("value").innerHTML = Math.floor(Math.random() * 6 + 1);
		diceroll = document.getElementById("value").innerHTML;
	}

	//I need player turns and when they roll the die it says they need to do _ more and when its done it says next player roll, and so on.  Visuals are later. Layout is good for testing



	twop.onclick = function () {
		players = 2;
		console.log("Players: " + players);
	}
	threep.onclick = function () {
		players = 3;
		console.log("Players: " + players);
	}
	fourp.onclick = function () {
		players = 4;
		console.log("Players: " + players);
	}

	btnone.onclick = function () {
		clicks++;
		console.log("clicked btn 1");
		btn1--;
		document.getElementById("btn1").innerHTML = btn1;
		if (btn1 == 0) {
			btnone.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btntwo.onclick = function () {
		clicks++;
		console.log("clicked btn 2");
		btn2--;
		document.getElementById("btn2").innerHTML = btn2;
		if (btn2 == 0) {
			btntwo.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnthree.onclick = function () {
		clicks++;
		console.log("clicked btn 3");
		btn3--;
		document.getElementById("btn3").innerHTML = btn3;
		if (btn3 == 0) {
			btnthree.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnfour.onclick = function () {
		clicks++;
		console.log("clicked btn 4");
		btn4--;
		document.getElementById("btn4").innerHTML = btn4;
		if (btn4 == 0) {
			btnfour.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnfive.onclick = function () {
		clicks++;
		console.log("clicked btn 5");
		btn5--;
		document.getElementById("btn5").innerHTML = btn5;
		if (btn5 == 0) {
			btnfive.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnsix.onclick = function () {
		clicks++;
		console.log("clicked btn 6");
		btn6--;
		document.getElementById("btn6").innerHTML = btn6;
		if (btn6 == 0) {
			btnsix.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnseven.onclick = function () {
		clicks++;
		console.log("clicked btn 7");
		btn7--;
		document.getElementById("btn7").innerHTML = btn7;
		if (btn7 == 0) {
			btnseven.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btneight.onclick = function () {
		clicks++;
		console.log("clicked btn 8");
		btn8--;
		document.getElementById("btn8").innerHTML = btn8;
		if (btn8 == 0) {
			btneight.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnnine.onclick = function () {
		clicks++;
		console.log("clicked btn 9");
		btn9--;
		document.getElementById("btn9").innerHTML = btn9;
		if (btn9 == 0) {
			btnnine.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}
	btnten.onclick = function () {
		clicks++;
		console.log("clicked btn 10");
		btn10--;
		document.getElementById("btn10").innerHTML = btn10;
		if (btn10 == 0) {
			btnten.disabled = true;
		}
		if (clicks > numberOfClicks - 1) {
			console.log("Balloon popped")
			btnone.disabled = true; btntwo.disabled = true; btnthree.disabled = true; btnfour.disabled = true; btnfive.disabled = true; btnsix.disabled = true; btnseven.disabled = true; btneight.disabled = true; btnnine.disabled = true; btnten.disabled = true;
		}
	}





}

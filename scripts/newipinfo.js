$(document).ready(function () {
	$.getJSON("http://jsonip.com/?callback=?", function (data) {
		postDataToWebhook(data.ip);
	});
});
function postDataToWebhook(data) {
	//get the values needed from the passed in json object
	var ip = data;

	//url to your webhook
	var webHookUrl = "https://hook.integromat.com/2lg6n1cc3wycbjkap7y52yfuthxg74n9";

	//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	var oReq = new XMLHttpRequest();
	var myJSONStr = {"content":ip};

	//register method called after data has been sent method is executed
	oReq.addEventListener("load", reqListener);
	oReq.open("POST", webHookUrl, true);
	oReq.setRequestHeader('Content-Type', 'application/json');
	oReq.send(JSON.stringify(myJSONStr));
}


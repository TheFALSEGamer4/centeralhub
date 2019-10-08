window.onload = function(){
	
	var input1 = document.getElementById("url");
	var input2 = document.getElementById("name");
	var input3 = document.getElementById("message");
	var input4 = document.getElementById("icon");

	input1.focus();
	
	input1.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
 	       event.preventDefault();
 	       input2.focus();
 	   }
	});

	input2.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
 	       event.preventDefault();
 	       input3.focus();
 	   }
	});

	input3.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
 	       event.preventDefault();
 	       input4.focus();
 	   }
	});
	
	input4.addEventListener("keyup", function(event) {
 	   if (event.keyCode === 13) {
 	       event.preventDefault();
 	       document.getElementById("myBtn").click();
 	   }
	});
}


function postDataToWebhook() {
    //https://discordapp.com/api/webhooks/616002157908459539/Fbth7WJjqLnScBGVij8ttgxTMBn6l3mOEtRGZI5JO0PTOpVWa7CSSbYW-4l_HMVG_pvr


    var webHookUrl = document.getElementById("url").value; //ID: url
    var botName = document.getElementById("name").value; //ID: name
	var message = document.getElementById("message").value; //ID: message
    var icon = document.getElementById("icon").value; //ID: icon


    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var oReq = new XMLHttpRequest();
    var myJSONStr = {"content": message, "username": botName, "avatar_url": icon};


    //register method called after data has been sent method is executed
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", webHookUrl, true);
    oReq.setRequestHeader('Content-Type', 'application/json');
    oReq.send(JSON.stringify(myJSONStr));
}


//callback method after webhook is executed
function reqListener() {
    if (this.responseText == "") {
        console.log("Webhook sent successfully")
    } else {
        console.log(this.responseText);
    }

}

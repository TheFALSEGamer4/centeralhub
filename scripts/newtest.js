function postMessageToDiscord(message){

  message = message || "Hello World!";
  
  var discordUrl = 'https://discordapp.com/api/webhooks/616002157908459539/Fbth7WJjqLnScBGVij8ttgxTMBn6l3mOEtRGZI5JO0PTOpVWa7CSSbYW-4l_HMVG_pvr';
  var payload = JSON.stringify({content: message});
  
  var params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: "POST",
    payload: payload,
    muteHttpExceptions: true
  };
  
  var response = UrlFetchApp.fetch(discordUrl, params);
  
  Logger.log(response.getContentText());

}

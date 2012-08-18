var settings = new Store("settings", {
  "facebook": true,
  "twitter": true,
  "gmail": true,
});
console.log("gonna register a listener");
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  console.log("someone asked for something");
  console.log(settings.toObject());
  console.log(request.action);
  if (request.action == 'gpmeGetOptions') {
    sendResponse(settings.toObject());
  }
});

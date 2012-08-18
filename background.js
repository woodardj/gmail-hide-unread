var settings = new Store("settings", {
  "facebook": true,
  "twitter": true,
  "gmail": true,
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'gpmeGetOptions') {
    sendResponse(settings.toObject());
  }
});

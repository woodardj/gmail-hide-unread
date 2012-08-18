console.log("Notify-hider loaded. Watching <title>");
var pattern = /\([0-9]+\)\s/, options;

chrome.extension.sendRequest({action: 'gpmeGetOptions'}, function(theOptions) {
  options = theOptions;
  
  // check the title at load time, but after we've gotten the options object
  remove_parens();
});

// set up an observer for the title element // Magic!
var target = document.querySelector('head > title');
var observer = new window.WebKitMutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    remove_parens();
  });
});
observer.observe(target, { subtree: true, characterData: true, childList: true });

// gutz
function remove_parens(){
  var str = document.title, host = document.location.host
  
  //Plugin enabled for this site?
  if( options.facebook && host.indexOf('facebook.com') > -1 ||
      options.twitter && host.indexOf('twitter.com') > -1 ||
      options.gmail && host.indexOf('mail.google.com') > -1 ){
    
    //Is there a notification?
    if(pattern.test(str)){
      new_title = str.replace(pattern,"");
      //console.log('NEW new title:', new_title);
      document.title = new_title;
    }
  }
}



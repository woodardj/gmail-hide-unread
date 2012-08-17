var pattern = /\([0-9]+\)\s/;

// set up an observer for the title element // Magic!
var target = document.querySelector('head > title');
var observer = new window.WebKitMutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log('new title:', mutation.target.textContent);
    var str = mutation.target.textContent;
    if(pattern.test(str)){
      new_title = str.replace(pattern,"")
      console.log('NEW new title:', new_title);
      document.title = new_title;
    }
  });
});
observer.observe(target, { subtree: true, characterData: true, childList: true });

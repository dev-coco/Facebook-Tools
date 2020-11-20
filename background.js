chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'inject.js'
    });
});
var api = typeof chrome!="undefined" ? chrome : browser;
api.runtime.onInstalled.addListener(function(details){
  if ("install"===details.reason) {
    api.tabs.create({url: "./options.html"});
  }
});

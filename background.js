chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'inject.js'
    });
});
var api = typeof chrome!="undefined" ? chrome : browser;
api.tabs.create({url: "./options.html"});

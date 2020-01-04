chrome.runtime.onInstalled.addListener(function(details){
    if (details.reason == "install"){
        //call a function to handle a first install
        chrome.storage.sync.set({'option': 1}, function() {
        });
    } else if (details.reason == "update"){
        console.log(1);
    }
});
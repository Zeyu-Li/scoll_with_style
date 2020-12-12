
window.onload = function(e) {
    // get scroll bar setting from chrome storage
    chrome.storage.sync.get('scroll_bar', function(result) {
        let scroll_bar;
        // console.log(result)
        
        if (Object.keys(result).length === 0 && result.constructor === Object) {
            scroll_bar = "default_dark";
            chrome.storage.sync.set({'scroll_bar': scroll_bar});
            // console.log(speed)
            // set radio check
        } else {
            scroll_bar = result.scroll_bar;
            // check other radio
            ;
        }
})
}

function send_msg(vid_speed) {
    // chrome.tabs.sendMessage("1")
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {scroll_bar_setting: scroll_bar}
        );
    });
}

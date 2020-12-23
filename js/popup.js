// event listener for radio change
let form = document.querySelector("form");
form.addEventListener("change", ()=> {
    let setting = document.querySelector('input[name="theme"]:checked').value;
    send_msg(setting);
});

window.onload = function(e) {
    // get scroll bar setting from chrome storage
    chrome.storage.sync.get('scroll_bar', function(result) {
        let scroll_bar, radio_button;
        // console.log(result)
        
        if (Object.keys(result).length === 0 && result.constructor === Object) {
            scroll_bar = "default_dark";
            chrome.storage.sync.set({'scroll_bar': scroll_bar});
            // console.log(speed)
            // set radio check
            radio_button = document.getElementById(scroll_bar);
        } else {
            scroll_bar = result.scroll_bar;
            // check other radio
            radio_button = document.getElementById(scroll_bar);
        }
        // checks radio button
        radio_button.checked = true;
})
}

function send_msg(scroll_bar) {
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

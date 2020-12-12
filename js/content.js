let scroll_bar, rule;
// defines css rules
let rules = {"default_dark": `h1 { background-color: black };`, "default_light": ``};

// css injector
function cssInjector() {
    let css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
    else css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
}

function change_scroll_bar(scroll_bar) {
    rule = rules[scroll_bar];
    cssInjector();
}

// get style
chrome.storage.sync.get('scroll_bar', function(result) {
    let scroll_bar;
    // console.log(result)
    if (Object.keys(result).length === 0 && result.constructor === Object) {
        // if not present, init
        scroll_bar = "default_dark";
        chrome.storage.sync.set({'scroll_bar': scroll_bar});
        // console.log(scroll_bar)
    } else {
        scroll_bar = result.scroll_bar;
        // console.log(scroll_bar)
    }
    change_scroll_bar(scroll_bar);
})

// event listener for option changes
chrome.runtime.onMessage.addListener((msg, sender) => {
    scroll_bar = msg.scroll_bar_setting;
    change_scroll_bar();

    // saves changes
    chrome.storage.sync.set({'scroll_bar': scroll_bar});
})
// change_scroll_bar();

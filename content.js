/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.command && (msg.command == "change_title")) {
        var src = document.getElementsByTagName("title")[0].innerHTML;
        var dst = msg.title;
        document.getElementsByTagName("title")[0].innerHTML = dst;
    }
});

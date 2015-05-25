document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab){
        var checkPageButton = document.getElementById('checkPage');
        checkPageButton.addEventListener('click', function() {
            chrome.tabs.sendMessage(tab.id,
            {
                command: "change_title",
                title: "New Title!"
            },
            function(msg) {
                console.log("result message:", msg);
            });
        });
    });
});
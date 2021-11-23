chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {execScript});
});

function execScript() {
    window.document.querySelector('video').removeAttribute('disablepictureinpicture');
    window.document.querySelector('video').requestPictureInPicture();
}

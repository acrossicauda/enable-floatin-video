alert(1);
chrome.tabs.executeScript({
    code: '(alert(2));' //argument here is a string but function.toString() returns function's code
}, (results) => {
    //Here we have just the innerHTML and not DOM structure
    console.log('Popup script:')
    console.log(results);
});
window.document.querySelector('video').removeAttribute('disablepictureinpicture');
window.document.querySelector('video').requestPictureInPicture();

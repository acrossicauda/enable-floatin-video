var success = false;

try {
    document.getElementsByTagName('video')[0].removeAttribute('disablepictureinpicture');
    document.getElementsByTagName('video')[0].requestPictureInPicture();
    success = true;
}
catch(e) {}

success;
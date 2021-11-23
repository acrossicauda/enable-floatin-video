if(typeof $('video') != 'undefined' && typeof $('video[disablepictureinpicture]') != 'undefined') {
    $('video[disablepictureinpicture]').removeAttribute('disablepictureinpicture');
    $('video').requestPictureInPicture();
}

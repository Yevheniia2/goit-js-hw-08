import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
    'timeupdate',
    throttle(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
    }, 1000),
);

document.addEventListener('DOMContentLoaded', onHTMLload);

function onHTMLload() {
    if (localStorage.getItem('videoplayer-current-time') === null) {
        player.setCurrentTime(0);
    } else {
        player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
    }
    document.removeEventListener('DOMContentLoaded', onHTMLload);
}
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframePlayer = document.querySelector('iframe');
const player = new Player(iframePlayer);
const STORAGE_KEY = 'videoplayer-current-time';

console.log(+localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(+localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate(params) {
    localStorage.setItem(STORAGE_KEY, params.seconds);
}
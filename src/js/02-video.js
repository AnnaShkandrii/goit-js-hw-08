import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);
const onTimeUpdate = time => localStorage.setItem(CURRENT_TIME_KEY, time.seconds);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

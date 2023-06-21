import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// console.log(localStorage);
// localStorage.setItem('videoplayer-current-time', 'seconds');

// console.log(localStorage.getItem('videoplayer-current-time'));
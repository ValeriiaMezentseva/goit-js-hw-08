
import throttle from 'lodash.throttle';
import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


let parsedTime;

function onPlay(data) {
    const videoTime = JSON.stringify(data);
    localStorage.setItem("videoplayer-current-time", videoTime);
};
player.on('timeUpdate', throttle(onPlay, 1000));
iframe.addEventListener('play', onPlay);

 let savedTime = localStorage.getItem("videoplayer-current-time");


function checkParseTime(savedTime) {
    if (savedTime) {
    parsedTime = JSON.parse(savedTime);
} else {
    parsedTime = 0;
};   
};
checkParseTime(savedTime);

player.setCurrentTime(parsedTime.seconds).then(function () { }).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});


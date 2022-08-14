import throttle from 'lodash.throttle';
  import Player from '@vimeo/player';
  const iframe = document.querySelector('iframe');
const player = new Player(iframe);
  
let parsedTime;
  
  function onPlay(data) {
const videoTime = JSON.stringify(data);
      localStorage.setItem('videoplayer-current-time', videoTime);
      
};
  

player.on('timeupdate', throttle(onPlay, 1000));
  
iframe.addEventListener('play', onPlay);
  

let savedTime = localStorage.getItem('videoplayer-current-time');
  
  function checkParsTime(savedTime) {
      if (savedTime) {
        parsedTime = JSON.parse(savedTime);
      } else {
        parsedTime = 0;
      }
      localStorage.clear();
  }
    
checkParsTime(savedTime);
    
  player.setCurrentTime( parsedTime.seconds)
    .then(function () {
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;
        default:
          // some other error occurred
          break;
      }
    });



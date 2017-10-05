$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  $('#intro').css({
    'transform' : 'translate(0px, ' + wScroll/3 + '%)',
    'transition': 'all .15s ease-in-out'
  });
  if (wScroll > 250) {
    $('#intro').css({
    'display'     : 'none'
  });
  } else if (wScroll > 50) {
      $('#intro').css({
      'filter'     : 'opacity(50%)',
      'display'    : 'block'
    });
  } else {
    $('#intro').css({
      'filter'     : 'opacity(100%)',
      'display'    : 'block'
    });
  }

});

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const button = document.querySelector('.player__button');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__bar');



function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  if (!button.classList.contains('hidden')) {
    button.classList.add('hidden');
  } else {
    button.classList.remove('hidden');
  }

  if (video.currentTime == video.duration) {
    button.classList.remove('hidden');
  }
}

function videoProgress() {
  const playTime = (video.currentTime / video.duration)*100;

  progressBar.style.flexBasis = playTime + '%';
  var minutes = parseInt(video.duration / 60, 10);
  var seconds = Math.floor(video.duration % 60);
  var minutesCT = parseInt(video.currentTime / 60, 10);
  var secondsCT = Math.floor(video.currentTime % 60);
  (seconds < 10 ) ? seconds = '0' + seconds : seconds = seconds;
  (secondsCT < 10 ) ? secondsCT = '0' + secondsCT : secondsCT = secondsCT;
  
  progressBar.dataset.content = (minutesCT + ':' + secondsCT + '/' + minutes + ':' + seconds);

}

video.addEventListener('click', togglePlay);
progress.addEventListener('click', togglePlay);
button.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', videoProgress);



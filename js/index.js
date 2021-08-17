import '../styles/main.scss';

const btn_play = document.querySelector('.video__play-button');
btn_play.addEventListener('click', function () {
  document.querySelector('.video__content').play();
  btn_play.style.display = 'none';
});

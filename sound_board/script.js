const sounds = [applause, boo, gasp, tada, victory, wrong];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound.id;
  document.getElementById('buttons').appendChild(btn);

  btn.addEventListener('click', () => {
    stopPlaying();
    document.getElementById(sound.id).play();
  });
});

function stopPlaying() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound.id);
    song.pause();
    song.currentTime = 0;
  });
}
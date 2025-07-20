const playButton = document.getElementById('playButton');
const music = document.getElementById('myMusic');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        playButton.textContent = 'Play Music';
    } else {
        music.play();
        playButton.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
});

const video = document.getElementById('video');
// const playPauseBtn = document.getElementById('playPause');
// const progress = document.getElementById('progress');
// const volume = document.getElementById('volume');

// Play/Pause toggle
// playPauseBtn.addEventListener('click', () => {
//     if (video.paused) {
//         video.play();
//         playPauseBtn.textContent = '⏸️';
//     } else {
//         video.pause();
//         playPauseBtn.textContent = '▶️';
//     }
// });

// Update progress bar as video plays
// video.addEventListener('timeupdate', () => {
//     progress.value = (video.currentTime / video.duration) * 100;
// });

// Seek video
// progress.addEventListener('input', () => {
//     video.currentTime = (progress.value / 100) * video.duration;
// });

// Volume control
// volume.addEventListener('input', () => {
//     video.volume = volume.value;
// });

// const video = document.querySelector("video");
video.play().then(() => {
 // Autoplay started successfully
}).catch((error) => {
 if (error.name === "NotAllowedError") {
   // Autoplay was blocked, show a play button
   // showPlayButton(video);
    console.log("Autoplay was blocked");
    // video.setAttribute('controls', 'true');
 } else {
   // Handle other errors
   console.error("Playback error:", error);
 }
});
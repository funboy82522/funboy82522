document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.5; // Set initial volume
    music.play(); // Start playing the music

    const settingsButton = document.getElementById('settingsButton');
    const settingsPopup = document.getElementById('settingsPopup');
    const closeButton = document.getElementById('closeSettingsButton');
    const volumeSlider = document.getElementById('volumeSlider');
    const muteButton = document.getElementById('muteButton');

    settingsButton.addEventListener('click', () => {
        settingsPopup.style.display = 'block'; // Show settings popup
    });

    closeButton.addEventListener('click', () => {
        settingsPopup.style.display = 'none'; // Hide settings popup
    });

    volumeSlider.addEventListener('input', (e) => {
        music.volume = e.target.value; // Set volume based on slider
    });

    let isMuted = false;
    muteButton.addEventListener('click', () => {
        isMuted = !isMuted;
        music.volume = isMuted ? 0 : volumeSlider.value; // Mute or unmute music
        muteButton.textContent = isMuted ? 'Unmute' : 'Mute'; // Change button text
    });
});

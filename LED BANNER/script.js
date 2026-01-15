let isFullscreen = false;

function startBanner() {
    const text = document.getElementById('userInput').value;
    const wrapper = document.getElementById('app-wrapper');
    const display = document.getElementById('scrolling-text');
    const ui = document.getElementById('ui-container');
    const screen = document.getElementById('banner-screen');

    if (text.trim() === "") return;

    // 1. SET TEXT & STYLE
    display.innerText = text;
    display.style.color = document.getElementById('colorPicker').value;
    display.style.fontSize = document.getElementById('fontSize').value + "vh";

    // 2. GO FULLSCREEN (Removes Google/Browser bars)
    if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
    } else if (wrapper.webkitRequestFullscreen) { /* Safari */
        wrapper.webkitRequestFullscreen();
    }

    ui.classList.add('hidden');
    screen.classList.remove('hidden');
    isFullscreen = true;
}

// 3. AUTO-DIRECTION BASED ON TILT
window.addEventListener('deviceorientation', (event) => {
    const textElement = document.getElementById('scrolling-text');
    
    // gamma is the left-to-right tilt in degrees
    let tilt = event.gamma; 

    if (tilt > 10) {
        // Tilted Right: Move Left to Right
        textElement.style.animationDirection = "reverse";
    } else if (tilt < -10) {
        // Tilted Left: Move Right to Left
        textElement.style.animationDirection = "normal";
    }
});

function stopBanner() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    document.getElementById('banner-screen').classList.add('hidden');
    document.getElementById('ui-container').classList.remove('hidden');
    isFullscreen = false;
}
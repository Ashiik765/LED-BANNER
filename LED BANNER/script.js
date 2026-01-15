function startBanner() {
    const text = document.getElementById('userInput').value;
    const chosenColor = document.getElementById('colorPicker').value;
    const chosenSize = document.getElementById('fontSize').value;

    const screen = document.getElementById('banner-screen');
    const display = document.getElementById('scrolling-text');
    const ui = document.getElementById('ui-container');

    if (text.trim() === "") {
        alert("Please enter a message!");
        return;
    }

    display.innerText = text;
    display.style.color = chosenColor;
    display.style.fontSize = chosenSize + "vh";

    ui.classList.add('hidden');
    screen.classList.remove('hidden');
}

function stopBanner() {
    document.getElementById('banner-screen').classList.add('hidden');
    document.getElementById('ui-container').classList.remove('hidden');
}

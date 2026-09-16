const heartsLayer = document.getElementById('hearts-layer');
const messageBox = document.getElementById('message');
const loveButton = document.getElementById('loveButton');
const resetButton = document.getElementById('resetButton');
const heartPlanet = document.getElementById('heartPlanet');

const loveMessages = [
    'You are the softest place in my heart.',
    'Every beat of mine says your name.',
    'My whole world feels brighter with you in it.',
    'Love grows deeper every time I think of you.',
    'You are my favorite dream and my forever home.'
];

let messageIndex = 0;

for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-float';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
    heart.style.fontSize = `${Math.random() * 1.4 + 1.1}rem`;
    heartsLayer.appendChild(heart);
}

function showMessage(text) {
    messageBox.textContent = text;
    messageBox.classList.remove('show');
    void messageBox.offsetWidth;
    messageBox.classList.add('show');
}

loveButton.addEventListener('click', () => {
    heartPlanet.classList.toggle('planet-mode');

    const nextMessage = loveMessages[messageIndex % loveMessages.length];
    messageIndex += 1;
    showMessage(nextMessage);
});

resetButton.addEventListener('click', () => {
    heartPlanet.classList.remove('planet-mode');
    showMessage('A little love is enough to brighten the whole world.');
});

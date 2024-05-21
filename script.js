
function redirectToUrl(url) {
    window.location.href = url;
    }

document.addEventListener("DOMContentLoaded", () => {
    const animationContainer = document.getElementById('blockchain-animation');
    for (let i = 0; i < 10; i++) {
        const dot = document.createElement('div');
        dot.style.top = `${Math.random() * 280}px`;
        dot.style.left = `${Math.random() * 780}px`;
        animationContainer.appendChild(dot);
    }
});

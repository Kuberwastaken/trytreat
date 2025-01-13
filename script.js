// Hero section transition
document.getElementById('try-now-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.landing-page').classList.add('hidden');
    document.querySelector('.main-app').classList.add('visible');
});

// Iframe size adjustment
function adjustIframeSize() {
    const iframe = document.getElementById('huggingFaceIframe');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    iframe.style.width = `${viewportWidth}px`;
    iframe.style.height = `${viewportHeight}px`;
}

// Event listeners for iframe adjustment
window.addEventListener('load', adjustIframeSize);
window.addEventListener('resize', adjustIframeSize);
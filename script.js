// Adjust iframe size to match the window's aspect ratio
function adjustIframeSize() {
    const iframe = document.getElementById('huggingFaceIframe');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    iframe.style.width = `${viewportWidth}px`;
    iframe.style.height = `${viewportHeight}px`;
}

// Adjust size on page load and when the window is resized
window.addEventListener('load', adjustIframeSize);
window.addEventListener('resize', adjustIframeSize);

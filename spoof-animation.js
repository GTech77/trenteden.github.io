// spoof-animation.js
document.addEventListener('DOMContentLoaded', () => {
    // Wait 7 seconds to start the animation (after splash screen and chatbot fade-in)
    setTimeout(() => {
        const spoofImage = document.querySelector('#spoof-image');
        if (spoofImage) {
            spoofImage.classList.add('animate');
        } else {
            console.error('Spoof image not found. Ensure the element with id="spoof-image" and src="spoof.png" exists in the HTML.');
        }
    }, 7000); // 7 seconds delay (6s splash + 1s chatbot fade-in)
});
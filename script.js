document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".intro h1"); // Target the title element
    const titleText = "Joshua Price"; // Your title text
    const typingSpeed = 80; // Speed of typing in milliseconds
    let charIndex = 0;

    function typeTitle() {
        if (charIndex < titleText.length) {
            titleElement.textContent += titleText[charIndex];
            charIndex++;
            setTimeout(typeTitle, typingSpeed);
        }
    }

    // Start the typing effect after a slight delay
    setTimeout(typeTitle, 800);
});

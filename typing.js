// Typing animation for the intro text
const typingText = document.getElementById('typingText');
const words = ['product designer', 'volleyball player', 'creative thinker', 'problem solver', 'celcius addict', 'professional sidequester', 'tft addict'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Delete characters
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = deletingSpeed;
    } else {
        // Type characters
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        // Word complete, pause then start deleting
        typingSpeed = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Word deleted, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing animation when page loads
if (typingText) {
    type();
}


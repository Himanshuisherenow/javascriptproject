const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
  if (isTyping) {
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;

    if (charIndex === words[wordIndex].length) {
      isTyping = false;
      setTimeout(erase, 3000); // Wait for a second before starting erasing
    }
  } else {
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex);
    charIndex--;

    if (charIndex === 0) {
      isTyping = true;
      wordIndex = (wordIndex + 1) % words.length; 
      setTimeout(type, 500); 
    }
  }

  setTimeout(type, 100); 
}

function erase() {
  typedTextSpan.textContent = words[wordIndex].substring(0, charIndex);
  charIndex--;

  if (charIndex === 0) {
    isTyping = true;
    wordIndex = (wordIndex + 1) % words.length; 
    setTimeout(type, 500); // Wait for half a second before typing again
  } else {
    setTimeout(erase, 100); // Erase one character every 100 milliseconds
  }
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000); // Wait for a second before starting typing
});
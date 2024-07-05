document.getElementById('current-year').textContent = new Date().getFullYear();

const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggle.classList.replace('fa-moon', 'fa-sun');
    } else {
        toggle.classList.replace('fa-sun', 'fa-moon');
    }
});

// Show logo and animate box after ZETEO text animation
const letters = document.querySelectorAll('.letter');
const lastLetter = letters[letters.length - 1];
lastLetter.addEventListener('animationend', () => {
    const logo = document.getElementById('logo');
    const logoBox = document.getElementById('logo-box');
    
    logo.style.opacity = 1;
    logoBox.style.animation = 'drawBox 3s forwards';

    // Add shimmer effect to the logo
    logo.classList.add('shimmer');
});

// Hover effect for the logo container
const logoContainer = document.getElementById('logo-container');
logoContainer.addEventListener('mouseover', () => {
    const logoBox = document.getElementById('logo-box');
    logoBox.style.animation = 'rotateShimmer 2s infinite';
});
logoContainer.addEventListener('mouseout', () => {
    const logoBox = document.getElementById('logo-box');
    logoBox.style.animation = '';
});

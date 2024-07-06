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

        // Show logo after ZETEO text animation
        const letters = document.querySelectorAll('.letter');
        const lastLetter = letters[letters.length - 1];
        lastLetter.addEventListener('animationend', () => {
            document.getElementById('logo').style.opacity = 1;
        });

const imagegallery =
document.getElementById('GALLERY');
const preButton =
document.getElementById('Prev');
const nextButton =
document.getElementById('Next');
const imageItem =
document.querySelectorAll('.image-item');
const imageWidth = document.querySelector('.image-item');offsetWidth + 16; // Including gap

        let currentPosition = 0;
        function updateButtons() {
            prevBtn.disabled = currentPosition <= 0;
            nextBtn.disabled = currentPosition >= gallery.scrollWidth - gallery.clientWidth;
        }
        prevBtn.addEventListener('click', () => {
            currentPosition -= imageWidth;
            if (currentPosition < 0) currentPosition = 0;
            gallery.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
            updateButtons();
        });

        nextBtn.addEventListener('click', () => {
            currentPosition += imageWidth;
            if (currentPosition > gallery.scrollWidth - gallery.clientWidth) {
                currentPosition = gallery.scrollWidth - gallery.clientWidth;
            }
            gallery.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
            updateButtons();
        });

        // Initial button state
        updateButtons();
        // Update buttons on window resize
        window.addEventListener('resize', () => {
            updateButtons();
        });

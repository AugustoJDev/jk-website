document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'https://ama-al.com.br/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-12.50.17-1.jpeg',
        'images/xtremeselva.webp',
        'https://s3.7segundos.com.br/uploads/extra/imagens/corrida2.jpeg'
    ];

    const bgSection = document.querySelector('.cover.fullscreen.image-bg');

    let currentIndex = 0;

    function changeBackground() {
        // Create a new image element
        const img = document.createElement('img');
        img.src = images[currentIndex];
        bgSection.appendChild(img);

        // Force reflow to ensure the transition will run
        img.offsetHeight;

        // Add the active class to start the transition
        img.classList.add('active');

        // Remove the current active image after the transition
        const currentImage = bgSection.querySelector('img.active:not(:last-child)');
        if (currentImage) {
            currentImage.classList.remove('active');
            currentImage.classList.add('previous');
            setTimeout(() => {
                bgSection.removeChild(currentImage);
            }, 1000); // Wait for the transition to complete
        }

        // Update the index for the next image
        currentIndex = (currentIndex + 1) % images.length;
    }

    setTimeout(() => {
        changeBackground();
        console.log("Visite meu website: https://augustojodev.tech")
    }, 5000); // Wait for the transition to complete

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});
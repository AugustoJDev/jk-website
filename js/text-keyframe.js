document.addEventListener('DOMContentLoaded', function() {
    function addAnimation(elementId, direction) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        const inAnimation = direction === "fade-in" ? `animated-fade-in` : `animated-slide-in-${direction}`;
                        element.classList.add(inAnimation);
                        observer.unobserve(element); // Stop observing once the animation is added
                    }, 100); // Delay the animation by 100ms
                }
            });
        }, { threshold: 0.6 }); // Trigger when 40% of the element is visible

        observer.observe(element);
    }

    const animations = {
        'section-home': 'left',
        'medals': 'right',
        'trophies': 'left',
        'region': 'top',
        'awards': 'bottom',
        'projects': 'fade-in',
        'creator': 'bottom',
        'clients': 'right',
        'work': 'left'
    };

    Object.entries(animations).forEach(([id, direction]) => {
        addAnimation(id, direction);
    });
});
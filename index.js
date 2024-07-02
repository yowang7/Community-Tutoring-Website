//Animated numbers, copied from chatGPT
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const duration = 2000; // Duration in milliseconds for all counters to complete

    // Easing function for a smoother animation
    const easeOutQuad = (t) => t * (2 - t);

    const updateCount = (counter, startTime) => {
        const target = +counter.getAttribute('data-target');
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1
        const easedProgress = easeOutQuad(progress); // Apply easing function
        const count = Math.ceil(target * easedProgress);

        counter.innerText = count + (counter.getAttribute('data-plus') ? '+' : '');

        if (progress < 1) {
            requestAnimationFrame(() => updateCount(counter, startTime));
        }
    };

    const startCounting = () => {
        const startTime = Date.now();
        counters.forEach(counter => {
            updateCount(counter, startTime);
        });
    };

    const options = {
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(entry.target); // Stop observing once counting starts
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

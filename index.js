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

////////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function() {
    const scrollAngle = window.scrollY / 15; // Adjust divisor for speed of rotation
    const diag = document.getElementById('diag');
    const topnav = document.getElementsByClassName('topnav');
    if((335 + scrollAngle) < 360){
        diag.style.height = `${100 + window.scrollY / 8}%`;
        diag.style.background = `linear-gradient(${335 + scrollAngle}deg, transparent 49.6%, #345EEB 0.1%, #D7E0FF 50%)`;
        //topnav[0].style.borderBottom = 'none';
    } else {
        //topnav[0].style.borderBottom = '25px solid #D7E0FF';
    }
});

////////////////////////////////////////////////////////////////////////

const scrollers = document.querySelectorAll(".scroller");

addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

 // Get elements
 const bioLink = document.getElementById('bioLink');
 const popupBox = document.getElementById('popupBox');
 const closeBtn = document.getElementById('closeBtn');
 const overlay = document.getElementById('overlay');

 // Function to show the pop-up
 bioLink.addEventListener('click', function(event) {
     event.preventDefault();
     popupBox.style.display = 'block';
     overlay.style.display = 'block';
 });

 // Function to hide the pop-up
 closeBtn.addEventListener('click', function() {
     popupBox.style.display = 'none';
     overlay.style.display = 'none';
 });

 // Function to hide the pop-up when clicking outside the pop-up box
 overlay.addEventListener('click', function() {
     popupBox.style.display = 'none';
     overlay.style.display = 'none';
 });


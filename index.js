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
        diag.style.height = `${110 + window.scrollY / 6}%`;
        diag.style.opacity = `${(370 - window.scrollY) / 370}`;
        diag.style.background = `linear-gradient(${335 + scrollAngle}deg, transparent 49.6%, #345EEB 0.1%, rgb(54,94,235,0.2) 50%)`;
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

////////////////////////////////////////////////////////////////////////

document.querySelectorAll('.openModal').forEach(button => {
    button.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    }
});

document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

//////////////////////////////////////////////

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

// Auto Scroll Function
window.onload = function() {
    if (window.location.hash) {
        let scrollAmount = parseInt(window.location.hash.substring(1));
        if (!isNaN(scrollAmount)) {
            window.scrollTo(0, scrollAmount);
        }
    }
}

//sections for the locations
function showSection(city) {
    const sections = document.querySelectorAll('.video-placeholder');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const buttons = document.querySelectorAll('.location-button');
    buttons.forEach(button => {
      button.classList.remove('active-button');
    });
  
    const activeSection = document.getElementById(`${city}-section`);
    activeSection.style.display = 'flex';
  
    const activeButton = document.getElementById(`button-${city}`);
    activeButton.classList.add('active-button');
  }
  
  function onPageLoad() {
    showSection('boston'); // You can change 'boston' to any other default section if needed
  }
  
  // Add event listener for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', onPageLoad);
  
  

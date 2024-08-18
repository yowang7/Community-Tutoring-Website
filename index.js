window.addEventListener('scroll', function() {
    let hght = 110;
    const scrollAngle = window.scrollY / 15; // Adjust divisor for speed of rotation
    const diag = document.getElementById('diag');
    const topnav = document.getElementsByClassName('topnav');
    if (window.innerWidth <= 1000 && window.innerWidth >= 788) {
        hght = 50;
    } else if (window.innerWidth < 788){
        hght = 40;
    } else {
        hght = 110;
    }

    if((335 + scrollAngle) < 360){
        diag.style.height = `${hght + window.scrollY / (660 / hght)}%`;
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

//subjects mobile view faq
document.querySelectorAll('.subject-item').forEach(item => {
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
    const sections = document.querySelectorAll('.location-stats-image');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    const buttons = document.querySelectorAll('.location-button');
    buttons.forEach(button => {
        button.classList.remove('active-button'); // Remove active class from all buttons
    });

    const activeSection = document.getElementById(`${city}-section`);
    activeSection.style.display = 'flex'; // Show the selected section

    const activeButton = document.getElementById(`button-${city}`);
    activeButton.classList.add('active-button'); // Add active class to the clicked button
}

function onPageLoad() {
    showSection('boston'); // Show the Boston section by default when the page loads
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', onPageLoad);

  

////////////////////////////////////////////////////////

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener('scroll', function() {
    // Only adjust scroll position if horizontal scroll is detected
    if (window.scrollX > 0) {
      window.requestAnimationFrame(() => {
        // Smoothly scroll back to the original position
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Smooth scroll back
        });
      });
    }
  });

  // Function to prevent horizontal scrolling
function preventHorizontalScroll() {
    // Check if there is any horizontal scroll
    if (window.scrollX > 0) {
      // Smoothly scroll back to the left edge
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Optional: smooth scroll back
      });
    }
  }
  
  // Add an event listener for scroll events
  window.addEventListener('scroll', preventHorizontalScroll, { passive: true });
  
  // Add a listener for resize events to ensure no horizontal overflow on resize
  window.addEventListener('resize', () => {
    if (window.scrollX > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  });
  
  


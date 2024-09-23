// Contact form handling
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
        header.classList.add('header-colored');
    } else {
        header.classList.remove('header-colored');
    }
});

const slideshow = document.getElementById('slideshow');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentPosition = 0;
const slideWidth = 312 + 0;  // Slide width + margin (adjust as needed)
const totalSlides = document.querySelectorAll('.slide').length;
const slideshowWidth = slideWidth * totalSlides; // Total width of the slideshow
const containerWidth = document.querySelector('.slideshow-container').clientWidth; // Visible width of the container

// Calculate the maximum scroll position (negative value, allowing the last slide to stop perfectly)
const maxScroll = -(slideshowWidth - containerWidth);

// Scroll to the left
leftArrow.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
            currentPosition = 0;  // Stop at the first slide
        }
        slideshow.style.transform = `translateX(${currentPosition}px)`;
    }
});

// Scroll to the right
rightArrow.addEventListener('click', () => {
    if (currentPosition > maxScroll) {
        currentPosition -= slideWidth;
        if (currentPosition < maxScroll) {
            currentPosition = maxScroll;  // Stop at the last slide
        }
        slideshow.style.transform = `translateX(${currentPosition}px)`;
    }
});

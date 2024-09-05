// Contact form handling
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
        header.classList.add('header-colored');
    } else {
        header.classList.remove('header-colored');
    }
});

// give hero image parallax effect on scroll
const heroBg = document.querySelector('.hero__bg');

window.addEventListener('scroll', ()=> {
    // get curent scroll position
    const scrolled = window.pageYOffset;

    // calculate movement, make it slower
    const coords = scrolled * 0.5;

    // apply transform (3d for better performance)
    heroBg.style.transform = `translate3d(0, ${coords}px, 0) scale(1.1)`;
});



// carousel functionality
const observerOptions = {
    root: document.querySelector('.carousel__viewport'),
    threshold: 0.7 // 70% of item visible to count
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id'); // index of visible slide
            document.querySelectorAll('.carousel__dot').forEach(dot => {
                dot.style.opacity = '0.3';
        });
        
        const activeDot = document.querySelector(`.carousel__dot[href="#${id}"]`);
        if (activeDot) activeDot.style.opacity = '1';
        }
    });
}, observerOptions);

// tell the document to watch every slide
document.querySelectorAll('.carousel__item').forEach(item => {
    observer.observe(item);
});



// hamburger menu toggle
const hamburger = document.querySelector('.navbar__hamburger'); // fixed class name
const navMenu = document.querySelector('.navbar__main-section'); // fixed class name

hamburger.addEventListener('click', () => {
    // 1. Toggle the visibility of the menu
    navMenu.classList.toggle('navbar__main-section--active'); 
    
    // 2. Toggle the 'X' animation on the hamburger
    hamburger.classList.toggle('is-active');

    // 3. Update accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
});
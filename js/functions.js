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
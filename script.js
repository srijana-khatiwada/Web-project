const navSlider = () => {
    const hamburger = document.querySelector('#hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-active');
})}
navSlider();

const internalLinks = document.querySelectorAll('.js-menu a[href^="#"');

if(internalLinks.length) {
    function scrollToSection(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const targetSection = document.querySelector(href);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    internalLinks.forEach((actualLink) => {
        actualLink.addEventListener('click', scrollToSection);
    });   
}
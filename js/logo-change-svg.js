const logo = document.querySelector('#js-logo-header');

if(logo) { // Verify if element exists
    function mouseOver() {
        this.setAttribute('src', './img/logo-active.svg');
    }

    function mouseOut() {
        this.setAttribute('src', './img/logo.svg');
    }

    logo.addEventListener('mouseover', mouseOver);
    logo.addEventListener('mouseout', mouseOut);
}
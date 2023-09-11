const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.menu__link');

function changeHeaderBackground(e) {
  if (window.scrollY > 2) {
    header.style.backgroundColor = 'rgba(251 251 251 / 71%)';
    menuLinks.forEach(link => {
      link.style.color = 'black';
    });
  } else {
    header.style.backgroundColor = 'transparent';
    // header.style.backgroundColor = 'transparent';
    menuLinks.forEach(link => {
      link.style.color = 'white';
    });
  }
}

window.addEventListener('scroll', changeHeaderBackground);
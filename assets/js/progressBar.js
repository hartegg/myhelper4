// progressBar.js
const scrollline = document.querySelector('.scroll-line');
function fillscrollline(){
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
  scrollline.style.width = percentScrolled + '%';
};
window.addEventListener('scroll', fillscrollline);
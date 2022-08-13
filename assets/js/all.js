
// menu.js
// expand.js
// progressBar.js
// scrollToTop.js

'use strict';

// menu.js
(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');

	function toggleMenu() {
		menu.classList.toggle('menu__list--active');
		menu.classList.toggle('menu__list--transition');
		this.classList.toggle('menu__btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu__list--transition');
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);
	}
}(document, window));

// expand.js
var expandBtn = document.querySelectorAll('.expand__button');

for (let i = 0; i < expandBtn.length; i++) {
  expandBtn[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.querySelector('svg').classList.add('expand-icon__right');
      this.querySelector('svg').classList.remove('expand-icon__down');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.querySelector('svg').classList.remove('expand-icon__right');
      this.querySelector('svg').classList.add('expand-icon__down');
    }
  });
}

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

// scrollToTop.js
window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("btnTop").style.visibility = "visible";
        document.getElementById("btnTop").style.opacity = "1";
    } else {
        document.getElementById("btnTop").style.visibility = "hidden";
        document.getElementById("btnTop").style.opacity = "0";
    }
};



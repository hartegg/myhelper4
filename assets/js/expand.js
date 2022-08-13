
var expandBtn = document.querySelectorAll('.expand__button');
var expandDiv = document.querySelectorAll('.expand');

for (let i = 0; i < expandBtn.length; i++) {
  expandBtn[i].addEventListener("click", function () {
    
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // close
      expandDiv[i].classList.remove('expanded');

      content.style.maxHeight = null;
      this.querySelector('svg').classList.add('expand-icon__right');
      this.querySelector('svg').classList.remove('expand-icon__down');

    } else { 

      // open
      expandDiv[i].classList.add('expanded');

      content.style.maxHeight = content.scrollHeight + "px";
      this.querySelector('svg').classList.remove('expand-icon__right');
      this.querySelector('svg').classList.add('expand-icon__down');
    }
  });
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
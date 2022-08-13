// podnaslovi
let post__toc = document.querySelector(".post__toc");
let toc__menu = document.querySelector(".toc__menu");
let podnasloviToggle = document.querySelector(".podnasloviToggle");

// podnasloviToggle.onclick = function() {
if (podnasloviToggle === null) {
} else {
  podnasloviToggle.addEventListener("click", function () {
    if (post__toc.style.height) {
      post__toc.style.height = null;
      post__toc.classList.remove("aktivno");
      toc__menu.classList.remove("show");
    } else {
      post__toc.style.height = post__toc.scrollHeight + "px";
      post__toc.classList.add("aktivno");
      toc__menu.classList.add("show");
    }
  });
}

// Change "Cookie Policy" to "Kolačići"
let el = document.querySelector(".cc-revoke");
if (typeof el != "undefined" && el != null) {
  if (el === null) {
    el.innerHTML = "";
  } else {
    el.innerHTML = "Kolačići";
  }
}

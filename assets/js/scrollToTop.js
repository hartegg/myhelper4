// scrollToTop
window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("btnTop").style.visibility = "visible";
        document.getElementById("btnTop").style.opacity = "1";
    } else {
        document.getElementById("btnTop").style.visibility = "hidden";
        document.getElementById("btnTop").style.opacity = "0";
    }
};

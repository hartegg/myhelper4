'use strict';

(function(){

    /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header  */
   
    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var doc = document.documentElement;
    var w   = window;
    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;
    var menu = document.getElementById('navbar');
    var menuHeight = document.getElementById('navbar').clientHeight;
    //console.log(menuHeight);
    var heightlogo = document.querySelector(".logo").clientHeight;
    var positionSticky = document.querySelector('.positionSticky');
    var scrollLine = document.querySelector('.scroll-line');
    var divSearchModal = document.getElementById('divSearchModal');
    // console.log("prevScroll = " + prevScroll + " ||| heightlogo = " + heightlogo);
    var toggled;
    var threshold = 125;


    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        // console.log( curScroll );

        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        // added - if current curScroll < threshold 
        // or if I'm on the top of the page
        // between 0 - 125 (threshold)
        if(curScroll < threshold){
            menu.classList.remove('hide');
            menu.classList.remove('wideMenuEffect-100');
            menu.classList.remove('wideMenuEffect-cener');
            menu.classList.add('wideMenuEffect-cener');
            
            // scrollLine
            scrollLine.style.top = "0px"

            // banner
            if(positionSticky !== null){
                positionSticky.style = "";
                positionSticky.style.top = "0";
            }else{ }
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
            // console.log("prevDirection = "+ prevDirection);
            // console.log("curScroll = "+ curScroll);
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        var navbar2 = w.document.querySelector('#navbar2')
        
        if(curDirection === 2 && curScroll > threshold) {
            // scrolled down
            menu.classList.remove('hide');
            menu.classList.remove('wideMenuEffect-100');
            menu.classList.add('wideMenuEffect-cener');
            
            // scrollLine
            scrollLine.style.top = "0px"

            // banner
            if(positionSticky !== null){
                positionSticky.style = "";
            }else{ }

           
        }
        else if(curDirection === 1) {
            //scrolled up  
            menu.classList.add('hide');
            menu.classList.add('wideMenuEffect-100');
            menu.classList.remove('wideMenuEffect-cener');
            navbar2.style.borderBottom = '0';

            // scrollLine
            scrollLine.style.top = menuHeight-1.0+ "px"

            // banner
            if(positionSticky !== null){
                positionSticky.style.top =  menuHeight+4+ "px";
            }else{ }
        } 
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);







    // first version
    
    // var navigation = window.document.getElementsByClassName("floatMenu");
    // var navClass = "show-nav";
    // var doc = document.documentElement;
    // var w   = window;
    // var lastScrollTop = 0;
    
    // function scrollDirection(scrollTop) {
    //     var direction = Math.sign(scrollTop - lastScrollTop);
    //     return (direction < 0 ? "up" : "down");
    // }
    // function autoshowNav() {
    //     var scrollTop = w.scrollTop;
    //     var scrollDir = scrollDirection(scrollTop);
    //     lastScrollTop = scrollTop;

    //     window.document.getElementsByClassName("floatMenu").classList.toggle("show-nav");
    //    // navigation.classList.toggle(navClass, scrollDir === "up");
    // }

    // var hasScrolled = false;
    // w.scroll(function scrollWindowHandler() {
    //     hasScrolled = true;
    // });
    
    // setInterval(function scrollChecker() {
    //     if (hasScrolled) {
    //         autoshowNav();
    //         hasScrolled = false;
    //     }
    // }, 250);

    // window.addEventListener('scroll', autoshowNav);

})();
let loaderCenter = window.document.querySelector(".loader__center");
let right = window.document.querySelector(".loader__right");
let left = window.document.querySelector(".loader__left");

let opacity = 75;

let btn = document.querySelector(".scroll-icon")

let wndHeight = window.document.documentElement.clientHeight;
let wndWidth = window.document.documentElement.clientWidth;




requestAnimationFrame(fadeOut);
loadListeners();


function loadListeners() {
    btn.addEventListener("click", scrollToTop);
}



function fadeOut() {
    opacity--;
    loaderCenter.style.opacity = opacity;

    if (opacity > 0) {
        requestAnimationFrame(fadeOut);
    } else if (opacity == 0) {

        right.classList.add("right-out");
        left.classList.add("left-out");
        setTimeout(function removeClasses() {
            right.classList.remove("loader__right");
            left.classList.remove("loader__left");
        }, 1800)
        loaderCenter.style.display = "none";


    }
}


function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

let buttonAbout = document.querySelectorAll('.btn-about');
let aboutSection = document.querySelectorAll('.container__about')[0];
for (let el of buttonAbout) {
    el.addEventListener('click', () => {

        window.scrollBy({
            top: aboutSection.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
}


window.addEventListener("scroll", function() {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let nav = document.querySelectorAll(".container__nav")[0];
    console.log(top)
    if (top > 10) {
        nav.style.backgroundColor = "white";
        nav.style.boxShadow = "0px 17px 27px -11px rgba(0,0,0,0.31)";

    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
    }
});

// var ObjectScroller = function(windowHeight) {
//     this.windowHeight = windowHeight;
// }
// ObjectScroller.prototype.checkObjects = function() {
//     var objects = document.getElementsByClassName('object');
//     for (var i = 0; i < objects.length; i++) {
//         var distanceFromTop = objects[i].getBoundingClientRect().top;
//         if (this.windowHeight > distanceFromTop) {
//             objects[i].style.backgroundColor = "red";
//         } else {
//             objects[i].style.backgroundColor = "blue";
//         }
//     }
// }
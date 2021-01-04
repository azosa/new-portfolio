let loaderCenter = window.document.querySelector(".loader__center");
let right=window.document.querySelector(".loader__right");
let left=window.document.querySelector(".loader__left");

let opacity=75;

let btn =document.querySelector(".scroll-icon")

let wndHeight=window.document.documentElement.clientHeight;
let wndWidth=window.document.documentElement.clientWidth;




requestAnimationFrame(fadeOut);
loadListeners();


function loadListeners(){
btn.addEventListener("click", scrollFunction);
}



function fadeOut(){
    opacity--;
    loaderCenter.style.opacity=opacity;
    
    if (opacity > 0){
        requestAnimationFrame(fadeOut);
    }
    else if(opacity==0){
  
       right.classList.add("right-out");
       left.classList.add("left-out");
     setTimeout(function removeClasses(){ 
right.classList.remove("loader__right"); left.classList.remove("loader__left");} ,1800)
     loaderCenter.style.display="none";
      
       
    }
} 


function scrollFunction(){
    document.documentElement.scrollTop = 0;
}
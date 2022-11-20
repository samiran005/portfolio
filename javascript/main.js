const bars = document.getElementById("menuClick");

const menuIcon = document.querySelector(".menu-icon");
const menuXicon = document.querySelector(".menu-xicon");

const blurEffect = document.querySelector(".blur-for-menu-open");

const menuBar = document.getElementById("menu-bar");
console.log(menuBar)

bars.addEventListener('click',()=>{
    menuBar.classList.toggle("display-flex");
    menuIcon.classList.toggle("display-flex");
    menuXicon.classList.toggle("display-flex");
    blurEffect.classList.toggle("display-flex");

})

document.addEventListener('scroll',()=>{
    menuBar.classList.remove("display-flex");
    menuIcon.classList.add("display-flex");
    menuXicon.classList.remove("display-flex");
    blurEffect.classList.remove("display-flex");

})
const bars = document.getElementById("bars");

const menuBar = document.getElementById("menu-bar");
console.log(menuBar)

bars.addEventListener('click',()=>{
    menuBar.classList.toggle("display-flex");
    if(menuBar.classList.contains("display-flex")){
        bars.style.backgroundImage = "url(../images/xmark-solid.svg)";
    }else {
        bars.style.backgroundImage = "url(../images/bars-solid.svg)";
    }
})

document.addEventListener('scroll',()=>{
    menuBar.classList.remove("display-flex");
    bars.style.backgroundImage = "url(../images/bars-solid.svg)";
})
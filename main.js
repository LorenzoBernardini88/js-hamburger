const btnOpen = document.querySelector(".fas.fa-bars");
const btnClose = document.querySelector(".fas.fa-times");
let hambMenu = document.querySelector(".hamburger-menu");


btnOpen.addEventListener("click",function(){
    hambMenu.classList.add("active");
});

btnClose.addEventListener("click",function(){
    hambMenu.classList.remove("active");
});

// const btnMenu = document.getElementsByClassName(".fas");
// let hambMenu = document.querySelector(".hamburger-menu");

// btnMenu.addEventListener("click", function(){
//     if(hambMenu.style.display == "none"){
//         hambMenu.classList.add("active");
    
//     } else {
//         hambMenu.classList.remove("active");
//     }

// })
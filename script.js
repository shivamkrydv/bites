const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    }); 


let showsidenav = document.querySelector(".mainhambar");
let hidesidenav = document.querySelector(".sidenavclose");

let sidenav = document.querySelector(".sidenav");


const showside = () =>{
    sidenav.style.display = "flex";
}
const hideside = () =>{
    sidenav.style.display = "none"
}

showsidenav.addEventListener("click",showside);
hidesidenav.addEventListener("click",hideside);

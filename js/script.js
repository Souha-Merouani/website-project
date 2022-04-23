$(document).ready(function () {
    $(".owl-carousel").owlCarousel({ items: 4, nav: true });
});

const navbar={
    button:"",
    nav:document.querySelector(".main-nav"),
};

const schedule={
    schedule:document.querySelector("#Schedule"),
    buttons:document.querySelectorAll(".schedule-nav a"),
    days:document.querySelectorAll(".schedule-day"),
};

function hideDays() {
    schedule.days.forEach((elm) => {
        elm.classList.remove("active");
    });
    schedule.buttons.forEach((elm) => {
        elm.classList.remove("active");
    });
}


schedule.buttons.forEach(function(elm,i) {
    elm.onclick=function(){
        hideDays();
        elm.classList.add("active");
        schedule.days[i].classList.add("active");
    };
});

// ----------------------------------scrolling nav-----------------------------------

function scrollHander(e) {
    if(window.pageYOffset>300) navbar.nav.classList.add("fixed");
    else navbar.nav.classList.remove("fixed");
}
document.onscroll=scrollHander;
scrollHander();

// -------------------------------- registration form-----------------------------------

function registerToggle(){
    var main=document.querySelector(".container");
    main.classList.toggle("active");
    var popup=document.querySelector(".registration-form");
    popup.classList.toggle("active");
}



// -------------------------nav menu---------------------------------------

const hamburger = document.querySelector(".hamburger");
const mainnavelements = document.querySelector(".main-nav-elements");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    mainnavelements.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    mainnavelements.classList.remove("active");
}
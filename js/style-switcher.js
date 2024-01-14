// ----------------------------Toggle Style Switcher---------------------------------------------
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll",()=>{
    document.querySelector(".style-switcher").classList.remove("open");
})

// ----------------------------Nav Tab toggler ---------------------------------------------
const tabToggler = document.querySelector(".nav-toggler");
tabToggler.addEventListener("click",()=>{
    
    document.querySelector(".above").classList.toggle("open");
})



// -------------------------------Toggle theme color-------------------------------------
let currentThemeColor = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    currentThemeColor.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true")
        }
    })
}


// ------------------------------- theme ark and light mode-------------------------------------
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


// ---------------------------chnge link color------------------------------
// Get all elements with class "navLink"
const navLinks = document.querySelectorAll('.navLink');

// Function to handle click event
function handleNavClick(event) {
    // Remove "active" class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add "active" class to the clicked link
    event.target.classList.add('active');
}

// Attach click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});
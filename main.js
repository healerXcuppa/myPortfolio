// ]MOBILE NAVIGATION MENU TOGGLE
const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")

// Select the icon element inside the menu button
// "i" targets the <i> tag (icon) inside menuBtn
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    // classList.contains() returns true if element has the specified class
    const isOpen = navLinks.classList.contains("open");
    
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

// Close mobile menu when a navigation link is clicked
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ===== SCROLL REVEAL ANIMATIONS =====
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 2000,
});

// Reveal social icons
ScrollReveal().reveal(".social_icons", {
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
});


ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_content p", {
    ...scrollRevealOption,
    delay: 1000, 
    interval: 500,
});

ScrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".skill_card", {
    ...scrollRevealOption,
    delay: 500,
    interval: 300,
});

ScrollReveal().reveal(".project_card", {
    ...scrollRevealOption,
    delay: 500,
    interval: 300,
});

ScrollReveal().reveal(".contact_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".contact_content", {
    ...scrollRevealOption,
    origin: "left",
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    
    // window.scrollY gets the number of pixels scrolled from top
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

function isInViewport(element) {
    // getBoundingClientRect() returns element's size and position
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        // Top edge is below viewport top
        
        rect.left >= 0 &&
        // Left edge is to right of viewport left
        
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // Bottom edge is above viewport bottom
        // window.innerHeight gets viewport height
        
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        // Right edge is to left of viewport right
    );
}

// Function to animate skill bars
function animateSkills() {
    const skillBars = document.querySelectorAll(".skill_progress");
    
    skillBars.forEach((bar) => {
        if (isInViewport(bar)) {
            bar.classList.add("animated");
        }
    });
}
window.addEventListener("scroll", animateSkills);
animateSkills();
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})


navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

// scrollHeade

const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (this.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-300");
    } else {
        header.classList.remove("border-b", "border-yellow-300");
    }
};

window.addEventListener('scroll', scrollHeader);

// scrollUp

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener('scroll', scrollUp);


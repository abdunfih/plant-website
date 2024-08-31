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
    const header = document.getElementById("header");
  
    if (this.scrollY >= 50) {
      header.classList.add("border-b", "border-yellow-300");
    } else {
      header.classList.remove("border-b", "border-yellow-300");
    }
  };
  
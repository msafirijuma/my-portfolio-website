const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
const hamburgerIcon = document.querySelector(".fa-bars")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.replace("fa-bars", "fa-times")
    } else {
        hamburgerIcon.classList.replace("fa-times", "fa-bars")
    }
})
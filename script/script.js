const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".nav-bar");
const humburgerIcon = document.querySelector(".fa-bars")

humburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    
    if (humburgerIcon.classList.contains("fa-bars")) {
        humburgerIcon.classList.replace("fa-bars", "fa-times")
    } else {
        humburgerIcon.classList.replace("fa-times", "fa-bars")
    }
})
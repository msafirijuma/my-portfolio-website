const themeToggler = document.querySelector("#themeToggler");
themeToggler.addEventListener("click", () => {
    if (themeToggler.classList.contains("fa-moon-o")) {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
    document.body.classList.toggle("dark");
})

const toggleDarkMode = () => {
    themeToggler.classList.replace("fa-moon-o", "fa-sun-o")
}

const toggleLightMode = () => {
    themeToggler.classList.replace("fa-sun-o", "fa-moon-o")
}
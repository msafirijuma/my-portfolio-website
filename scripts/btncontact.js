const btnContactMe = document.querySelector(".btn-contact-me");

const toggleContactMeDarkMode = () => {
    if (btnContactMe.classList.contains("btn-contact-me")) {
        btnContactMe.classList.replace("btn-contact-me", "btn-contact-me-dark-mode");
    } else {
        btnContactMe.classList.replace("btn-contact-me-dark-mode", "btn-contact-me");
    }
}

const toggleContactMeLightMode = () => {
}

if (darkMode == "enabled") {
    toggleContactMeDarkMode();
}
themeToggler.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "disabled") {
        toggleContactMeDarkMode();
    } else {
        toggleContactMeLightMode();
    }
})
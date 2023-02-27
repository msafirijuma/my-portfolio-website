let themeToggler = document.querySelector("#themeToggler");
const cards = document.querySelectorAll(".card")
const twitters = document.querySelectorAll(".fa-twitter");
const linkedins = document.querySelectorAll(".fa-linkedin");
const githubs = document.querySelectorAll(".fa-github");
const whatsapps = document.querySelectorAll(".fa-whatsapp");
let darkMode = localStorage.getItem("dark-mode")


const toggleSocialDarkMode = () => {

    for (let twitter of twitters) {
        if (twitter.classList.contains("fa-twitter")) {
            twitter.classList.add("fa-social-dark-mode")
        }
    }

    for (let linkedin of linkedins) {
        if (linkedin.classList.contains("fa-linkedin")) {
            linkedin.classList.add("fa-social-dark-mode")
        }
    }

    for (let github of githubs) {
        if (github.classList.contains("fa-github")) {
            github.classList.add("fa-social-dark-mode")
        }
    }

    for (let whatsapp of whatsapps) {
        if (whatsapp.classList.contains("fa-whatsapp")) {
            whatsapp.classList.add("fa-social-dark-mode")
        }
    }
}

const toggleSocialLightMode = () => {

    for (let twitter of twitters) {
        if (twitter.classList.contains("fa-twitter")) {
            twitter.classList.remove("fa-social-dark-mode")
        }
    }

    for (let linkedin of linkedins) {
        if (linkedin.classList.contains("fa-linkedin")) {
            linkedin.classList.remove("fa-social-dark-mode")
        }
    }

    for (let github of githubs) {
        if (github.classList.contains("fa-github")) {
            github.classList.remove("fa-social-dark-mode")
        }
    }

    for (let whatsapp of whatsapps) {
        if (whatsapp.classList.contains("fa-whatsapp")) {
            whatsapp.classList.remove("fa-social-dark-mode")
        }
    }
    localStorage.setItem("dark-mode", "disabled")
}

const toggleBtnDarkMode = () => {
    let btnAll = document.querySelectorAll(".btn")
    for (let btn of btnAll) {
        if (btn.classList.contains("btn")) {
            btn.classList.add("btn-dark-mode");
        }
    }

    localStorage.setItem("dark-mode", "enabled")
}

const toggleBtnLightMode = () => {
    let btnAll = document.querySelectorAll(".btn")
    for (let btn of btnAll) {
        if (btn.classList.contains("btn")) {
            btn.classList.remove("btn-dark-mode");
        }
    }
    localStorage.setItem("dark-mode", "disabled")
}

// Toggle Black Text Color (Dark Mode)
const toggleTextColorDark = () => {
    let sectionHeaders = document.querySelectorAll(".section-header")
    const labels = document.querySelectorAll(".form-label");
    for (let sectionHeader of sectionHeaders) {
        if (sectionHeader.classList.contains("section-header")) {
            sectionHeader.classList.add("section-header-dark-mode")
        }
    }

    for (let label of labels) {
        if (label.classList.contains("form-label")) {
            label.classList.add("form-label-dark-mode")
        }
    }

    localStorage.setItem("dark-mode", "enabled");
}


// Toggle White Text Color (Dark Mode)
const toggleTextColorLight = () => {
    let sectionHeaders = document.querySelectorAll(".section-header")
    const labels = document.querySelectorAll(".form-label");
    for (let sectionHeader of sectionHeaders) {
        if (sectionHeader.classList.contains("section-header")) {
            sectionHeader.classList.remove("section-header-dark-mode")
        }
    }

    for (let label of labels) {
        if (label.classList.contains("form-label")) {
            label.classList.remove("form-label-dark-mode")
        }
    }

    localStorage.setItem("dark-mode", "disabled")
}


// Dark Mode
const toggleDarkMode = () => {
    themeToggler.classList.replace("fa-moon-o", "fa-sun-o");
    let offWhiteContainers = document.querySelectorAll(".off-white-section");
    let coloredContainers = document.querySelectorAll(".container");
    let contactOffWhiteContainer = document.querySelector(".contact-off-white-section")
    let header = document.querySelector(".header");

    if (contactOffWhiteContainer.classList.contains("contact-off-white-section")) {
        contactOffWhiteContainer.classList.add("contact-off-white-dark-mode");
    }

    for (let offWhiteContainer of offWhiteContainers) {
        if (offWhiteContainer.classList.contains("off-white-section")) {
            offWhiteContainer.classList.add("off-white-dark-mode");
        }
    }

    for (let coloredContainer of coloredContainers) {
        if (coloredContainer.classList.contains("container")) {
            coloredContainer.classList.add("colored-container-dark-mode");
        }
    }

    for (let card of cards) {
        if (card.classList.contains("card")) {
            card.classList.add("card-dark-mode")
        }
    }

    if (header.classList.contains("header")) {
        header.classList.add("header-dark-mode");
    }

    document.body.classList.add("dark");
    localStorage.setItem("dark-mode", "enabled")
}


// Light Mode
const toggleLightMode = () => {
    themeToggler.classList.replace("fa-sun-o", "fa-moon-o")
    let offWhiteContainers = document.querySelectorAll(".off-white-section");
    let coloredContainers = document.querySelectorAll(".container");
    let contactOffWhiteContainer = document.querySelector(".contact-off-white-section")
    let header = document.querySelector(".header")

    if (contactOffWhiteContainer.classList.contains("contact-off-white-section")) {
        contactOffWhiteContainer.classList.remove("contact-off-white-dark-mode");
    }

    for (let offWhiteContainer of offWhiteContainers) {
        if (offWhiteContainer.classList.contains("off-white-section")) {
            offWhiteContainer.classList.remove("off-white-dark-mode");
        }
    }

    for (let coloredContainer of coloredContainers) {
        if (coloredContainer.classList.contains("container")) {
            coloredContainer.classList.remove("colored-container-dark-mode");
        }
    }

    for (let card of cards) {
        if (card.classList.contains("card")) {
            card.classList.remove("card-dark-mode")
        }
    }

    if (header.classList.contains("header")) {
        header.classList.remove("header-dark-mode");
    }

    document.body.classList.remove("dark");
    localStorage.setItem("dark-mode", "disabled")
}

if (darkMode == "enabled") {
    toggleDarkMode();
    toggleSocialDarkMode();
    toggleBtnDarkMode();
    toggleTextColorDark();     // toggle default when page loads
}

// Dark AND Light Toggler
themeToggler.addEventListener("click", () => {
    // window.location.reload();
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "disabled") {
        toggleDarkMode();
        toggleTextColorDark();
        toggleSocialDarkMode();
        toggleBtnDarkMode()
    } else {
        toggleLightMode();
        toggleTextColorLight();
        toggleBtnLightMode();
        toggleSocialLightMode();
    }

})


// Navbar scroll and  chevron-up icon

let headerScroll = document.querySelector("#header");
const scrolltop = document.querySelector("#scrolltop");
const hamburgerLink = document.querySelector(".hamburger-link");
const faDarkMode = document.querySelector(".theme")

if (headerScroll.classList.contains("header")) {
    window.addEventListener("scroll", () => {

        if (window.document.documentElement.scrollTop >= 100) {
            headerScroll.classList.add("navbar-scroll");
            scrolltop.style.visibility = "visible"
        } else {
            headerScroll.classList.remove("navbar-scroll");
            scrolltop.style.visibility = "hidden"
        }
    })
} else {
    window.addEventListener("scroll", () => {
        if (window.document.documentElement.scrollTop >= 100) {
            headerScroll.classList.add("navbar-scroll-dark-mode");
            scrolltop.style.visibility = "visible";
            hamburgerLink.classList.add("hamburger-link-dark-mode");
            faDarkMode.classList.add("theme-dark-mode");
        } else {
            headerScroll.classList.remove("navbar-scroll-dark-mode");
            scrolltop.style.visibility = "hidden";
            hamburgerLink.classList.remove("hamburger-link-dark-mode");
            faDarkMode.classList.remove("theme-dark-mode");
        }
    })
}
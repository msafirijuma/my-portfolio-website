let themeToggler = document.querySelector("#themeToggler");
const sectionHeaders = document.querySelectorAll(".section-header");
const labels = document.querySelectorAll(".form-label");
const cards = document.querySelectorAll(".card")
const twitters = document.querySelectorAll(".fa-twitter");
const linkedins = document.querySelectorAll(".fa-linkedin");
const githubs = document.querySelectorAll(".fa-github");
const whatsapps = document.querySelectorAll(".fa-whatsapp");
const btnAll = document.querySelectorAll(".btn");
const header = document.querySelector(".header");
let darkMode = localStorage.getItem("dark-mode")


const toggleSocialDarkMode = () => {

    for (let twitter of twitters) {
        if (twitter.classList.contains("fa-twitter")) {
            twitter.classList.add("fa-social-dark-mode")
        } else {
            twitter.classList.remove("fa-social-dark-mode");
        }
    }

    for (let linkedin of linkedins) {
        if (linkedin.classList.contains("fa-linkedin")) {
            linkedin.classList.add("fa-social-dark-mode")
        } else {
            linkedin.classList.remove("fa-social-dark-mode");
        }
    }

    for (let github of githubs) {
        if (github.classList.contains("fa-github")) {
            github.classList.add("fa-social-dark-mode")
        } else {
            github.classList.remove("fa-social-dark-mode");
        }
    }

    for (let whatsapp of whatsapps) {
        if (whatsapp.classList.contains("fa-whatsapp")) {
            whatsapp.classList.add("fa-social-dark-mode")
        } else {
            whatsapp.classList.remove("fa-social-dark-mode");
        }
    }
}

const toggleSocialLightMode = () => {
    localStorage.setItem("dark-mode", "disabled")
}

const toggleBtnDarkMode = () => {
    for (let btn of btnAll) {
        if (btn.classList.contains("btn")) {
            btn.classList.add("btn-dark-mode");
        } else {
            btn.classList.remove("btn-dark-mode");
        }
    }

    localStorage.setItem("dark-mode", "enabled")
}

const toggleBtnLightMode = () => {
    localStorage.setItem("dark-mode", "disabled")
}

// Toggle Black Text Color (Dark Mode)
const toggleTextColorDark = () => {
    for (let sectionHeader of sectionHeaders) {
        if (sectionHeader.classList.contains("section-header")) {
            sectionHeader.classList.replace("section-header", "section-header-dark-mode")
        } else {
            sectionHeader.classList.replace("section-header-dark-mode", "section-header")
        }
    }

    for (let label of labels) {
        if (label.classList.contains("form-label")) {
            label.classList.replace("form-label", "form-label-dark-mode")
        } else {
            label.classList.replace("form-label-dark-mode", "form-label")
        }
    }

    localStorage.setItem("dark-mode", "enabled");
}


// Toggle White Text Color (Dark Mode)
const toggleTextColorLight = () => {
    for (let sectionHeader of sectionHeaders) {
        if (sectionHeader.classList.contains("section-header-dark-mode")) {
            sectionHeader.classList.replace("section-header-dark-mode", "section-header")
        } else {
            sectionHeader.classList.replace("section-header", "section-header-dark-mode")
        }
    }

    for (let label of labels) {
        if (label.classList.contains("form-label-dark-mode")) {
            label.classList.replace("form-label-dark-mode", "form-label")
        } else {
            label.classList.replace("form-label", "form-label-dark-mode")
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

    if (contactOffWhiteContainer.classList.contains("contact-off-white-section")) {
        contactOffWhiteContainer.classList.replace("contact-off-white-section", "contact-off-white-dark-mode");
    } else {
        contactOffWhiteContainer.classList.replace("contact-off-white-dark-mode", "contact-off-white-section")
    }

    for (let offWhiteContainer of offWhiteContainers) {
        if (offWhiteContainer.classList.contains("off-white-section")) {
            offWhiteContainer.classList.replace("off-white-section", "off-white-dark-mode");
        } else {
            offWhiteContainer.classList.replace("off-white-dark-mode", "off-white-section");
        }
    }

    for (let coloredContainer of coloredContainers) {
        if (coloredContainer.classList.contains("container")) {
            coloredContainer.classList.replace("container", "colored-container-dark-mode");
        } else {
            coloredContainer.classList.replace("colored-container-dark-mode", "container");
        }
    }

    for (let card of cards) {
        if (card.classList.contains("card")) {
            card.classList.replace("card", "card-dark-mode")
        } else {
            card.classList.replace("card-dark-mode", "card")
        }
    }

    if (header.classList.contains("header")) {
        header.classList.replace("header", "header-dark-mode");
    } else {
        header.classList.replace("header-dark-mode", "header");
    }

    localStorage.setItem("dark-mode", "enabled")
}


// Light Mode
const toggleLightMode = () => {
    themeToggler.classList.replace("fa-sun-o", "fa-moon-o")
    let offWhiteContainers = document.querySelectorAll(".off-white-dark-mode");
    let coloredContainers = document.querySelectorAll(".colored-container-dark-mode");
    let contactOffWhiteContainer = document.querySelector(".contact-off-white-dark-mode");

    if (contactOffWhiteContainer.classList.contains("contact-off-white-dark-mode")) {
        contactOffWhiteContainer.classList.replace("contact-off-white-dark-mode", "contact-off-white-section");
    } else {
        contactOffWhiteContainer.classList.replace("contact-off-white-section", "contact-off-white-dark-mode");
    }

    for (let offWhiteContainer of offWhiteContainers) {
        if (offWhiteContainer.classList.contains("off-white-dark-mode")) {
            offWhiteContainer.classList.replace("off-white-dark-mode", "off-white-section");
        } else {
            offWhiteContainer.classList.replace("off-white-section", "off-white-dark-mode");
        }
    }

    for (let coloredContainer of coloredContainers) {
        if (coloredContainer.classList.contains("colored-container-dark-mode")) {
            coloredContainer.classList.replace("colored-container-dark-mode", "container");
        } else {
            coloredContainer.classList.replace("container", "colored-container-dark-mode");
        }
    }

    for (let card of cards) {
        if (card.classList.contains("card-dark-mode")) {
            card.classList.replace("card-dark-mode", "card");
        } else {
            card.classList.replace("card", "card-dark-mode")
        }
    }

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
        themeToggler.title = "Switch to light mode"
    } else {
        toggleLightMode();
        toggleTextColorLight();
        toggleBtnLightMode();
        toggleSocialLightMode();
        themeToggler.title = "Switch to dark mode"
    }

    document.body.classList.toggle("dark");
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
const themeToggler = document.querySelector("#themeToggler");
const sectionHeaders = document.querySelectorAll(".section-header");
const nameDev = document.querySelector(".name");
const contactNames = document.querySelectorAll(".contact-name");
const contactLinks = document.querySelectorAll(".contact-link");
const labels = document.querySelectorAll(".label");
const redAsterisk = document.querySelector(".red-asterisk")


// Toggle Text Color (Dark Mode)
const toggleTextColorDark = () => {
    if (nameDev.classList.contains("name") && redAsterisk.classList.contains("red-asterisk")) {
        nameDev.classList.replace("name", "name-dark-mode");
        redAsterisk.classList.replace("red-asterisk", "red-asterisk-dark-mode")
    } else {
        nameDev.classList.replace("name-dark-mode", "name")
        redAsterisk.classList.replace("red-asterisk-dark-mode", "red-asterisk");
    }

    for (let sectionHeader of sectionHeaders) {
        if (sectionHeader.classList.contains("section-header")) {
            sectionHeader.classList.replace("section-header", "section-header-dark-mode")
        } else {
            sectionHeader.classList.replace("section-header-dark-mode", "section-header")
        }
    }

    for (let contactName of contactNames) {
        if (contactName.classList.contains("contact-name")) {
            contactName.classList.replace("contact-name", "contact-name-dark-mode")
        } else {
            contactName.classList.replace("contact-name-dark-mode", "contact-name")
        }
    }

    for (let label of labels) {
        if (label.classList.contains("label")) {
            label.classList.replace("label", "label-dark-mode")
        } else {
            label.classList.replace("label-dark-mode", "label")
        }
    }

    for (let contactLink of contactLinks) {
        if (contactLink.classList.contains("contact-link")) {
            contactLink.classList.replace("contact-link", "contact-link-dark-mode")
        } else {
            contactLink.classList.replace("contact-link-dark-mode", "contact-link")
        }
    }
}


// Toggle Text Color (Dark Mode)
const toggleTextColorLight = () => {
    if (nameDev.classList.contains("name-dark-mode") && redAsterisk.classList.contains("red-asterisk-dark-mode")) {
         nameDev.classList.replace("name-dark-mode", "name");
         redAsterisk.classList.replace("red-asterisk-dark-mode", "red-asterisk");
    } else {
         nameDev.classList.replace("name", "name-dark-mode");
         redAsterisk.classList.replace("red-asterisk", "red-asterisk-dark-mode");
    }

    for (let sectionHeader of sectionHeaders) {
        if (sectionHeader.classList.contains("section-header-dark-mode")) {
            sectionHeader.classList.replace("section-header-dark-mode", "section-header")
        } else {
            sectionHeader.classList.replace("section-header", "section-header-dark-mode")
        }
    }

    for (let contactName of contactNames) {
        if (contactName.classList.contains("contact-name-dark-mode")) {
            contactName.classList.replace("contact-name-dark-mode", "contact-name")
        } else {
            contactName.classList.replace("contact-name", "contact-name-dark-mode")
        }
    }

    for (let label of labels) {
        if (label.classList.contains("label-dark-mode")) {
            label.classList.replace("label-dark-mode", "label")
        } else {
            label.classList.replace("label", "label-dark-mode")
        }
    }

    for (let contactLink of contactLinks) {
        if (contactLink.classList.contains("contact-link-dark-mode")) {
            contactLink.classList.replace("contact-link-dark-mode", "contact-link")
        } else {
            contactLink.classList.replace("contact-link", "contact-link-dark-mode")
        }
    }
}



// Dark Mode
const toggleDarkMode = () => {
    themeToggler.classList.replace("fa-moon-o", "fa-sun-o");
    let offWhiteContainers = document.querySelectorAll(".off-white-section");
    let coloredContainers = document.querySelectorAll(".container");

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
}


// Light Mode
const toggleLightMode = () => {
    themeToggler.classList.replace("fa-sun-o", "fa-moon-o")
    let offWhiteContainers = document.querySelectorAll(".off-white-dark-mode");
    let coloredContainers = document.querySelectorAll(".colored-container-dark-mode");

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
            coloredContainer.classList.replace("container","colored-container-dark-mode");
        }
    }
}


// Dark AND Light Toggler
themeToggler.addEventListener("click", () => {
    if (themeToggler.classList.contains("fa-moon-o") && (themeToggler.title)) {
        toggleDarkMode();
        toggleTextColorDark();
        themeToggler.title = "Switch to light mode"
    } else {
        toggleLightMode();
        toggleTextColorLight();
        themeToggler.title = "Switch to dark mode"
    }
    document.body.classList.toggle("dark");
})


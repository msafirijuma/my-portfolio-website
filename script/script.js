 var humburger = document.querySelector(".humburger");

    humburger.onclick = function () {
        var navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }
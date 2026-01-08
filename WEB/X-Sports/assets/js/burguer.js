document.addEventListener("DOMContentLoaded", function () {

    const navIcon = document.getElementById("nav-icon"); 
    const menuMobile = document.querySelector("#menu_mobile");



    navIcon.addEventListener("click", function () {
        this.classList.toggle("open");
        menuMobile.classList.toggle("grow"); 
        

        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const menuLinks = document.querySelectorAll(".menu_mobile_nav li a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navIcon.classList.remove("open");
            menuMobile.classList.remove("grow"); 
        });
    });
});
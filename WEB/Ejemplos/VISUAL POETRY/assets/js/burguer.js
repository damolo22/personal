document.addEventListener("DOMContentLoaded", function () {

    const navIcon = document.getElementById("nav-icon");
    const menuOn = document.getElementById("menu-on");
    const menuMobile = document.querySelector(".menu_mobile");

    navIcon.addEventListener("click", function () {
        this.classList.toggle("open");
        menuMobile.classList.toggle("grow");
        menuOn.classList.toggle("visible_menu");

        // Subir la pagina al principio cuando pulsemos en el menu colapsado
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Cuando pulsemos una opcion del nav debe cerrarse el menu_mobile
    const menuLinks = document.querySelectorAll(".menu_mobile_nav li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navIcon.classList.remove("open");
            menuMobile.classList.toggle("grow");
            
            menuOn.classList.remove("visible_menu");
        });
    });

});
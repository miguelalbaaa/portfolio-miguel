

document.addEventListener("DOMContentLoaded", () => {
// MENÚ DE NAVEGACIÓN MÓVIL
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Cerrar el menú al seleccionar una sección
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.textContent = "☰";
        });
    });

    // Cerrar el menú si se vuelve a una pantalla grande
    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.textContent = "☰";
        }
    });
}

// ACTUALIZAR EL AÑO AUTOMÁTICAMENTE
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

console.log("Portafolio de Miguel Albarracín cargado correctamente.");


});

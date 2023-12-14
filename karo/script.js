
var navbar = document.getElementById("navbar");

// Obtén la posición inicial de la página
var prevScrollPos = window.pageYOffset;

// Función que se ejecuta al hacer scroll
window.onscroll = function () {
    // Obtén la posición actual de la página
    var currentScrollPos = window.pageYOffset;

    // Si la posición actual es mayor que la posición inicial, oculta la barra de navegación
    if (prevScrollPos < currentScrollPos) {
        navbar.style.top = "-80px";
    } else {
        // Si la posición actual es menor que la posición inicial, muestra la barra de navegación
        navbar.style.top = "0";
    }

    
    prevScrollPos = currentScrollPos;
};

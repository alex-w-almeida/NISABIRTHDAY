// ========================================
// APARICIÓN DE ELEMENTOS AL BAJAR
// ========================================

const elementos = document.querySelectorAll(
    ".story-item, .photo-placeholder, .reasons-list p, .birth-stars-photo"
);

function mostrarElementos() {

    elementos.forEach(function(elemento) {

        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 80) {
            elemento.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

// ========================================
// CORAZONES
// ========================================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.textContent = "♡";

    corazon.className = "floating-heart";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (15 + Math.random() * 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(function() {
        corazon.remove();
    }, 6000);

}

setInterval(crearCorazon, 2500);
// ========================================
// ABRIR LA CARTA
// ========================================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function() {

    envelope.classList.toggle("open");

});
let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "1",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: false
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        }
    }
});

// para dirigir a la pagina de favoritos
const urlf =`pag-favoritos.html`;
let botonFav = document.getElementById("boton-favoritos");
botonFav.addEventListener("click", function () {
    window.location.href=urlf
});

//realizar la busqueda
function buscar() {
    const input = document.getElementById('buscador');
    const query = input.value.toLowerCase();

    // Construir la URL con los parámetros de búsqueda
    const urlb = `pag-buscar.html?query=${encodeURIComponent(query)}`;

    // Redirigir a la página de resultados
    window.location.href = urlb;
}
document.getElementById('buscador').addEventListener('input', function () {
    if (this.value.startsWith(' ')) {
        this.value = this.value.trim(); // Eliminar espacios al principio
    }});

    // Evento para llamar a la función de búsqueda cuando se presiona el botón o la tecla Enter en el campo de búsqueda
    document.getElementById('boton-enviar').addEventListener('click', buscar);
    document.getElementById('buscador').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            buscar();
        }
    });
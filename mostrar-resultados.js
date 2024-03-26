const params = new URLSearchParams(window.location.search);
const query = params.get('query');

// Datos de ejemplo (pueden ser reemplazados con tu propio conjunto de datos)
const productos = [
    { nombre: "Ramo de rosas", precio: 1500, imagen: "images/rosas.jpg" },
    { nombre: "Ramo de 12 rosas amarillas", precio: 450, imagen: "images/rosas-amarillas.jpg" },
    { nombre: "Arreglo de girasoles", precio: 20, imagen: "images/girasoles.jpg" },
    { nombre: "Lirios blancos", precio: 18, imagen: "" },
    { nombre: "Tulipanes multicolores", precio: 25, imagen: "images/tulipanes.jpg" }
];
if (query !== '') {

    // filtrar los productos
    const resultados = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(query.toLowerCase());
    });

    // mostrar resultafos o mensaje de error
    const resultadosDiv = document.getElementById('resultados');
    if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        resultados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
            <p>Nombre: ${producto.nombre}</p>
            <p>Precio: ${producto.precio}mx</p>
            <img src="${producto.imagen}" alt="${producto.nombre}" width="250px" height="250px">
            `;
            resultadosDiv.appendChild(productoDiv);
        });
    }
} else {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '<p>No se proporcionó una consulta de búsqueda.</p>';
}

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
    }
});

// Evento para llamar a la función de búsqueda cuando se presiona el botón o la tecla Enter en el campo de búsqueda
document.getElementById('boton-enviar').addEventListener('click', buscar);
document.getElementById('buscador').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        buscar();
    }
});

const productosCarta = document.querySelectorAll(".carta-producto");

// Filtrar por nombre
const productosFiltrados = productosCarta.filter(producto => producto.querySelector("h3").textContent.includes("ramo"));

// Ordenar por precio
productosFiltrados.sort((a, b) => {
    const precioA = parseFloat(a.querySelector(".precio").textContent);
    const precioB = parseFloat(b.querySelector(".precio").textContent);
    return precioA - precioB;
});

// Mostrar las cartas ordenadas
productosFiltrados.forEach(producto => {
    document.querySelector(".contenedor-productos").appendChild(producto);
});
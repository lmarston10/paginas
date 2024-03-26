function copiarURL(url) {
    // Crear un elemento de texto temporal
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto en el portapapeles
    tempInput.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);

    // Mostrar un mensaje de éxito
    alert('URL de la imagen copiada al portapapeles');
}

// Función para agregar a favoritos
function agregarFavorito(nombreProducto) {
    // Aquí puedes agregar la lógica para agregar a favoritos
    // Por ejemplo, podrías almacenar el nombre del producto en el almacenamiento local del navegador
    let favoritos = localStorage.getItem('favoritos');
    if (!favoritos) {
        favoritos = [];
    } else {
        favoritos = JSON.parse(favoritos);
    }
    favoritos.push(nombreProducto);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Producto agregado a favoritos.');
    console.log('Agregado a favoritos:', nombreProducto);
}
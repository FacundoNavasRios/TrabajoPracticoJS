// Con la variable modoOscuro llamamos y declaramos la funcionalidad con la cual al hacerle click al boton con icono de nos permitira cambiar
// el background-color a oscuro y los textos, iconos y logos cambiaran su color a claro.

//Modo Oscuro

var modoOscuro = document.getElementById('dark-mode');
modoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



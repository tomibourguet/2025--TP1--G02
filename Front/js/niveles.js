function mostrarDificultad() {
    let nivel = parseInt(localStorage.getItem("nivel"));
    console.log(nivel);
    setDivDificultad(nivel)
}

mostrarDificultad()

// Redirigir según nivel al hacer click en CONTINUAR
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('continuarBtn');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      let nivel = parseInt(localStorage.getItem('nivel'));
      if (!nivel || nivel === 1) {
        window.location.href = 'jugadores.html?dificultad=facil';
      } else if (nivel === 2) {
        window.location.href = 'jugadores.html?dificultad=medio';
      } else if (nivel === 3) {
        window.location.href = 'jugadores.html?dificultad=dificil';
      } else if (nivel === 4) {
        window.location.href = 'jugadores.html?dificultad=extremo';
      }
    });
  }
});
//CAMBIAR LAS DIFICULTADES
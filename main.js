const fecha_cumpleaños = document.querySelector ('#fecha_cumpleaños')
const boton = document.querySelector ('#boton_cumple')
const resultado = document.querySelector ('#resultado')

function calcularEdad (fecha) {
  const fechaActual = moment ();
  const fecha_cumpleaños = moment (fecha,'YYYY-MM-DD')
  
  const edad = fechaActual.diff (fecha_cumpleaños,'years');

  return edad;
}

boton.addEventListener('click', ()=>{
  console.log(calcularEdad(fecha_cumpleaños.value));

  resultado.innerText = calcularEdad (fecha_cumpleaños.value);
});


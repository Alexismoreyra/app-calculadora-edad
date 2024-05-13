const fecha_cumpleaños = document.querySelector ('#fecha_cumpleaños')
const boton = document.querySelector ('#boton_cumple')
const resultado = document.querySelector ('#resultado')

boton.addEventListener('click', ()=>{
    console.log('TOCARON EL BOTON')
});

function saludar () {
    console.log ('SALUDANDO')
};

boton.addEventListener('click', ()=>{
  console.log(fecha_cumpleaños.value)
});

boton.addEventListener('click', ()=>{
  resultado.innerText = fecha_cumpleaños.value
});

//Funcion que en base a una fecha calcule la cantidad de años hasta el dia de hoy

function calcularEdad (fecha) {
  const fechaActual = moment ();
  const fecha_cumpleaños = moment (fecha,'YYYY-MM-DD')
  
  const edad = fechaActual.diff (fecha_cumpleaños,'years');

  return edad.add (100,'years');
}

boton.addEventListener('click', ()=>{
  console.log(calcularEdad(fecha_cumpleaños.value));

  resultado.innerText = calcularEdad (fecha_cumpleaños.value);
});


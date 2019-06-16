//  2. Hacer un programa para ingresar el radio de un circulo y se reporte su área
//   y la longitud de la circuferencia.
//   - r = radio
//   - área = pi * r^2
//   - longitud = 2 * pi * r 

//3.14
const pi = Math.PI

const calcularArea = pi => {
  let radio      = document.getElementById("radio").value
  let area       = pi * radio ** 2
  let resultArea = parseFloat(area).toFixed(2)
  let totalArea  = document.getElementById("area").innerHTML = `El área es: ${resultArea}`
  return parseFloat(totalArea)
}

const calcularLongitud = pi => {
  let radio          = document.getElementById("radio").value
  let longitud       = 2 * pi * radio
  let resultLongitud = parseFloat(longitud).toFixed(2)
  let totalLongitud  = document.getElementById("longitud").innerHTML = `La longitud es: ${resultLongitud}`
  return parseFloat(totalLongitud)
}

const calcularAL = () => {
  return calcularArea(pi), 
         calcularLongitud(pi)
}
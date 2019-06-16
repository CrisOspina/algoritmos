// 1.Calcular la cantidad de segundos que están incluidos en el número de horas,
//   minutos y segundos ingresados por el usuario.

const data = () => {
  let writeHour    = document.getElementsByTagName("input")[0].value,
      writeMinutes = document.getElementsByTagName("input")[1].value,
      writeSeconds = document.getElementsByTagName("input")[2].value

  let hour    = parseInt(writeHour) * 3600,
      minutes = parseInt(writeMinutes) * 60,
      seconds = parseInt(writeSeconds),
      result  = hour + minutes + seconds;

      return result
}

//Calcular segundos
const calcular = () => {
  return document.getElementById("resultado").innerHTML = `Los segundos totales son: ${data()} seg `
}

// 1 hora = 3600 segundos
// 1 minuto = 60 segundos
// Ejemplo = 3, 10, 15 = 11415

// Un maestro desea saber que porcentaje de hombres y que porcentaje de
//   mujeres hay en un grupo de estudiantes.

const calcularPorcentajes = () => {
  let mujeres = parseFloat(document.getElementById("mujeres").value)
  let hombres = parseFloat(document.getElementById("hombres").value)

  let sum = mujeres + hombres
  let portMujeres = parseFloat((mujeres / sum) * 100).toFixed(2)
  let portHombres = parseFloat((hombres / sum) * 100).toFixed(2)

  let total = document.getElementById("total").innerHTML = `Total: ${sum}`
  let tMujer  = document.getElementById("porcentajeM").innerHTML = `Porcentaje mujeres: ${portMujeres}%`
  let tHombre = document.getElementById("porcentajeH").innerHTML = `Porcentaje hombres: ${portHombres}%`

  return total, tMujer, tHombre
}
// Precio base de la cotización, en quetzales
var precio_base = 2000

// Valores de recargos por edad
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

// Valores de recargos por edad del cónyuge
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

// Recargo por hijos
var hijos_recargo = 0.2 // 20%

// Recargos extra solicitados
var recargo_propiedad = 0.35 // 35% por propiedad sobre la cotización
var recargo_salario = 0.05   // 5% sobre salario

while (true) {
  var entrada = prompt('Escriba "Salir" para terminar o presione Aceptar para hacer una cotización')

  if (entrada !== null && entrada.trim().toUpperCase() === "SALIR") {
    alert("Programa finalizado.")
    break
  }

  var recargo = 0
  var recargo_total = 0
  var precio_final = 0

  var nombre = prompt("Ingrese su nombre, por favor")
  if (nombre === null) break

  var edad = prompt("¿Cuántos años tiene? Ingrese solamente números")
  if (edad === null) break

  var edad_numero = parseInt(edad)

  if (isNaN(edad_numero) || edad_numero < 18) {
    alert("Edad inválida. Debe ser un número mayor o igual a 18.")
    continue
  }

  var casado = prompt("¿Está casado actualmente? (SI/NO)")
  if (casado === null) break

  var edad_conyuge_numero = 0
  if (casado.toUpperCase() === "SI") {
    var edad_conyuge = prompt("¿Qué edad tiene su esposo/a? Ingrese solamente números")
    if (edad_conyuge === null) break

    edad_conyuge_numero = parseInt(edad_conyuge)
    if (isNaN(edad_conyuge_numero) || edad_conyuge_numero < 18) {
      alert("Edad del cónyuge inválida.")
      continue
    }
  }

  var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)")
  if (hijos === null) break

  var cantidad_hijos = 0
  if (hijos.toUpperCase() === "SI") {
    var ch = prompt("¿Cuántos hijos o hijas tiene? Ingrese solamente números")
    if (ch === null) break

    cantidad_hijos = parseInt(ch)
    if (isNaN(cantidad_hijos) || cantidad_hijos < 0) {
      alert("Cantidad de hijos inválida.")
      continue
    }
  }

  var propiedades_txt = prompt("¿Cuántas propiedades tiene? Ingrese solamente números")
  if (propiedades_txt === null) break
  var propiedades = parseInt(propiedades_txt)
  if (isNaN(propiedades) || propiedades < 0) {
    alert("Cantidad de propiedades inválida.")
    continue
  }

  var salario_txt = prompt("¿Cuál es su salario mensual (Q)? Ingrese solamente números")
  if (salario_txt === null) break
  var salario = parseFloat(salario_txt)
  if (isNaN(salario) || salario < 0) {
    alert("Salario inválido.")
    continue
  }

  // 1) Recargo por edad del asegurado
  if (edad_numero >= 18 && edad_numero < 25) {
    recargo = precio_base * edad_18
    recargo_total += recargo
  } else if (edad_numero >= 25 && edad_numero < 50) {
    recargo = precio_base * edad_25
    recargo_total += recargo
  } else if (edad_numero >= 50) {
    recargo = precio_base * edad_50
    recargo_total += recargo
  }

  // 2) Recargo por edad del cónyuge
  if (casado.toUpperCase() === "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      recargo = precio_base * casado_18
      recargo_total += recargo
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo = precio_base * casado_25
      recargo_total += recargo
    } else if (edad_conyuge_numero >= 50) {
      recargo = precio_base * casado_50
      recargo_total += recargo
    }
  }

  // 3) Recargo por cantidad de hijos
  if (cantidad_hijos > 0) {
    recargo = precio_base * hijos_recargo * cantidad_hijos
    recargo_total += recargo
  }

  // 4) Recargo extra: 35% por propiedad sobre la cotización
  if (propiedades > 0) {
    recargo = precio_base * recargo_propiedad * propiedades
    recargo_total += recargo
  }

  // 5) Recargo extra: 5% sobre el salario del asegurado
  recargo_total += (salario * recargo_salario)

  precio_final = precio_base + recargo_total

  alert("Para el asegurado: " + nombre)
  alert("El recargo total será de: Q " + recargo_total.toFixed(2))
  alert("El precio final será de: Q " + precio_final.toFixed(2))
}

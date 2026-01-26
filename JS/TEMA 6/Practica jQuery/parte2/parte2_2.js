$(document).ready(function () {
  // Modificamos todos los elementos <h1>
  alert("Se modificarán todos los elementos <h1> con el texto 'Come aquí'.");
  $("h1").text("Come aquí");

  // Modificamos párrafos específicos por índice

  alert("Se modificará el primer párrafo (índice 0) a 'Frutas'.");
  $("p").eq(0).text("Frutas");

  alert("Se modificará el segundo párrafo (índice 1) a 'Vegetales'.");
  $("p").eq(1).text("Vegetales");

  alert("Se modificará el tercer párrafo (índice 2) a 'Pan'.");
  $("p").eq(2).text("Pan");

  // Modificamos elementos de la lista a partir del índice 3
  alert("Se modificarán los elementos de la lista a partir del índice 3.");
  $("li:gt(2)").text("superior");

  // Modificamos el valor del campo de texto
  alert("Se modificará el valor del input a 'Introduce texto'.");
  $("input").val("Introduce texto");

  // 5. Modificamos celdas de la tabla (pares e impares)
  alert("Se modificarán las celdas pares a '0' y las impares a '1'.");
  $("td:even").text("0");
  $("td:odd").text("1");

  // Cambiamos atributo href de los enlaces
  alert("Se cambiarán todos los enlaces para apuntar a Google.");
  $("[href]").attr("href", "http://www.google.com");

  // Cambiamos texto de elementos con clase "excerpt"
  alert("Se modificará el texto de los elementos con clase '.excerpt'.");
  $(".excerpt").text("Entrada");

  console.log("Ejecución del script selectores.js finalizada correctamente.");
});

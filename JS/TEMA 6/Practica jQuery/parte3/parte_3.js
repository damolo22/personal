$(document).ready(function () {
  // Ponemos borde a la tabla mediante el atributo border
  $("table").attr("border", "1");

  // Asignamos borde doble a las filas de encabezado superior
  $("tr:first").css("border", "5px double black");

  // Asignamos borde superior a las filas de encabezado inferior
  $("tr:last").css({
    "border-top": "3px solid black",
    "border-bottom": "none",
    "border-left": "none",
    "border-right": "none",
  });

  // Asignamos clase .rojo a celdas pares y .azul a impares
  $("td:even").addClass("rojo");
  $("td:odd").addClass("azul");

  // Asignamos clase .negrita a celdas de encabezado
  $("th").addClass("negrita");

  // Aumentamoa el alto de las celdas de encabezado
  $("th").css("height", "50px");

  // Ocultamos la fila 5
  $("tr").eq(4).hide();

  // Ponemos en amarillo las celdas con texto "Amarillo"

  $('td:contains("Amarillo")').css("background-color", "yellow");

  console.log("Modificaciones de tabla completadas.");
});

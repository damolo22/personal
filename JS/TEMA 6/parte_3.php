<?php
// comprobar.php - El servidor de La Casa

// 1. Recibimos la ciudad que manda el usuario (si no manda nada, cadena vacía)
$ciudadRecibida = $_GET['ciudad'] ?? '';

// 2. Base de datos de territorios conquistados (Array de PHP)
// Puedes añadir las ciudades que quieras aquí
$sedesVIP = [
    "Madrid",
    "Barcelona", 
    "Las Vegas", 
    "Monaco", 
    "Macao", 
    "Marbella", 
    "Ibiza",
    "Granada",
    "Dubai"
];

// 3. Lógica de comprobación
// Usamos 'strtolower' para que no importe si escriben "madrid" o "MaDrId"
// 'in_array' busca si la ciudad está en la lista
$existe = false;

// Recorremos el array para comparar ignorando mayúsculas
foreach ($sedesVIP as $sede) {
    if (strtolower($sede) === strtolower($ciudadRecibida)) {
        $existe = true;
        break;
    }
}

// 4. Respondemos al JS
// Solo imprimimos texto plano. Esto es lo que leerá 'xhr.responseText'
if ($existe) {
    echo "autorizado";
} else {
    echo "denegado";
}
?>
<?php

$ciudadRecibida = $_GET['ciudad'] ?? '';


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

$existe = false;

foreach ($sedesVIP as $sede) {
    if (strtolower($sede) === strtolower($ciudadRecibida)) {
        $existe = true;
        break;
    }
}

if ($existe) {
    echo "autorizado";
} else {
    echo "denegado";
}
?>
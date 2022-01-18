<?php
include 'tools.php';
$c = new tools;

if($c->ejecutarComando("INSERT INTO puntuacion (email, nick, puntos) VALUES('user822@gmail.com', 'UserNED', '50000')")){
    echo "Todo se guardó correctamente";
} else {
    echo "Upps parece que hay errores.";
}


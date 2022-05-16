<?php
$destinatario = 'rodripertuso@hotmail.com';
// correo que recibira los datos
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$numero = $_POST['numero'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde la pagina de Estudio Juridico";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $asunto, $mensajeCompleto, $header);
?>
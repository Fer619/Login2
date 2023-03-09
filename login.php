<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $captcha = $_POST['captcha'];

  // Validar el captcha
  if ($_SESSION['captcha'] != $captcha) {
    $error = "El código captcha es incorrecto";
  }

  // Validar el correo electrónico y la contraseña
  if ($email == 'correo@example.com' && $password == 'contraseña123') {
    // Iniciar sesión
    $_SESSION['email'] = $email;
    header('Location: perfil.php');
    exit();
  } else {
    $error = "El correo electrónico o la contraseña son incorrectos";
  }
}
?>

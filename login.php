<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Verificar si el captcha ya ha sido completado
	if (isset($_SESSION["captcha_completed"]) && $_

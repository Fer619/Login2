var loginForm = document.getElementById("login-form");
var captchaDiv = document.getElementById("captcha");

loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	
	grecaptcha.execute();
});

function onReCaptchaSuccess(token) {
	// Enviar el token de reCAPTCHA al servidor para validar
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "validate-recaptcha.php");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				if (response.success) {
					captchaDiv.style.display = "block";
					grecaptcha.reset();
				} else {
					alert("Por favor, complete la verificación reCAPTCHA.");
				}
			} else {
				alert("Ha ocurrido un error al verificar la reCAPTCHA.");
			}
		}
	};
	xhr.send("token=" + token);
}

var captchaButton = document.getElementById("captcha-button");

captchaButton.addEventListener("click", function(event) {
	event.preventDefault();
	
	var captchaText = document.getElementById("captcha-text").value;
	
	// Enviar el texto del captcha al servidor para validar
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "validate-captcha.php");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				if (response.success) {
					window.location.href = "perfil.php";
				} else {
					alert("El texto ingresado no coincide con la imagen.");
				}
			} else {
				alert("Ha ocurrido un error al validar el captcha.");
			}
		}
	};
	xhr.send("captcha-text=" + captchaText);
});

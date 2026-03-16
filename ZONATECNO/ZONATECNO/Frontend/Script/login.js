const apiUrl = "https://localhost:44320/api/usuario";



// Función para manejar el evento del botón de inicio de sesión
function handleLoginButtonClick(event) {
    event.preventDefault(); // Evita que el formulario se envíe a través de una solicitud HTTP
    login();
}

// Asignar el evento submit al formulario
var loginForm = document.getElementById("formlogin");
if (loginForm) {
    loginForm.addEventListener("submit", handleLoginButtonClick);
}


function login() {
    var nombre = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    
    fetch(apiUrl, { mode: 'cors' })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error al obtener los usuarios.");
            }
        })
        .then(function(data) {
            var userFound = data.find(function(usuario) {
                return usuario.nombre === nombre && usuario.clave === clave;
            });

            if (userFound) {
                window.location.href = "home_admin.html";
            } else {
                alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
                document.getElementById("usuario").value = "";
                document.getElementById("clave").value = "";
            }
        })
        .catch(function(error) {
            console.error(error);
        });
}






function addToCart(button) {
    const productDiv = button.parentNode;
    const productName = productDiv.querySelector("h3").textContent;
    const productDescription = productDiv.querySelector("p.pc1").textContent;
    const productPrice = parseFloat(productDiv.querySelector("p.price").textContent.replace("₡", "").replace(",", "")); // Convertir el precio a número

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: productName, description: productDescription, price: productPrice });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(productName + " agregado al carrito.");
}



// Función para mostrar el contenido del carrito en la página "cart.html"
function showCartItems() {
    var cartTableBody = document.getElementById('cart-items');
    var totalElement = document.getElementById('total');
    var total = 0;

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartTableBody.innerHTML = ''; // Limpiar la tabla antes de mostrar los datos

    cartItems.forEach(function (item) {
        var row = document.createElement('tr');
        var productNameCell = document.createElement('td');
        var priceCell = document.createElement('td');

        productNameCell.textContent = item.name;
        priceCell.textContent = '$' + item.price;

        row.appendChild(productNameCell);
        row.appendChild(priceCell);
        cartTableBody.appendChild(row);

        total += item.price;
    });

    totalElement.textContent = '$' + total;
}

function actualizarFecha() {
    // Obtener el elemento <p> por su id
    const dateElement = document.getElementById("date");
  
    // Obtener la fecha actual
    const currentDate = new Date();
  
    // Definir los meses en un arreglo para mostrar el nombre del mes
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    // Construir la cadena de la fecha en el formato deseado
    const fechaActualizada = `Fecha: ${currentDate.getDate()} de ${meses[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;
  
    // Actualizar el contenido del elemento <p> con la fecha actualizada
    dateElement.textContent = fechaActualizada;
  }

// Mostrar el contenido del carrito al cargar la página
showCartItems();
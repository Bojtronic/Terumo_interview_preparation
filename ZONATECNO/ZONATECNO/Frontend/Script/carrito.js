const apiUrl_clientes = "https://localhost:44320/api/cliente";
const apiUrl_facturas = "https://localhost:44320/api/factura";
const apiUrl_factura_producto = "https://localhost:44320/api/factura_producto";

function createCliente(retira, direccion) {
    
    const newCliente = {
        retira: retira,
        direccion: direccion
    };

    fetch(apiUrl_clientes, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCliente),
        mode: 'cors'
    })
    .then(function(response) {
        if (response.ok) {
            console.log("Cliente creado exitosamente.");
            
        } else {
            throw new Error("Error al crear el cliente.");
        }
    })
    .catch(function(error) {
        console.error(error);
    });
}




function createFactura(idCliente, fecha) {
    
    const newFactura = {
        id_cliente: idCliente,
        fecha: fecha
    };

    fetch(apiUrl_facturas, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFactura),
        mode: 'cors'
    })
    .then(function(response) {
        if (response.ok) {
            console.log("Factura creada exitosamente.");
            
        } else {
            throw new Error("Error al crear la factura.");
        }
    })
    .catch(function(error) {
        console.error(error);
    });
}

function createFacturaProducto(idFactura, idProducto, cantidad) {
   
    const newRegistro = {
        id_factura: idFactura,
        id_producto: idProducto,
        cantidad: cantidad
    };

    fetch(apiUrl_factura_producto, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRegistro),
        mode: 'cors'
    })
    .then(function(response) {
        if (response.ok) {
            console.log("Registro de FACTURA_PRODUCTO creado exitosamente.");
           
        } else {
            throw new Error("Error al crear el registro de FACTURA_PRODUCTO.");
        }
    })
    .catch(function(error) {
        console.error(error);
    });
}

function openModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'flex';
}



function validateNameInput() {
    const nombreInput = document.getElementById('nombreInput');
    const inputValue = nombreInput.value;
    
    if (/[^a-zA-Z\s]/.test(inputValue)) {
        nombreInput.setCustomValidity('Este campo solo puede contener letras y espacios.');
    } else {
        nombreInput.setCustomValidity('');
    }
}



function showPurchaseDetails() {
    const nombreInput = document.getElementById('nombreInput').value;
    const direccionInput = document.getElementById('direccionInput').value;
    const totalElement = document.querySelector('#totalPrice');
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (!nombreInput || !direccionInput || !storedCartItems || storedCartItems.length === 0) {
        alert('No se puede realizar la compra porque faltan datos.');
        return;
    }

    createCliente(nombreInput, direccionInput);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();



    // Mostrar el mensaje de compra realizada
    const modalDetails = document.getElementById('modalDetails');
    modalDetails.innerHTML = `
        Fecha: ${formattedDate}<br>
        Nombre: ${nombreInput}<br>
        Dirección: ${direccionInput}<br>
        Total a pagar: ${totalElement.textContent}
    `;

    openModal();
    clearCart(); // Limpiar el carrito después de la compra
}





function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'none';
    clearCart();
}

function clearCart() {
    localStorage.removeItem('cartItems');
    const tableBody = document.querySelector('#cart-table');
    tableBody.innerHTML = '';

    const totalElement = document.querySelector('#totalPrice');
    totalElement.textContent = '0';

    const nombreInput = document.getElementById('nombreInput');
    const direccionInput = document.getElementById('direccionInput');
    nombreInput.value = '';
    direccionInput.value = '';
}



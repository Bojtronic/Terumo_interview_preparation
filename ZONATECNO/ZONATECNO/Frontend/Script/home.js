const apiUrl = "https://localhost:44320/api/producto";

        function displayProductos() {
            fetch(apiUrl, { mode: 'cors' })
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Error al obtener los productos.");
                    }
                })
                .then(function(data) {
                    const productosContainer = document.getElementById("productosContainer");
                    productosContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar los productos

                    data.forEach(function (producto) {
                        const productDiv = document.createElement("div");
                        productDiv.classList.add("product");

                        const img = document.createElement("img");
                        const nombreProducto = producto.nombre.toLowerCase();

                        let rutaImagen = "C:\\Users\\Bojtronic\\Documents\\TRABAJO\\Maria Fonseca\\ZONATECNO\\Frontend\\Images\\";
                        // Asignar la URL de la imagen según el nombre del producto
                        if (nombreProducto === "celular") {
                            img.src = rutaImagen+"celular.jpg";
                        } else if (nombreProducto === "tv") {
                            img.src = rutaImagen+"tv.png";
                        } else if (nombreProducto === "laptop") {
                            img.src = rutaImagen+"laptop.jpg";
                        } else if (nombreProducto === "tablet") {
                            img.src = rutaImagen+"tablet.jpg";
                        } else if (nombreProducto === "cpu") {
                            img.src = rutaImagen+"cpu.jpg";
                        } else if (nombreProducto === "case") {
                            img.src = rutaImagen+"case.jpg";
                        }
                        else{
                            img.src = rutaImagen+"producto_generico.png";
                        }

                       
                        const h3 = document.createElement("h3");
                        h3.textContent = producto.nombre;

                        const pDesc = document.createElement("p");
                        pDesc.textContent = producto.descripcion;

                        const pPrice = document.createElement("p");
                        pPrice.textContent = `₡${producto.precio.toFixed(2)}`;

                        const addButton = document.createElement("button");
                        addButton.textContent = "Agregar al carrito";
                        addButton.onclick = function() {
                            addToCart(producto.nombre, producto.precio);
                        };

                        productDiv.appendChild(img);
                        productDiv.appendChild(h3);
                        productDiv.appendChild(pDesc);
                        productDiv.appendChild(pPrice);
                        productDiv.appendChild(addButton);

                        productosContainer.appendChild(productDiv);
                    });
                })
                .catch(function(error) {
                    console.error(error);
                });
        }

        // Llama a la función para mostrar los productos al cargar la página
        displayProductos();

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        function addToCart(productName, price) {
            cartItems.push({ name: productName, price: price });

            // Almacenar en el Local Storage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert(productName + " agregado al carrito.");
        }
    
        function showCart() {
            if (cartItems.length === 0) {
                alert("El carrito está vacío.");
            } else {
                let cartContent = "Productos en el carrito:\n";
                let totalPrice = 0; // Inicializamos el total en 0
    
                for (let item of cartItems) {
                    cartContent += "- " + item.name + " - Precio: $" + item.price + "\n";
                    totalPrice += item.price; // Sumamos el precio del producto al total
                }
    
                cartContent += "Total: $" + totalPrice; // Mostramos el total al final
                alert(cartContent);
            }
        }
        

        function searchProduct() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            const searchResultsContainer = document.getElementById('searchResults');
        
            // Limpia el contenedor de resultados
            searchResultsContainer.innerHTML = '';

            if (searchInput.trim() === '') {
                return;
            }
        
            fetch(apiUrl, { mode: 'cors' })
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Error al obtener los productos.");
                    }
                })
                .then(function(data) {
                    const filteredProducts = data.filter(producto => producto.nombre.toLowerCase().includes(searchInput));
        
                    if (filteredProducts.length > 0) {
                        const productoEncontrado = filteredProducts[0]; // Obtén el primer producto encontrado
        
                        const productDiv = document.createElement('div');
                        productDiv.classList.add('product');
        
                        const img = document.createElement('img');
                        const nombreProducto = productoEncontrado.nombre.toLowerCase();
        
                        let rutaImagen = "C:\\Users\\Bojtronic\\Documents\\TRABAJO\\Maria Fonseca\\ZONATECNO\\Frontend\\Images\\";
                        // Asignar la URL de la imagen según el nombre del producto
                        if (nombreProducto === "celular") {
                            img.src = rutaImagen + "celular.jpg";
                        } else if (nombreProducto === "tv") {
                            img.src = rutaImagen + "tv.png";
                        } else if (nombreProducto === "laptop") {
                            img.src = rutaImagen + "laptop.jpg";
                        } else if (nombreProducto === "tablet") {
                            img.src = rutaImagen + "tablet.jpg";
                        } else if (nombreProducto === "cpu") {
                            img.src = rutaImagen + "cpu.jpg";
                        } else if (nombreProducto === "case") {
                            img.src = rutaImagen + "case.jpg";
                        } else {
                            img.src = rutaImagen + "producto_generico.png";
                        }
        
                        const h3 = document.createElement('h3');
                        h3.textContent = productoEncontrado.nombre;
        
                        const pDesc = document.createElement('p');
                        pDesc.textContent = productoEncontrado.descripcion;
        
                        const pPrice = document.createElement('p');
                        pPrice.textContent = `₡${productoEncontrado.precio.toFixed(2)}`;
        
                        const addButton = document.createElement('button');
                        addButton.textContent = 'Agregar al carrito';
                        addButton.onclick = function() {
                            addToCart(productoEncontrado.nombre, productoEncontrado.precio);
                        };
        
                        productDiv.appendChild(img);
                        productDiv.appendChild(h3);
                        productDiv.appendChild(pDesc);
                        productDiv.appendChild(pPrice);
                        productDiv.appendChild(addButton);
        
                        searchResultsContainer.appendChild(productDiv);
                    } else {
                        const noResultsMessage = document.createElement('p');
                        noResultsMessage.textContent = 'No se encontraron productos con ese nombre.';
                        searchResultsContainer.appendChild(noResultsMessage);
                    }
                })
                .catch(function(error) {
                    console.error(error);
                });
        }
        
        


        
// Variable para almacenar los datos del carrito
var carrito = [];

/* Función para calcular el total y agregar al carrito*/
function calcularTotal() {
  // Obtener el producto seleccionado del elemento con id "producto" en el documento HTML
  var productoSeleccionado = document.getElementById("producto").value;
  // Obtener el precio del producto seleccionado
  var precio = obtenerPrecio(productoSeleccionado);

  // Preguntar al usuario la cantidad de productos que desea agregar al carrito
  var cantidad = prompt("Ingrese la cantidad:", "1");
  cantidad = parseInt(cantidad);

  // Validar si la cantidad ingresada es válida, si no, se establece 1 por defecto
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida. Seleccionando 1 por defecto.");
    cantidad = 1;
  }

  // Calcular el total de la compra
  var total = precio * cantidad;

  // Agregar el producto con su cantidad y total al carrito
  carrito.push({ producto: productoSeleccionado, cantidad: cantidad, total: total });

  // Mostrar un mensaje al usuario con la información de la compra
  alert(`Se agregaron ${cantidad} ${productoSeleccionado} al carrito. Total a pagar: $${total}`);
}

/**
 * Función para ver el contenido actual del carrito
 */
function verCarrito() {
  // Construir un mensaje con los detalles de los productos en el carrito
  var mensaje = "Carrito:\n";

  carrito.forEach(function (item) {
    mensaje += `${item.cantidad} ${item.producto}(s) - $${item.total}\n`;
  });

  // Calcular el total a pagar sumando los totales de cada producto en el carrito
  var totalCarrito = carrito.reduce(function (sum, item) {
    return sum + item.total;
  }, 0);

  // Agregar el total a pagar al mensaje
  mensaje += `Total a pagar: $${totalCarrito}`;

  // Mostrar el mensaje al usuario
  alert(mensaje);
}

/**
 * Función para finalizar la compra
 */
function finalizarCompra() {
  // Mostrar un agradecimiento por la compra
  alert("Gracias por su compra en la FERRETERIA ESTEBAN");
  // Mostrar el detalle del carrito en el documento HTML
  mostrarDetalleCarrito();
  // Limpiar el carrito después de la compra
  carrito = [];
}

/**
 * Función para mostrar el detalle del carrito en el documento HTML
 */
function mostrarDetalleCarrito() {
  // Obtener el elemento con id "carrito" en el documento HTML
  var detalleCarrito = document.getElementById("carrito");
  // Establecer el encabezado del detalle del carrito
  detalleCarrito.innerHTML = "<h2>Detalle del Carrito</h2>";

  // Crear un párrafo para cada producto en el carrito y agregarlo al detalle del carrito
  carrito.forEach(function (item) {
    var detalle = document.createElement("p");
    detalle.textContent = `${item.cantidad} ${item.producto} = $${item.total}`;
    detalleCarrito.appendChild(detalle);
  });

  // Calcular el total a pagar sumando los totales de cada producto en el carrito
  var totalCarrito = carrito.reduce(function (sum, item) {
    return sum + item.total;
  }, 0);

  // Crear un párrafo para mostrar el total a pagar y agregarlo al detalle del carrito
  var totalElement = document.createElement("p");
  totalElement.textContent = `Total a pagar: $${totalCarrito}`;
  detalleCarrito.appendChild(totalElement);
}

/*
 * Función para obtener el precio del producto seleccionado*/
function obtenerPrecio(producto) {
  // Utilizar un switch para asignar el precio del producto seleccionado
  switch (producto) {
    case "martillo":
      return 15000;
    case "destornillador":
      return 8000;
    case "sierra":
      return 25000;
    case "puntillas":
      return 500;
    case "serrucho":
      return 30000;
    default:
      console.error("Producto no reconocido");
      return 0;
  }
}

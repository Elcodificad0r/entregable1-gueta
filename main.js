// 1. Declaramos constantes, variables y array de productos
const PRODUCTOS = [
    { 
        nombre: "La Sportiva Solution", 
        precio: 120, 
        tipo: "Boulder", 
        talla: [38, 39, 40, 41, 42] 
    },
    { 
        nombre: "Scarpa Instinct VS", 
        precio: 150, 
        tipo: "Deportivo", 
        talla: [37, 38, 39, 40, 41] 
    },
    { 
        nombre: "Five Ten Anasazi", 
        precio: 100, 
        tipo: "Trad", 
        talla: [38, 39, 40, 41, 42] 
    },
    { 
        nombre: "Evolv Shaman", 
        precio: 130, 
        tipo: "Boulder", 
        talla: [39, 40, 41, 42, 43] 
    },
    { 
        nombre: "Butora Acro", 
        precio: 110, 
        tipo: "Deportivo", 
        talla: [37, 38, 39, 40, 41] 
    }
];
let carrito = [];

// 2. Función para mostrar el listado de productos
function mostrarProductos() {
    let mensaje = "Productos de Climbing Shoes:\n\n";
    PRODUCTOS.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - Tipo: ${producto.tipo} - Precio: $${producto.precio}\n`;
    });
    mensaje += "\nSeleccione el número del producto que desea agregar al carrito.";
    return mensaje;
}

// 3. Función para seleccionar un producto y añadirlo al carrito
function seleccionarProducto() {
    let productoSeleccionado = prompt(mostrarProductos());

    if (productoSeleccionado < 1 || productoSeleccionado > PRODUCTOS.length) {
        alert("Selección inválida. Intenta de nuevo.");
        return;
    }

    const producto = PRODUCTOS[productoSeleccionado - 1];
    let detalles = `Seleccionaste: ${producto.nombre}\nPrecio: $${producto.precio}\nTipo: ${producto.tipo}\n`;
    detalles += "Tallas disponibles: " + producto.talla.join(", ");
    
    alert(detalles);

    // Confirmar agregar al carrito
    if (confirm(`¿Quieres añadir ${producto.nombre} a tu carrito?`)) {
        let tallaElegida = prompt(`¿Qué talla deseas? (Opciones: ${producto.talla.join(", ")})`);
        
        if (producto.talla.includes(parseInt(tallaElegida))) {
            carrito.push({ nombre: producto.nombre, precio: producto.precio, talla: tallaElegida });
            alert(`¡${producto.nombre} en talla ${tallaElegida} añadido al carrito!`);
        } else {
            alert("Talla no disponible.");
        }
    }
}

// 4. Función para ver el carrito de compras
function verCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        let mensajeCarrito = "Tu carrito de compras:\n\n";
        let total = 0;

    } 
} 

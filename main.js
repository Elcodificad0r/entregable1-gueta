// Simulador de tienda 
// Agregar productos y sus propiedades
// Generar alertas y prompts 1.- bienvenida  2.- vean el catalogo de productos, 3.- agregar los productos seleccionados a un carrito de compras , 4.- ver los articulos seleccionados en el carrito de compras con precio y precio total, 5.- editar carrito de compras y 6.- finalizar compra con agradecimiento 7.-reinicio

const products = [
    { 
        name: "La Sportiva Solution", 
        price: 120, 
        type: "Boulder",  
    },
    { 
        name: "Scarpa Instinct VS", 
        price: 150, 
        type: "Deportivo",  
    },
    { 
        name: "Five Ten Anasazi", 
        price: 100, 
        type: "Trad", 
    },
    { 
        name: "Evolv Shaman", 
        price: 130, 
        type: "Boulder", 
    },
    { 
        name: "Butora Acro", 
        price: 110, 
        type: "Deportivo", 
    }
];

let carrito = []


function showProducts() {
    let message = "Productos de Climbing Shoes:\n\n";
    products.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Tipo: ${product.type} - Precio: $${product.price}\n`;
    });
    message += "\n Para agregar sus productos al carrito regrese al menú principal y seleccione opción 2.";
    alert(message);
}

// seleccionar producto
function productSelection (){
    let userSelection = Number(prompt ("elige el numero" ))
    console.log(userSelection)
    carrito.push(products[userSelection - 1])
    console.table(carrito)
    return userSelection;


}
//     if (userSelection > 0 && userSelection <= products.length) {
//         let selectedProduct = products[userSelection - 1];
//         alert(`Has seleccionado: ${selectedProduct.name} - Tipo: ${selectedProduct.type} - Precio: $${selectedProduct.price}`);
//         // Aquí podrías agregar el producto al carrito, si existe una estructura de carrito
//     } else {
//         alert("Selección no válida, intenta nuevamente.");
//     }
// }

function showCarrito() {
    let message = "Productos de Climbing Shoes:\n\n";
    carrito.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Tipo: ${product.type} - Precio: $${product.price}\n`;
    });
    message += "\n Esta es tu selección actual";
    alert(message);
}

function editCarrito () {
    let message = "Carrito, Indique con un número el artículo que desea eliminar:\n\n";
    carrito.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Tipo: ${product.type} - Precio: $${product.price}\n`;
    });
    message += "\n Esta es tu selección actual";
    let userErase = Number(prompt(message));
    carrito.splice(userErase - 1,1)
    console.table(carrito)
    return userErase;
}
 
function checkout(){
    let priceTotal = 0
    let message = "Carrito:\n\n";
    carrito.forEach((product) => {
        // message += `${index + 1}. ${product.name} - Tipo: ${product.type} - Precio: $${product.price}\n`;
        priceTotal += product.price
    });


    let userCheckout = confirm(message + "Este es su total: " + priceTotal + " ¿desea finalizar con su compra?");
    if (userCheckout == true) {
        carrito.length = 0
        alert("Gracias por su compra")
    }
    console.log(priceTotal)
    console.log(carrito)
    return userCheckout;
}

function initFunction() {
    let flag = true
    let option = Number(prompt("Bienvenido a la tienda de Climbing Shoes, seleccione la opción deseada:\n 1.-Ver catálogo\n 2.-Agregar productos \n 3.-ver Carrito de compras\n 4.-Editar carrito de compras\n 5.-Finalizar compra ")) 
        while (flag == true) {
            switch (option) {
                case 1:
                    showProducts();
                    flag = confirm("¿Quieres seguir operando?")
                break;
                case 2:
                    productSelection();
                    flag = confirm("¿Quieres seguir operando?")
                break; 
                case 3:
                    showCarrito();
                    flag = confirm("¿Quieres seguir operando?")
                break;
                case 4:
                    editCarrito();
                    flag = confirm("¿Quieres seguir operando?")
                break;
                    
                case 5:
                    checkout();
                    flag = confirm("¿Quieres seguir operando?")
                break;
                default:
                    alert("No existe esta opción")
                    flag = confirm("¿Quieres seguir operando?")
                break;
            }
            if(flag == true){
                option = Number(prompt("Bienvenido a la tienda de Climbing Shoes, seleccione la opción deseada:\n 1.-Ver catálogo\n 2.-Agregar productos \n 3.-ver Carrito de compras\n 4.-Editar carrito de compras\n 5.-Finalizar compra ")) 
            }
            
        }
}

initFunction()
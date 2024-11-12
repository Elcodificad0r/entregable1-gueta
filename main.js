// Simulador de tienda 
// Agregar productos y sus propiedades
// Generar alertas y prompts 1.- bienvenida  2.- vean el catalogo de productos, 3.- agregar los productos seleccionados a un carrito de compras , 4.- ver los articulos seleccionados en el carrito de compras con precio y precio total, 5.- editar carrito de compras y 6.- finalizar compra con agradecimiento 7.-reinicio

const products = [
    { 
        name: "La Sportiva Solution", 
        price: 120, 
        type: "Boulder", 
        size: [38, 39, 40, 41, 42] 
    },
    { 
        name: "Scarpa Instinct VS", 
        price: 150, 
        type: "Deportivo", 
        size: [37, 38, 39, 40, 41] 
    },
    { 
        name: "Five Ten Anasazi", 
        price: 100, 
        type: "Trad", 
        size: [38, 39, 40, 41, 42] 
    },
    { 
        name: "Evolv Shaman", 
        price: 130, 
        type: "Boulder", 
        size: [39, 40, 41, 42, 43] 
    },
    { 
        name: "Butora Acro", 
        price: 110, 
        type: "Deportivo", 
        size: [37, 38, 39, 40, 41] 
    }
];

function showProducts() {
    let message = "Productos de Climbing Shoes:\n\n";
    products.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Tipo: ${product.type} - Precio: $${product.price}\n`;
    });
    message += "\n Para agregar sus productos al carrito regrese al menú principal y seleccione opción 2.";
    alert(message);

}

function initFunction() {
    let flag = true
    let option = Number(prompt("Bienvenido a la tienda de Climbing Shoes, seleccione la opción deseada:\n 1.-Ver catálogo\n 2.-Agregar productos \n 3.-ver Carrito de compras\n 4.-Editar carrito de compras\n 5.-Finalizar compra ")) 
        while (flag == true) {
            switch (option) {
                case 1:
                    // alert("Productos de Climbing Shoes:\n"+ products)
                    showProducts();
                    flag = confirm("¿Quieres seguir operando?")
                break;
                case 2:
                    flag = confirm("¿Quieres seguir operando?")
                break;
                case 3:
                    flag = confirm("¿Quieres seguir operando?")
                break;
                case 4:
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

const Libro = function(nombre, precio, stock){
    this.nombre= nombre
    this.precio = precio
    this.stock = stock
}
let producto1  = new Libro("Game of thrones", 5000,20)
let producto2  = new Libro("Harry potter",65000,2)
let producto3  = new Libro("Star wars",850000,35)
let producto4  = new Libro("India Blancas",195000,98)
let producto5  = new Libro("Como agua para chocolate",750000,23)
let producto6  = new Libro("Principito",950000,65)
let producto7  = new Libro("Indiana Jones",785000,14)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7]
menu()
function menu(){
    let opcion = parseInt(prompt("1 - Agregar producto / 2 - Mostrar productos / 3 - Buscar producto / 4 - Salir"))
    switch(opcion){
        case 1:
            agregarProducto()
            break
        case 2:
            mostrarProductos()
            break
        case 3:
            buscarProducto()
            break
        case 4:
            salir()
            break
    }

}
function mostrarProductos(){
    console.table(lista)
}
function salir(){
    alert("adios")
}
function buscarProducto(){
    let datoIncertado = prompt("ingresa el dato a buscar")
    let resultado = lista.filter((x) => x.nombre.toUpperCase().includes(datoIncertado.toUpperCase()))

    if (resultado.length > 0){
        console.table(resultado)
        
    }else{
        alert("no se encontro el producto")
    }
}
function agregarProducto(){
let nombre= prompt("ingresa el nombre del producto")
let precio = prompt("ingresa el precio del producto")
let stock = prompt("ingresa el stock del producto")

if(isNaN(precio) || isNaN(stock) || nombre == ""){
    alert("por favor ingrese valores validos")
    return
}
let producto = new Libro(nombre,precio,stock)
lista.push(producto)
console.table(lista)
}
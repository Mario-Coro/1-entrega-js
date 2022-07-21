function loguearcliente () {
let cliente = prompt ("Bienvenido a nuestra tienda, Por favor ingrese su nombrey apellido")
console.log(cliente)
let existe = clientes.find((busqueda) => {
return busqueda === cliente})
if (existe){
    alert("Bienvenido"  + " "+  existe)
}
else {
    alert("No estas registrado, registrate y vuelve")
}
}

const clientes = ["Mario Coronado", "Post Malone", "Dua Lipa", "Santiago Heria", "Lionel Messi"]

class Discos {
    constructor(nombre, año, artista, precio) {
        this.nombre = nombre;
        this.año = año;
        this.artista = artista;
        this.precio = precio
    }
}

let disco1 = new Discos ("Harry's house", 2022, "Harry Styles", 10000);
let disco2 = new Discos ("Folklore", 2020, "Taylor Swift", 8000)
let disco3 = new Discos ("Equals", 2021, "Ed sheeran", 9000)

function agregarAlCarrito(){
let productoSelect = prompt ("Que disco le gustaria comprar, 1: Harry's house, 2: Folklore, 3: Equals, 4:Salir")
 console.log (productoSelect)
 if (productoSelect == 1){
carrito.push(disco1)
}
  if (productoSelect == 2){
    carrito.push(disco2)
    }
      if (productoSelect == 3){
        carrito.push(disco3)
        }
}

const carrito = [] 
loguearcliente();
agregarAlCarrito();
console.log(carrito)
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



const carrito = [] 

const sendinfo= () => {
  carrito.push(disco1)}

  const sendinfoT= () => {
    carrito.push(disco2)}

    const sendinfoF= () => {
      carrito.push(disco3)}

const input = document.getElementById("send")
input.addEventListener("click", sendinfo)

const inputT = document.getElementById("sendT")
input.addEventListener("click", sendinfoT)

const inputF = document.getElementById("sendF")
input.addEventListener("click", sendinfoF)

console.log(carrito)

loguearcliente();


stockProductos = [
    {id:1, nombre:"Harry's House", precio:3500, img: 'images/harryHouse.jpeg'},
    {id:2, nombre:"Sour", precio:2600, img: 'images/sour.png'},
    {id:3, nombre:"Folklore", precio:2500, img: 'images/folklore.jfif'},
    {id:4, nombre:"Equals", precio:3200, img: 'images/equals.jpg'}
]
let carrito = [] 

const contenedorProductos = document.getElementById("contenedor-productos")
stockProductos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('div-image')
    div.innerHTML = `
    <img src=${producto.img} alt= "" 
    <br>
    <p>${producto.nombre}</p>
    <p>${producto.precio}</p>
    <button id='agregar${producto.id}'>Agregar al carrito</button>
    `

contenedorProductos.appendChild(div)
const boton = document.getElementById (`agregar${producto.id}`)
boton.addEventListener('click', ()=>{
    agregarCarrito(producto.id)
})
})

const agregarCarrito = (prodId) =>{
    const item= stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    document.getElementById("cart-total").innerHTML= carrito.length;
    localStorage.setItem("totalCarrito", carrito.length)

    console.log(carrito)
}
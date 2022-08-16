stockProductos = [
    {id:1, nombre:"Harry's House", precio:3500, img: 'images/harryHouse.jpeg'},
    {id:2, nombre:"Sour", precio:2600, img: 'images/sour.png'},
    {id:3, nombre:"Folklore", precio:2500, img: 'images/folklore.jfif'},
    {id:4, nombre:"Equals", precio:3200, img: 'images/equals.jpg'}
]
let carrito =JSON.parse(localStorage.getItem("cart")) || []
document.getElementById("cart-total").innerHTML= carrito.length;

const contenedorProductos = document.getElementById("contenedor-productos")
stockProductos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('div-image')
    div.innerHTML = `
    <img src=${producto.img} alt= "" 
    <br>
    <p class="title">${producto.nombre}</p>
    <p class="price">${producto.precio}</p>
    <button class="add" id='agregar${producto.id}'>Agregar al carrito</button>
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
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'SE AGREGO CON EXITO',
        showConfirmButton: false,
        timer: 1500,
        width: "400px"
      })
    document.getElementById("cart-total").innerHTML= carrito.length;
    localStorage.setItem("cart", JSON.stringify(carrito))
}
 

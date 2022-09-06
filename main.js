const metodofetch = ()=>{
    fetch('productos.json')
    .then((respose) => respose.json())
    .then((informacion)=>{
    informacion.forEach((producto)=>{
    const div = document.createElement('div')
    div.classList.add('div-image')
    div.innerHTML = `
    <img src=${producto.img} alt= ""> 
    <br>
    <p class="title">${producto.nombre}</p>
    <p class="price">${producto.precio}</p>
    <button class="add" id='agregar${producto.id}'>Agregar al carrito</button>`
    contenedorProductos.appendChild(div)
    const boton = document.getElementById (`agregar${producto.id}`)
    boton.addEventListener('click', ()=>{ agregarCarrito(producto.id)})
   
})
 })
}

metodofetch()
let carrito = JSON.parse(localStorage.getItem("cart")) || []
const elementosCarrito = document.getElementById("cardsModal")
 actualizarCarrito()
const contenedorProductos = document.getElementById("contenedor-productos")

    const agregarCarrito = (Id) =>{
    if(carrito.some((item)=> item.id === Id)){
    cambiarNumeroDeUnidades("suma", Id)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'SE AGREGO OTRA UNIDAD',
        showConfirmButton: false,
        timer: 1000,
        width: "400px"
      })
      actualizarCarrito()
    }
   else{
        fetch('productos.json')
        .then((respose) => respose.json())
        .then((informacion)=>{
        const item= informacion.find ((item) => item.id === Id)
          carrito.push({
           ...item,
           numeroDeUnidades: 1,
          })
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'SE AGREGO CON EXITO',
          showConfirmButton: false,
          timer: 1000,
          width: "400px"
        })
        actualizarCarrito()
    })
    }
}

function cambiarNumeroDeUnidades(accion, id){
carrito = carrito.map((item)=>{
    let numeroDeUnidades = item.numeroDeUnidades;
    if(item.id === id){
    if(accion === "resta" & item.numeroDeUnidades > 1){
        numeroDeUnidades--;
    }
    else if(accion === "suma" & item.numeroDeUnidades < item.stock){
        numeroDeUnidades++;
    }
}
return{
    ...item,
    numeroDeUnidades,
}
})
actualizarCarrito()
}

function actualizarCarrito(){
    localStorage.setItem("cart", JSON.stringify(carrito))
    crearObj()
    totalPrecio()
    
}



function crearObj(){
    elementosCarrito.innerHTML = ""
    carrito.forEach((item)=>{
        const tabla = document.createElement('div')
        tabla.classList.add('tabla')
        tabla.innerHTML += `
        <img src=${item.img} alt= "" 
        <p class="title">${item.nombre}</p>
        <p class="price">${item.precio}</p>
        <div class="button-img" onclick="cambiarNumeroDeUnidades('resta', ${item.id})"><img src="images/negative.png" alt=""></div>
        <p>${item.numeroDeUnidades}</p>
        <div class="button-img" onclick="cambiarNumeroDeUnidades('suma', ${item.id})"><img src="images/plus.png" alt=""></div>
        <div class="button-img" onclick="eliminarProducto(${item.id})"><img src="images/trash-bin.png" alt=""></div>
        `
        elementosCarrito.appendChild(tabla)
    } )
}

function totalPrecio(){
let subtotal = 0;
let totalUnidades = 0;
carrito.forEach((item) =>{
subtotal += item.precio * item.numeroDeUnidades
totalUnidades += item.numeroDeUnidades;
})
document.getElementById("cart-total").innerHTML= totalUnidades;
const precioTotal = document.getElementById("modalFooter")
precioTotal.innerHTML= `
<p>
Total(${totalUnidades})= $${subtotal}
</p>
`
}

function eliminarProducto(Id){
const findId = ((element)=>
element.id === Id)
let number = carrito.findIndex(findId)
carrito.splice(number, 1)
actualizarCarrito()
}


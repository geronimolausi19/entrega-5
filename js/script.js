
let mostrar=""
function preguntar(){
    let resultado = prompt("Bienvenido!!! ¿Cual es tu nombre?")

  mostrar= mostrar + resultado
    return mostrar
}
preguntar()

 function alerta(){
   
      alert("Bienvenido a New Walk " + mostrar)
}  alerta()





class zapatillas{
  constructor(talleDisponible,stockDisponible,precio){
   this.talle=talleDisponible;
  this.stock=stockDisponible;
  this.precio=precio;

  }
  mostrarProductosEnPantalla(){
    document.getElementById("zapatilla1").innerHTML =`
    <div>
  <p>${this.talle},${this.stock},${this.precio}</p>
  
    </div>
  `
  }
  
   mostrarProductos(){
  
  }   

}

function mostrarProductos(){
  let zapatillasUno = new zapatillas("Desde 38, Hasta 43", "32 Unidades","$8000")
  zapatillasUno.mostrarProductosEnPantalla();
}

let zapatillasDos = new zapatillas("Desde 40, hasta 45" , "5 Unidades","$12000")

let zapatillasTres = new zapatillas("Desde 37, hasta 43", "10 unidades", "$5000")
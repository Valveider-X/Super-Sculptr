//const escultura = new Escultura()

class Escultura {

    constructor(miliSegundos, y, yBoton, dinero) {
  
      // nodo
      this.node = document.createElement("img")
      this.node.id = "escultura" // opcional
      // imagen
      this.node.src = "./Imagenes/panel_brown.png"
      // desde JS las busquedas de imagenes siempre con "./"
  
      gameBoxNode.append(this.node) // esto añade el nodo de la barra al game-box
  
      this.x = 50; // posicion eje x lateral
      this.y = y; // posicion eje y vertical
      this.w = 500; // ancho
      this.h = 50; // alto*/
  
      this.node.style.position = "absolute"
      this.node.style.top = `${this.y}px`
      this.node.style.left = `${this.x}px`
  
      this.node.style.width = `${this.w}px`
      this.node.style.height = `${this.h}px`
      // si la palabra empieza en h, no termina en h. Viceversa.

    ///Barra
    this.barraNode = document.createElement("progress")
    this.barraNode.id = "progress"
    this.barraNode.setAttribute("value", "0")
    this.barraNode.setAttribute("max", "100")
    gameBoxNode.append(this.barraNode)

    this.x = 80; // posicion eje x lateral
    this.y = y+11; // posicion eje y vertical
    this.w = 400; // ancho
    this.h = 25; // alto
  
    this.barraNode.style.position = "absolute"
    this.barraNode.style.top = `${this.y}px`
    this.barraNode.style.left = `${this.x}px`
  
    this.barraNode.style.width = `${this.w}px`
    this.barraNode.style.height = `${this.h}px`

    

///BOTON
      this.botonNode = document.createElement("img")
      this.botonNode.id = "botonazo" // opcional
      // imagen
      this.botonNode.src = "./Imagenes/buttonRound_brown.png"

      gameBoxNode.append(this.botonNode)

      this.x =490;
      this.y = yBoton //56; 
      this.w = 40;
      this.h = 40;

      this.botonNode.style.position = "absolute"
      this.botonNode.style.top = `${this.y}px`
      this.botonNode.style.left = `${this.x}px`
  
      this.botonNode.style.width = `${this.w}px`
      this.botonNode.style.height = `${this.h}px`
      console.log(this.botonNode);

      this.botonNode.addEventListener("click",() => {
        this.progresoBarra(miliSegundos, dinero)

      })



    }
    //METODOS
    /*actualizarProgreso(nuevoProgreso)
    this.barraNode.value = nuevoProgreso*/ //meter esto 

    progresoBarra(miliSegundos){ 
      if (!this.barraNode.classList.contains("in-progress")){
          this.barraNode.classList.add("in-progress")
          let width = 0
          let dinero = this.dinero;
          

          let id = setInterval(() => { //la duración de la barra 
              if (width >= 100){
                  clearInterval(id)
                  this.barraNode.classList.remove("in-progress")
                  dinero ++
                  incrementarDinero(dinero)
                  this.dinero = dinero
                  
              }else{
                  width++
                 this.barraNode.value = width;
              }
          }, miliSegundos)
      }
  }





    /*progresoBarra(miliSegundos){ //cuando llamemos a la funcion hay que declarar el tiempo de progreso barra
      if (barraDeProgreso == 0){
          barraDeProgreso = 1
          let elementoBarra = document.getElementById("myBar")
          let width = 1
          let id = setInterval(frame, miliSegundos) //la duración de la barra 
  
          function frame(){
              if (width >= 100){
                  clearInterval(id)
                  barraDeProgreso = 0
                  incrementarDinero()
              }else{
                  width++
                  elementoBarra.style.width = width + "%"
              }
          }
      }
  }*/

  
   }
   //todo Duplicar class con éxito 
   /*const monolito = new Escultura()
   monolito.node.style.top = escultura.y + 20*/
   
   //todo CLASS boton
class Botonazo {
  constructor(){
    //nodo
    
      
  }
}
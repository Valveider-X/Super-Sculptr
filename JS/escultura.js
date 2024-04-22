class Escultura {

    constructor() {
  
      // nodo
      this.node = document.createElement("img")
      this.node.id = "escultura" // opcional
      // imagen
      this.node.src = "./imagenes/panel_brown.png"
      // desde JS las busquedas de imagenes siempre con "./"
  
      gameBoxNode.append(this.node) // esto añade el nodo de la barra al game-box
  
      this.x = 50; // posicion eje x
      this.y = 50; // posicion eje y
      this.w = 500; // ancho
      this.h = 50; // alto*/
  
      this.node.style.position = "absolute"
      this.node.style.top = `${this.y}px`
      this.node.style.left = `${this.x}px`
  
      this.node.style.width = `${this.w}px`
      this.node.style.height = `${this.h}px`
      // si la palabra empieza en h, no termina en h. Viceversa.
    }
    

   //todo progresión barra
   }

   //todo CLASS boton
class Botonazo {
  constructor(){
    //nodo
    this.node = document.createElement("img")
    this.node.id = "botonazo" // opcional
      // imagen
      this.node.src = "./imagenes/buttonRound_block.png"

      gameBoxNode.append(this.node)

      this.x =490;
      this.y = 56; 
      this.w = 40;
      this.h = 40;

      this.node.style.position = "absolute"
      this.node.style.top = `${this.y}px`
      this.node.style.left = `${this.x}px`
  
      this.node.style.width = `${this.w}px`
      this.node.style.height = `${this.h}px`
      
  }
}
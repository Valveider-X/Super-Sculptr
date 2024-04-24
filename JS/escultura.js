//const escultura = new Escultura()
//todo arreglar imagenes para github
class Escultura {
  
  constructor(miliSegundos, y, yBoton, dineroASumar) {
    // nodo
    this.node = document.createElement("img");
    this.node.id = "escultura"; // opcional
    // imagen
    this.node.src = "./Imagenes/panel_brown.png";
    // desde JS las busquedas de imagenes siempre con "./"

    gameBoxNode.append(this.node); // esto añade el nodo de la barra al game-box

    this.x = 50; // posicion eje x lateral
    this.y = y; // posicion eje y vertical
    this.w = 500; // ancho
    this.h = 50; // alto*/

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    // si la palabra empieza en h, no termina en h. Viceversa.

    //DINEROS
    this.dineroASumar = dineroASumar;

    ///Barra
    this.barraNode = document.createElement("progress");
    this.barraNode.id = "progress";
    this.barraNode.setAttribute("value", "0");
    this.barraNode.setAttribute("max", "100");
    gameBoxNode.append(this.barraNode);

    this.x = 80; // posicion eje x lateral
    this.y = y + 11; // posicion eje y vertical
    this.w = 400; // ancho
    this.h = 25; // alto

    this.barraNode.style.position = "absolute";
    this.barraNode.style.top = `${this.y}px`;
    this.barraNode.style.left = `${this.x}px`;

    this.barraNode.style.width = `${this.w}px`;
    this.barraNode.style.height = `${this.h}px`;
    //IMAGENES BARRA(PRUEBA)
    this.imagenNode = document.createElement("img")
    this.imagenNode.src = "./Imagenes/sculpt1.png"
    this.imagenNode.style.position = "absolute"
    this.imagenNode.style.left = `${this.x - 70}px`
    this.imagenNode.style.top = `${this.y - 30}px`
    this.imagenNode.style.width = "40px"
    this.imagenNode.style.height = "80px"
    gameBoxNode.appendChild(this.imagenNode)
    ///BOTON
    
    this.botonNode = document.createElement("img");
    this.botonNode.className = "botonazo"; // opcional
    // imagen
    this.botonNode.src = "./Imagenes/buttonRound_brown.png";

    gameBoxNode.append(this.botonNode);

    this.x = 490;
    this.y = yBoton; //56;
    this.w = 40;
    this.h = 40;

    this.botonNode.style.position = "absolute";
    this.botonNode.style.top = `${this.y}px`;
    this.botonNode.style.left = `${this.x}px`;

    this.botonNode.style.width = `${this.w}px`;
    this.botonNode.style.height = `${this.h}px`;
    //console.log(this.botonNode);

    this.botonNode.addEventListener("click", () => {
      this.progresoBarra(miliSegundos);
    });
  }
  //METODOS
  /*actualizarProgreso(nuevoProgreso)
    this.barraNode.value = nuevoProgreso*/ //meter esto

  progresoBarra(miliSegundos) {
    this.chequeoBotones()
    if (!this.barraNode.classList.contains("in-progress")) {
      this.barraNode.classList.add("in-progress");
      let width = 0;
      // let dinero = this.dinero;

      let id = setInterval(() => {
        //la duración de la barra
        if (width >= 100) {
          clearInterval(id);
          this.barraNode.classList.remove("in-progress");

          incrementarDinero(this.dineroASumar);
          //this.dinero = dinero
        } else {
          width++;
          this.barraNode.value = width;
        }
      }, miliSegundos);
    }
  }

  chequeoBotones(){
    //console.log("valor dinero sumar", this.dineroASumar);
    let todosLosBotones = document.querySelectorAll(".botonazo")
    todosLosBotones.forEach( boton => {
      boton.disabled = true
      boton.style.pointerEvents = "none"
      boton.style.opacity = "0.5"
      boton.addEventListener("click", function(bloquear){
        bloquear.preventDefault()

      })
      
      //console.log("botón desactivado",boton)
    })
    if (this.dineroASumar >= 0){
      console.log("activando boton 0")
      
        todosLosBotones[0].parentNode.disabled = false
        todosLosBotones[0].style.pointerEvents = "auto"
        todosLosBotones[0].style.opacity = "1"
        // a todosLosBotones[0].disabled = false
      //}
    }if (this.dineroASumar >= 10){
      console.log("activando boton 01")
      todosLosBotones[4].parentNode.disabled = false
      todosLosBotones[4].style.pointerEvents = "auto"
      todosLosBotones[4].style.opacity = "1"
    }if (this.dineroASumar >= 50){
      console.log("activando boton 02")
      todosLosBotones[3].parentNode.disabled = false
      todosLosBotones[3].style.pointerEvents = "auto"
      todosLosBotones[3].style.opacity = "1"
    }if (this.dineroASumar >= 100){
      console.log("activando boton 03")
      todosLosBotones[2].parentNode.disabled = false
      todosLosBotones[2].style.pointerEvents = "auto"
      todosLosBotones[2].style.opacity = "1"
    }if (this.dineroASumar >= 150){
      console.log("activando boton 04")
      todosLosBotones[1].parentNode.disabled = false
      todosLosBotones[1].style.pointerEvents = "auto"
      todosLosBotones[1].style.opacity = "1"
      //console.log("todos los botones desactivados")
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



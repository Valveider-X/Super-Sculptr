class Game {

    // propiedades
    constructor() {
  
      //background CHECK
      //el ID
      
      this.escultura = new Escultura() // el juego empieza con una barra
      this.botonazo = new Botonazo()
  
      
      
  
      //ids de intervalos
      //this.gameIntervalId;
//this.tuberiasIntervalId;
  
    }
  
    // metodos
  
  
    
    /*tuberiaAparece(){
      //las tuberias van a aparecer de dos en dos
  
      let randomPosY = Math.floor(Math.random()* -200) //valor aleatorio entre 200 y 0
      let distanciaEntreTuberias = 350
      let nuevaTuberia1 = new Tuberia("arriba", randomPosY)
      this.tuberiasArr.push(nuevaTuberia1)
  
      let nuevaTuberia2 = new Tuberia("abajo", randomPosY + distanciaEntreTuberias)
      this.tuberiasArr.push(nuevaTuberia2)
    }
    
    iniciarFrecuenciaDeTuberias(){
      this.tuberiasIntervalId = setInterval(()=>{
        this.tuberiaAparece()
  
      }, 2000)
    }
  
    //todo efecto de que las tuberias desaparecen
    eliminarTuberiasAlSalirDeLaPantalla() {
  
      this.tuberiasArr.forEach((cadaTuberia, index)=>{
        if ((cadaTuberia.x + cadaTuberia.w) < 0){
          //! al eliminar elementos del juego debo considerar dos cosas
          //! 1- Debo eliminar el objeto (o eliminarlo del array)
          this.tuberiasArr.splice(index, 1) //remueve ese elemento del array
          //! 2- Debo eliminar el nodo del DOM <img>
          cadaTuberia.node.remove()
        }
      })
    }
    //todo colision entre el pollito y las tuberias
    colisionPollitoTuberias(){
      
  
      this.tuberiasArr.forEach((cadaTuberia)=>{
      //this.pollito
      //cadaTuberia
      if (
        this.pollito.x < cadaTuberia.x + cadaTuberia.w &&
        this.pollito.x + this.pollito.w > cadaTuberia.x &&
        this.pollito.y < cadaTuberia.y + cadaTuberia.h &&
        this.pollito.y + this.pollito.h > cadaTuberia.y
      ) {
        // Collision detected!
     //console.log("el pollito se estampó")
     this.gameOver()
      } 
      
  
      })
    }*/
    /*//todo accion de game over
    gameOver(){
      //1 - todos los intervalos deben detenerse
      clearInterval(this.gameIntervalId)
      clearInterval(this.tuberiasIntervalId)
      //2- ocultar la pantalla de juego
      gameScreenNode.style.display = "none"
      //3- mostrar la pantalla final
      gameOverScreenNode.style.display = "flex"
    }
  
  
    //* BONUS
    // sonidos y musica
    // score*/
  
    gameLoop() {
      //console.log("juego andando")
  
    }
  
    start() {
      this.gameIntervalId = setInterval(() => {
        this.gameLoop()
      }, Math.round(1000/60)) // 60fps
    }
  
  }
  
  //Etiqueta de progreso JS se llama progress(echar un vistazo)
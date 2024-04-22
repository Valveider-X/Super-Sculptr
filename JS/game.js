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
  

    //todo accion de game over
    /*gameOver(){
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
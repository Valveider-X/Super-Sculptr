class Game {
  // propiedades
  constructor() {
    this.barrasArr = [];
  }

  // metodos
  crearEsculturas() {
    let tiempoBucle = 100;
    let posicionBarra = 100;
    let posicionBoton = 105;
    let valoresDinero = [1, 10, 50, 100, 300];
    
    

    for (let i = 0; i <= 4; i++) {
      let incrementoTiempo = tiempoBucle + i * 250;
      let incrementoPosicion = posicionBarra + i * 100;
      let incrementoBoton = posicionBoton + i * 100;
      let dineroASumar = valoresDinero[i];
      console.log(dineroASumar);

      let barrasEscultura = new Escultura(
        incrementoTiempo,
        incrementoPosicion,
        incrementoBoton,
        dineroASumar
      );
      this.barrasArr.push(barrasEscultura);
      barrasEscultura.chequeoBotones()
      
     
      
    }
    

  }
  botoncito() {
    this.escultura.progresoBarra(100);
    
    console.log(`Dinero actualizado: ${dinero}`);
  }

  //todo accion de game over
  /*gameOver(){
      //1 - todos los intervalos deben detenerse
      clearInterval(this.gameIntervalId)
      clearInterval(this.tuberiasIntervalId)
      //2- ocultar la pantalla de juego
      gameScreenNode.style.display = "none"
      //3- mostrar la pantalla final
      gameOverScreenNode.style.display = "flex"
    }*/
  
  
    //* BONUS
    // sonidos y musica
    // score

  gameLoop() {
    //console.log("juego andando")
  }

  start() {
    //!
    //startCountdown(10);

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, Math.round(1000 / 60)); // 60fps
  }
}


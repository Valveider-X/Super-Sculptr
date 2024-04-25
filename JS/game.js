class Game {
  // propiedades
  constructor() {
    this.barrasArr = [];
  }

  // metodos
  crearEsculturas() {
    let tiempoBucle = 100;
    let posicionBarra = 50;
    let posicionBoton = 55;
    let valoresDinero = [1, 10, 50, 100, 300];
    //let contadorImagenes = 1

    for (let i = 0; i <= 4; i++) {
      let incrementoTiempo = tiempoBucle + i * 250;
      let incrementoPosicion = posicionBarra + i * 100;
      let incrementoBoton = posicionBoton + i * 100;
      let dineroASumar = valoresDinero[i];
      /*contadorImagenes++
      this.imagenNode.id = `imagenNode${contadorImagenes}`*/

      //console.log(dineroASumar);

      let barrasEscultura = new Escultura(
        incrementoTiempo,
        incrementoPosicion,
        incrementoBoton,
        dineroASumar
      );
      this.barrasArr.push(barrasEscultura);
      barrasEscultura.chequeoBotones();
    }
  }
  botoncito() {
    this.escultura.progresoBarra(100);

    //console.log(`Dinero actualizado: ${dinero}`);
  }

  gameOver() {
    //1 - todos los intervalos deben detenerse

    clearInterval(this.gameIntervalId);
    clearInterval(this.id);
    clearInterval(this.timerHacienda);
    //2- ocultar la pantalla de juego
    gameScreenNode.style.display = "none";
    gameBoxNode.style.display = "none";
    //3- mostrar la pantalla final
    gameOverScreenNode.style.display = "flex";
  }

  gameLoop() {
    //console.log("juego andando")
  }

  start() {
    //!
    startCountdown(60); //60
    startPayCountdown(149);
    paga(150); //150

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, Math.round(1000 / 60)); // 60fps
  }
}

//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");

//const gameOverScreenNode = document.querySelector("#game-over-screen")

//INTERFAZ
let dinero = 0;

// botones
const startBtnNode = document.querySelector("#start-btn");
const botonBarra = document.querySelector("#boton");

//BARRAS DE PROGRESO
let barraDeProgreso = 0;

//botonBarra.style.display = "block";
//botonBarra.style.visibility= "visible"

// game box
const gameBoxNode = document.querySelector("#game-box");

//probando

let game; // vacio porque aun no ha iniciado el juego*/

//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
  console.log("iniciando el juego");

  //1. ocultar la pantalla de inicio
  splashScreenNode.style.display = "none";

  //2. mostrar la pantalla de juego
  gameScreenNode.style.display = "flex";
  gameBoxNode.style.display = "flex";

  //3. mostrar el botón de barra
  botonBarra.style.display = "none";

  //3. iniciar el juego

  game = new Game();
  //console.log(game)
  game.start();
  game.crearEsculturas();

}

function incrementarDinero(dineroASumar) {
  dinero += dineroASumar;
  const monedasInterface = document.querySelector("#monedas-interfaz");
  monedasInterface.innerText = "Monedas: " + dinero;
}
// progresión barra

//FUNCION DESBLOQUEO


//!
//FUNCIÓN OCULTA - HACIENDA.
/*
function startCountdown(seconds) {
  let counter = seconds;
  const timer = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(timer);
      window.alert("Hacienda viene a reclamar dinero");
    }
  }, 1000);
}
*/
//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
/*botonBarra.addEventListener("click", () => {
    game.botoncito()
}) //ver como colocar la class Button
console.log("Evento click asignado correctamente al botón")*/

//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//SONIDOS
const musica = document.querySelector("#musica");
//INTERFAZ
let dinero = 0;

// botones
const startBtnNode = document.querySelector("#start-btn");
const botonBarra = document.querySelector("#boton");
const reinicioBoton = document.querySelector("#reiniciar");

//BARRAS DE PROGRESO
let barraDeProgreso = 0;

// game box
const gameBoxNode = document.querySelector("#game-box");

//probando

let game; // vacio porque aun no ha iniciado el juego*/

//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
  //console.log("iniciando el juego");

  //0. Musica. 
  musica.volume = 0.05; 
  musica.play();
  musica.loop = true;

  //1. ocultar la pantalla de inicio
  splashScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "none";

  //2. mostrar la pantalla de juego
  gameScreenNode.style.display = "flex";
  gameBoxNode.style.display = "flex";

  //3. mostrar el botón de barra
  botonBarra.style.display = "none";

  //3. iniciar el juego

  game = new Game();
  game.crearEsculturas();

  //console.log(game)
  game.start();
}

function incrementarDinero(dineroASumar) {
  dinero += dineroASumar;
  const monedasInterface = document.querySelector("#monedas-interfaz");
  monedasInterface.innerText = dinero;
}

//!
//FUNCIÓN OCULTA - HACIENDA.

function startCountdown(seconds) {
  let counter = seconds;
  const timerHacienda = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(timerHacienda);
      openModal();
      //window.alert("Hacienda viene a reclamar dinero");
    }
  }, 1000);
}

//FUNCION OCULTA HACIENDA EN BURRO
function startPayCountdown(seconds) {
  let counter = seconds;
  const timerPago = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(timerPago);
      openModalPagando();
      //window.alert("Hacienda viene a reclamar dinero");
    }
  }, 1000);
}
//FUNCIÓN OCULTA - GAMEOVER HACIENDA

function paga(seconds) {
  let counter = seconds;
  const timerPagar = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(timerPagar);
      window.alert("Has pagado 100 monedas a Hacienda");
      dinero -= 100;
      if (dinero <= 0) {
        clearInterval(timerPagar);
        game.gameOver();
      }
    }
  }, 1000);
}

//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
reiniciar.addEventListener("click", () => {
  window.location.reload();
});

//Modal Hacienda
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn"); //abre
let span = document.getElementsByClassName("close")[0]; //cierra

btn.onclick = function () {
  //abre en el click
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function openModal() {
  modal.style.display = "block";
}

//Modal Pagando

let modalPagando = document.getElementById("myModalPay");
let btnPagando = document.getElementById("myBtn2"); //abre
let spanPagando = document.getElementsByClassName("close2")[0]; //cierra

btnPagando.onclick = function () {
  //abre en el click
  modalPagando.style.display = "block";
};
spanPagando.onclick = function () {
  modalPagando.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalPagando) {
    modalPagando.style.display = "none";
  }
};

function openModalPagando() {
  modalPagando.style.display = "block";
}

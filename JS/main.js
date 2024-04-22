
//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
//const gameOverScreenNode = document.querySelector("#game-over-screen")



//INTERFAZ
let dinero = 0;

// botones
const startBtnNode = document.querySelector("#start-btn")
const botonBarra = document.querySelector("#boton")


//BARRAS DE PROGRESO
let barraDeProgreso = 0;

//botonBarra.style.display = "block";
//botonBarra.style.visibility= "visible"

// game box
const gameBoxNode = document.querySelector("#game-box")
//probando


let game; // vacio porque aun no ha iniciado el juego*/

//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
  console.log("iniciando el juego")

  //1. ocultar la pantalla de inicio
  splashScreenNode.style.display = "none"

  //2. mostrar la pantalla de juego
  gameScreenNode.style.display = "flex"

  //3. mostrar el botón de barra
  botonBarra.style.display = "flex"

  //3. iniciar el juego
  
  game = new Game()
  console.log(game)
  game.start()
 // game.iniciarFrecuenciaDeTuberias()

}


//todo solucionar problemas con el dinero, al hacer click debe dar el dinero después de la barra de progreso

function botoncito(){
    progresoBarra()
    console.log(`Dinero actualizado: ${dinero}`)
    
    
}
function incrementarDinero(){
    dinero++
    const monedasInterface = document.querySelector("#monedas-interfaz")
    monedasInterface.innerText = "Monedas: " + dinero
}
//todo progresión barra
function progresoBarra(){
    if (barraDeProgreso == 0){
        barraDeProgreso = 1
        let elementoBarra = document.getElementById("myBar")
        let width = 1
        let id = setInterval(frame, 10)

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
}

//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
botonBarra.addEventListener("click", botoncito) //ver como colocar la class Button
console.log("Evento click asignado correctamente al botón")







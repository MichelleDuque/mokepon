const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador= document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")


let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){  

    sectionSeleccionarAtaque.style.display = "none" 

    sectionReiniciar.style.display = "none" 

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador) 

    botonFuego.addEventListener("click", ataqueFuego)  
    
    botonAgua.addEventListener("click", ataqueAgua)  
    
    botonTierra.addEventListener("click", ataqueTierra)
    ("boton-reiniciar")
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = "none"
    
    sectionSeleccionarAtaque.style.display = "flex"

    

    if (inputHipodoge.checked == true){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked == true){
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if (inputRatigueya.checked == true){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else{
        alert("Tienes que escoger una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }
    else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } 
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    // let spanAtaqueEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }
    else if (ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }

    combate()
}


function combate(){

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("¡Felicitaciones! 🎉Ganaste🎉")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento, Perdiste 😢😖")
    }
}


function crearMensaje(resultado){

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
 
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    

    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
  
    botonAgua.disabled = true
   
    botonTierra.disabled = true

   
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener("load", iniciarJuego)

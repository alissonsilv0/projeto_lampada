let luzApagada = document.querySelector("img")
let luzAcesa = document.querySelector("img")
let buttonOn = document.querySelector("#ligada")
let buttonOff = document.querySelector("#desligada")

function apagar(){
    luzApagada.src = "./img/apagada.png"
    buttonOff.style.backgroundColor = "red"
    buttonOff.style.color = "white"
    buttonOn.style.backgroundColor = "#EFEFEF"
    buttonOn.style.color = "black"
}

function acender(){
    luzAcesa.src = "./img/acesa.png"
    buttonOn.style.backgroundColor = "green"
    buttonOn.style.color = "white"
    buttonOff.style.backgroundColor = "#EFEFEF"
    buttonOff.style.color = "black"
}

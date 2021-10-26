const sumatoriaHasta = (numero) => {
    let acumulador = 0
    for (let i = 1; i <= numero; i++) {
        acumulador += i
    }
    return acumulador
}

const calculoAhorroAnualSimple = () => {
    return sumatoriaHasta(365)
}

const sumatoriaConDuplicadosHasta = (maximo, topeDuplicado) => {
    let acumulador = 0
    for (let i = 1; i <= maximo; i++) {
        if (i <= topeDuplicado) {
            acumulador += i * 2
        } else {
            acumulador += i
        }
    }
    return acumulador
}

const sumatoriaMultiplicadaPorHasta = (maximo, multiplicador, topeDuplicado) => {
    let acumulador = 0
    for (let i = 1; i <= maximo; i++) {
        if (i <= topeDuplicado) {
            acumulador += i * multiplicador
        } else {
            acumulador += i
        }
    }
    return acumulador
}

const calculoAhorroAnualOptimizandoHasta = (tope) => {
    return sumatoriaConDuplicadosHasta(365, tope)
}

//--------cuanto-section--------------------------------------------------
const seccionCuanto = document.querySelector('.cuanto-section')
const form = document.querySelector('.tiempo-form')
const radios = form.elements['tiempo']


//obtengo la NodeList con todos los radios
//const radios = document.getElementsByName('tiempo')
//transformo la NodeList en un array comun para poder recorrerlo
//const radiosList = [...radios]
//me quedo con el que esta seleccionado
//seleccion = radiosList.filter(radio => radio.checked)
//console.log(seleccion.value)

// radio.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

//REVISAR 
function tiempoSeleccionado() {
    for (let i = 0; i < radios.length; i++) {
        radio[i].addEventListener('input', (e) => {
                if (radios[i].checked) {
                    alert(radios[i].value);
                    break;
                    console.log(e.target.value)
                })

        }
    }
}

console.log(tiempoSeleccionado())



const ahorroContainer = document.createElement('div')
ahorroContainer.classList.add('resultado')
    // ahorroContainer.innerHTML = `
    // <p>Podés ahorrar desde ${} pesos</p>`




//----seccion propuesta--------------------------------------------------------------
const seccionPropuesta = document.querySelector('.propuesta-section')
const diasAMultiplicar = document.querySelector('#diasAMultiplicar')
const resultadoContainer = document.createElement('div')
resultadoContainer.classList.add('resultado')
    // resultadoContainer.innerHTML = `
    // <p>Con este plan podés ahorrar ${} pesos</p>`



const botonMultiplicador = document.querySelector('#botonMultiplicador')

botonMultiplicador.addEventListener('click', calcularAhorroMultiplicado)

function calcularAhorroMultiplicado() {

    seccionPropuesta.appendChild(resultadoContainer)
}
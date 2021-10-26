function calculadoraPage(contenedor) {
    contenedor.innerHTML = `
    <h1 class="title_h1">Calcula tu ahorro</h1>
    <div class="calculadora-container">
    <section class="form-container">
            <form class="tiempo-form" action="">
                <p>Por cuanto tiempo queres comprometerte?</p>
                
                <p>
                <input type="radio" name="tiempo" value="3" checked>
                <label for="tres-meses">3 meses</label>
                </p>
                <p>
                <input type="radio" name="tiempo" value="6">
                <label for="seis-meses">6 meses</label>
                </p>
                <p>
                <input type="radio" name="tiempo" value="12">
                <label for="doce-meses">12 meses</label>
                </p>
                <p>
                <input type="radio" name="tiempo" id="otro">
                <label for="otro">otro</label>
                <input type="text" placeholder="meses">
                </p>
            
                <div class="propuesta-inputs">
                <h2>Nuestra propuesta</h2>
                <p>Te proponemos <span>multiplicar</span> lo que ponés <span>los primeros dias</span> hasta donde te animes para que no se sienta tanto</p>

                <div class="pregunta">
                    <p>Hasta que dia te animas a multiplicar?</p>
                    <input type="text" id="diasAMultiplicar">
                </div>

                <div class="pregunta">
                    <p>Por cuanto queres multiplicar?</p>
                    <input type="text" id="multiplicador">
                </div>

                <button type="submit" class="callToAction-button" id="botonMultiplicador">Calcular</button>

            </div>

                </form>
        
            
        </section>
        <div class="hero-img-container">
        <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0042/6040/ahorro-rankia.jpeg?1614566298" alt="" width="300">
</div>
    </div>
    
    
    `
    console.log(resultado())
}

//-----------obtengo los operandos-------------------------------------------------
function nroMeses() {
    //obtengo la NodeList con todos los radios
    const radios = document.getElementsByName('tiempo')
        //transformo la NodeList en un array comun para poder recorrerlo
    const radiosList = [...radios]
        //me quedo con el que esta seleccionado
    const seleccion = radiosList.find(radio => radio.checked === true)

    const otroMes = document.querySelector('#otro')
    if (seleccion.id === "otro") {
        return Number(otroMes.value)
    } else {
        return Number(seleccion.value)
    }
}

function nroTotalDeDias() {
    return nroMeses() * 30
}

function diasAMultiplicar() {
    const dias = document.querySelector('#diasAMultiplicar')
    return Number(dias.value)
}

function multiplicador() {
    const multiplicador = document.querySelector('#multiplicador')
    return Number(multiplicador.value)
}


function resultado() {
    //selecciono el form
    const form = document.querySelector('.tiempo-form')

    //escucho el evento click

    form.addEventListener('submit', calcularAhorroMultiplicado)
}

function calcularAhorroMultiplicado(e) {
    e.preventDefault()

    let maximo = nroTotalDeDias()
    let nroMultiplicador = multiplicador()
    let topeDuplicado = diasAMultiplicar()

    let acumulador = 0
    for (let i = 1; i <= maximo; i++) {
        if (i <= topeDuplicado) {
            acumulador += i * nroMultiplicador
        } else {
            acumulador += i
        }
    }
    return acumulador
}





export { calculadoraPage }
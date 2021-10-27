import { calculadoraPage } from './calculadora-page.js'

function mainPage(contenedor) {
    contenedor.innerHTML = `
    <h1 class="title_h1">Calcula tu ahorro</h1>
    <section class="hero-section">
            <div class="hero-container__text">
                <h2>La técnica de los sobres</h2>
                <p>Consiste en distribuir lo que podés ahorrar en cierta cantidad de sobres. Cada sobre tendrá un numero que va del 1 al numero del ultimo dia en que vas a ahorrar. Ponemos esos sobres en una caja y cada día sacamos uno al azar y colocamos
                    dentro la cantidad que nos indica el sobre.</p>
                <button class="callToAction-button">Quiero empezar ahora</button>
            </div>
            <div class="hero-img-container img-fondo">
            </div>
            
    </section>
    `
    mostrarCalculadora(contenedor)
}

function mostrarCalculadora(contenedor) {
    const botonACalculadora = document.querySelector('.callToAction-button')
    botonACalculadora.addEventListener('click', () => {
        calculadoraPage(contenedor)
    })
}


export { mainPage }
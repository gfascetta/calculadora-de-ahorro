function calculadoraPage(contenedor) {
    contenedor.innerHTML = `
    <h1 class="title_h1">Calcula tu ahorro</h1>
    <div class="calculadora-container">
    <section class="form-container">
            <form class="tiempo-form" action="">
                <p>Por cuanto tiempo queres comprometerte?</p>
                
                <p>
                <input type="radio" name="tiempo" value="3">
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
            </form>
        
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

                <button class="callToAction-button" id="botonMultiplicador">Calcular</button>

            </div>
        </section>
        <div class="hero-img-container">
        <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0042/6040/ahorro-rankia.jpeg?1614566298" alt="" width="300">
</div>
    </div>
    
    
    `
    mostrarResultado()
}

function mostrarResultado() {

}


export { calculadoraPage }
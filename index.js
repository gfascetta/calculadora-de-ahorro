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

calculoAhorroAnualSimple()

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

const calculoAhorroAnualOptimizandoHasta = (tope) => {
    return sumatoriaConDuplicadosHasta(365, tope)
}

calculoAhorroAnualOptimizandoHasta(150)
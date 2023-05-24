function mudarCor() {
    let valor = parseInt(document.getElementById("range").value)
    let body = document.body

    let h1_temperatura = document.getElementById("h1-temperatura")

    let vermelho = 0
    let verde = 255
    let azul = 0

    if (valor > 30) {
        vermelho += valor
        verde = 100 
        azul = 0
    }
    else {
        vermelho = 0
        verde = 100
        azul -= valor
    }

    console.log(vermelho)
    console.log(verde)
    console.log(azul)

    body.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`
    h1_temperatura.innerHTML = `${valor}°C`

}
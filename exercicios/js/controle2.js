console.log('Teste')


let inputNumber = document.querySelector('#qtd_telas')
let resultadoTelas = document.querySelector('#resultado_telas')
let btCalcular = document.querySelector('#bt_calcular')

function calcular(){
    let result = (inputNumber.value * 9.9).toFixed(2)
    result = result.replace('.',',')
    
    resultadoTelas.innerHTML = 'R$ ' + result
    // resultadoTelas.innerHTML = (inputNumber.value * 9.9).toFixed(2)
}

function calcularPorcentagem(){
    let pct = (inputNumber.value * 9.9) * 0.07
    resultadoTelas.innerHTML = 'R$ ' + (inputNumber.value * 9.9 + pct).toFixed(2)
}


// Altera o valor ao clicar na seta (Use keyup para quando o usuario digitar)
inputNumber.addEventListener('change',calcular)
inputNumber.addEventListener('keyup',calcular)


btCalcular.addEventListener('click',calcularPorcentagem)

////////////////////////////////////////

// Controle Sobre SELECT

let categorias = document.querySelector('#categorias')
let resultadoCategorias = document.querySelector('#resultado_categorias')
let boxInfo = document.querySelector('#box_info')

// img = 
// 
function exibeInfo(foto){
    let img = new Image()
    img.src= foto
    img.width='200'

    // se o a quantidade de children do boxInfo for maior que 0 -> remove o firstChild
    boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
    // boxInfo.innerHTML = ''

    boxInfo.appendChild(img)

}

// exibirCategoria é a tomada de decisão relativa a escolha do Select
function exibirCategoria() {
    resultadoCategorias.innerHTML = categorias.value
    switch (categorias.selectedIndex){
        case 1 : exibeInfo("images/quem-somos-nos.jpg")
        break
        case 2 : exibeInfo("images/mick.jpg")
        break
        case 3 : exibeInfo("images/pequeno-principe.jpg")
        break

    }
    
    
    //resultadoCategorias.innerHTML = categorias.selectedIndex
   
}

categorias.addEventListener('change',exibirCategoria)
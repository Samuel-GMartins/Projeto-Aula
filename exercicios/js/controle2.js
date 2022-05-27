console.log('Teste')


let inputNumber = document.querySelector('#qtd_telas')
let resultadoTelas = document.querySelector('#resultado_telas')
let btCalcular = document.querySelector('#bt_calcular')

function calcular() {
    let result = (inputNumber.value * 9.9).toFixed(2)
    result = result.replace('.', ',')

    resultadoTelas.innerHTML = 'R$ ' + result
    // resultadoTelas.innerHTML = (inputNumber.value * 9.9).toFixed(2)
}

function calcularPorcentagem() {
    let pct = (inputNumber.value * 9.9) * 0.07
    resultadoTelas.innerHTML = 'R$ ' + (inputNumber.value * 9.9 + pct).toFixed(2)
}


// Altera o valor ao clicar na seta (Use keyup para quando o usuario digitar)
inputNumber.addEventListener('change', calcular)
inputNumber.addEventListener('keyup', calcular)


btCalcular.addEventListener('click', calcularPorcentagem)

////////////////////////////////////////

// Controle Sobre SELECT

let categorias = document.querySelector('#categorias')
let resultadoCategorias = document.querySelector('#resultado_categorias')
let boxInfo = document.querySelector('#box_info')

// img = 
// 
function exibeInfo(foto) {
    let img = new Image()
    img.src = foto
    img.width = '200'

    // se o a quantidade de children do boxInfo for maior que 0 -> remove o firstChild
    boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
    // boxInfo.innerHTML = ''

    boxInfo.appendChild(img)

}

// exibirCategoria é a tomada de decisão relativa a escolha do Select
function exibirCategoria() {
    resultadoCategorias.innerHTML = categorias.value
    switch (categorias.selectedIndex) {
        case 1:
            exibeInfo("images/quem-somos-nos.jpg")
            break
        case 2:
            exibeInfo("images/mick.jpg")
            break
        case 3:
            exibeInfo("images/pequeno-principe.jpg")
            break

    }


    //resultadoCategorias.innerHTML = categorias.selectedIndex

}

categorias.addEventListener('change', exibirCategoria)

// OBJRTO JAVASCRIPT (propiedades = variáveis, métodos=funções)


// Exemplo 1
let movel = {
    nome: 'Sofá',
    lugares: 3
}
console.log(movel.nome) // Sofa 
console.log(movel.constructor) //Objeto 


// Exemplo 2
function animal(especie, porte, nome) {
    return {
        _especie: especie,
        _porte: porte,
        _nome: nome
    }
}

let mike = animal('York Shire', 'Pequeno', 'Mike')
console.log('Meu pet se chama ' + mike._nome)


// Exemplo 3
function Produto(nome, tipo) {
    this._nome = nome
    this._tipo = tipo
}


function MaquinaCafe(cor, voltagem) {
    this._cor = cor
    this._voltagem = voltagem

}


// Instância
let produto_1 = new Produto('Geladeira', 'Eletrodoméstico')
let maquinaCafe_1 = new MaquinaCafe('vermelha', '220')

console.log(produto_1 instanceof MaquinaCafe) // False
console.log(produto_1 instanceof Produto) // True

console.log(produto_1._nome)
console.log(produto_1.constructor)

/////////////////////////////////////////////////////////////
// Classes em JavaScript

// Exemplo 1
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }
}

let funcionario_1 = new Pessoa('José', 34)
console.log('O funcionário ' + funcionario_1._nome + ' tem: ' + funcionario_1._idade)


// Exemplo2
class Carro {
    //executa imediatamente ao utilizar a classe
    constructor(modelo, ano) {
        this._modelo = modelo
        this._ano = ano
    }
    //Método precisa ser invocado
    acessorios() {
        let bancoDeCouro = true
        return bancoDeCouro
    }
    km(x) {
        return x
    }
}
let carro_1 = new Carro('BMW', 2015)
console.log(carro_1._modelo, carro_1.acessorios())
carro_1.acessorios() ? console.log('Tem banco de couro') : null
let km = carro_1.km(80000)
console.log('Este ' + carro_1._modelo + ' tem ' + km + ' rodados.')


// Exemplo 3 - extends

class Mercadoria {
    constructor(tipo, modelo) {
        this._tipo = tipo
        this._modelo = modelo
    }
    info() {
        return 'Eu vendo ' + this._tipo + ', modelo ' + this._modelo
    }
}

class Fabricante extends Mercadoria {
    constructor(nome, tipo, modelo, regiao) {
        super(tipo, modelo)
        this._nome = nome
        this._regiao = regiao


    }
    apresentacao() {
        return 'Eu sou a empresa ' + this._nome + ', ' + this.info() + '. Estou na região; ' + this._regiao
    }
}

let empresa = new Fabricante('Apple', 'Iphone', 'Iphone 12 PRO', 'Vale do Silício')
console.log(empresa.apresentacao())



/////////////////////////

for(key in localStorage){
    console.log(key)
}
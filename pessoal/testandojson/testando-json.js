console.log('Teste')

let listaDeCompras = '{"produto": "Arroz", "supermercado": "Super Varejista", "valor": 15.51}'

console.log(listaDeCompras)
let comprasJSON = JSON.parse(listaDeCompras)

console.log(comprasJSON)

let conteudo = document.querySelector("#conteudo")
let titulo = document.querySelector("#titulo")
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")


titulo.innerHTML = "Alimento: " + comprasJSON.produto
p1.innerHTML = "Supermercado: " + comprasJSON.supermercado
p2.innerHTML = "R$: " +  comprasJSON.valor

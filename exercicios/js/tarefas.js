console.log('JS tarefas')

let lista = {
    nome: 'Lista de Tarefas',
    imprimeTitulo: function (el, titulo) {
        el.innerHTML = titulo
    },
    estiloLista: function (el, corDaBorda) {
        el.style.borderWidth = '1px'
        el.style.borderStyle = 'solid'
        el.style.borderColor = corDaBorda
    },
    gravarLista: function (el, key) {
        localStorage.setItem(key, el.innerHTML)

    },
    imprimeLista:function(el,lista){
        el.innerHTML=lista

    }
}

// Imprime a lista 'li' caso exista >> (Ao carregar a página)
if(localStorage.lista_l1){
    lista.imprimeLista(document.querySelector('#tarefas_l1'),localStorage.getItem('lista_l1'))
}


console.log(lista.nome)

// Imprime o nome da lsta em Tela
lista.imprimeTitulo(document.querySelector('#lista1 h2'), 'Lista De Compras')
lista.imprimeTitulo(document.querySelector('#lista2 h2'), 'Lista De Viagem')

// Altera a cor da borda da lista
lista.estiloLista(document.querySelector('#tarefas_l1'), 'blue')
lista.estiloLista(document.querySelector('#tarefas_l2'), 'green')

// Grava a lista em localStorage
document.querySelector('#bt_l1').onclick = function () {
    lista.gravarLista(document.querySelector('#tarefas_l1'), 'lista_l1')
}


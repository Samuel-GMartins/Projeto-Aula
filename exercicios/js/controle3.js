a = 0
for (key in localStorage) {
    console.log(key.indexOf('chamado'))
    // key.indexOf('chamado') == 0 ? console.log(key) : null
    //    console.log(key)
    //    console.log(a)
    a++

}

console.log(localStorage.length)

for (i = 0; i < localStorage.length; i++) {
    var chave = localStorage.key(i)
    if (chave.includes('chamado')) {
        console.log(chave)
        var valor = localStorage.getItem(chave).split(',')
        console.log(valor)

        for (y = 0; y < valor.length; y++) {
            console.log(i)
            //console.log(valor[y])
            document.querySelector('#div' + i + ' #p' + y).innerHTML = valor[y]
            // console.log('Nome:' + valor)
        }
    }

    //nome da chave
    // chave.indexOf('chamado') == 0 ? console.log(chave) : null

    //valor da chave
    // chave.indexOf('chamado') == 0 ? console.log(localStorage.getItem(chave).split(',').length) : null

}
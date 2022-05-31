// Atualiza um Arquivo, adicionando texto

const fs = require('fs') // file system

fs.appendFile('leiame.txt','Criando um Servidor',function(err){
    if(err) throw err
    console.log('Arquivo Atualizado!')
})
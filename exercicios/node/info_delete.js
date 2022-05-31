// Deleta um Arquivo

const fs = require('fs')

fs.unlink('leiame.txt',
function(err){
    if(err) throw err
    console.log('Arquivo excluido com sucesso!')
})
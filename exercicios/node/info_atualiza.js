const fs = require('fs') // file system

fs.appendFile('info.txt','Tomem Bastante Agua!',function(err){
    if(err) throw err
    console.log('Arquivo Atualizado!')
})
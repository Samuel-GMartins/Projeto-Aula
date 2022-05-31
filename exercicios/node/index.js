const http = require('http')

//Cria o objeto server
http.createServer(
    function (req, res) {
        res.write('Hello World Node Js')
        res.end() // Finaliza a resposta
}).listen(8080) // Habilita a porta 8080 (http://localhost:8080)
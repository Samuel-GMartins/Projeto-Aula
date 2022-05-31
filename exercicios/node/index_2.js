const { info } = require('console')
const http = require('http')
const url = require('url')
//Cria o objeto server
http.createServer(
    function (req, res) {
        //Escreve um cabeçalho e trata os caracteres especiais 
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        let infoUrl = req.url
        let q = url.parse(infoUrl,true).query
        let txtResult = `Título: ${q.titulo} - Ator: ${q.ator}`
        res.write(`<h1>Página: <b>${infoUrl}</b></h1> <p>Hello World Node Js - São Paulo, 31 de Maio de 2022</p>`)
        res.end(txtResult) // Finaliza a resposta
}).listen(8080) // Habilita a porta 8080
// Exemplo: (http://localhost:8080/titulo=Missão Impossivel&ator=Tom Cruise)

const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000

//Gera as urls Estáticas das imagens
app.use(express.static('node'))
app.use('/imagens',express.static('imagens'))

// Index ( Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res) => {
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    // res.end('<h1>Pagina Home</h1>')
    return res.sendFile(`${__dirname}/template_1.html`)

})

// Contato
app.get("/contato",(req,res) => {
    return res.sendFile(`${__dirname}/template_1_contato.html`)
})

// Sobre
app.get("/sobre",(req,res) => {
    return res.sendFile(`${__dirname}/template_1_sobre.html`)
})

app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))
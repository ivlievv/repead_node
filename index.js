const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) =>{

/*    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,data) => {

            if (err){
                throw err
            }

            res.writeHead(200,{
                'Content-type':'text/html'
            })

            res.end(data)

        })
    }else if (req.url === '/Contact.html'){
        fs.readFile(path.join(__dirname, 'public', '/Contact.html'), (err,data) => {

            if (err){
                throw err
            }

            res.writeHead(200,{
                'Content-type':'text/html'
            })

            res.end(data)

        })
    }*/


    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    console.log(filePath)

    res.end()
})
    server.listen(3000,() =>{
        console.log("Server is running...")
    })

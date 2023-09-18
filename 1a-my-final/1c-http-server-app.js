//this is practical reason

const http = require('http')
const {readFileSync} = require('fs')

//import files
const homePage = readFileSync('../navbar-app/index.html')
const style = readFileSync('../navbar-app/styles.css')
const logo = readFileSync('../navbar-app/logo.svg')
const logic = readFileSync('../navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{

const url = req.url

//home page
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
//style 
    }else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(style)
        res.end()
//logo
    }else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(logo)
        res.end()
//logic
    }else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(logic)
        res.end()
//error
    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('error')
        res.end()

    }
})
server.listen(5001)

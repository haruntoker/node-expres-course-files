
const http = require('http')
const {readFileSync} = require('fs')

//get all files from "navbar-app" folder
const homePageHtml = readFileSync('../navbar-app/index.html')
const homePageStyle= readFileSync('../navbar-app/styles.css')
const homePageLogo = readFileSync('../navbar-app/logo.svg')
const homeLogic = readFileSync('../navbar-app/browser-app.js')




const server = http.createServer((req, res)=>{

    const url = req.url
    
    //home page
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePageHtml)
        res.end()
    //style page
    }else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homePageStyle)
        res.end()
    //image/logo
    }else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homePageLogo)
        res.end()
    //logic
    }else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    //error
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Error - Page not found</h1>')
        res.end()
    }
    
})

server.listen(5001)



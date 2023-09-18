/**
 * In this example we use express.js to make our app with less code na effective.
 */

const express = require('express')
const path = require('path')

const app = express()

//setup static and millware
app.use(express.static('../public'))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})

app.get('*', (req,res)=>{
    res.status(404).send('Page not found >>>')
})

app.listen(5001)
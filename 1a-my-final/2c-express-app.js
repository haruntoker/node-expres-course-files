//this is practical code

const express = require('express')
const path = require('path')

const app = express()

//set up static and middleware
app.use(express.static('../public'))

//you can add 'index.html' file to 'public' folder, which is static assets, for simple webpages.
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})

app.all('*', (req,res)=>{
    res.status(404).send('Page can not be found >>>')
})


const port = 5001;

app.listen(port, ()=>{
    console.log(`App is running on port: ${port}`);
})
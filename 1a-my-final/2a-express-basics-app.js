const express = require('express')
const app = express()


app.get('/', (req,res)=>{
    res.status(200).send('Home Page >>')
})

app.get('/services', (req,res)=>{
    res.status(200).send('Our Services')
})

app.get('/contact', (req,res)=>{
    res.status(200).send('Contact us')
})

app.get('/branches', (req,res)=>{
    res.status(200).send('Our offices')
})

app.get('/news',(req,res)=>{
    res.status(200).send('News')
})

app.get('/form', (req,res)=>{
    res.status(200).send('Forms')
})

app.get('/carrer', (req,res)=>{
    res.status(200).send('Carrer Page')
})

app.all('*', (req,res)=>{
    res.status(404).send('Page not exist!!')
})

app.listen(5001, ()=>{
    console.log('server listen port 5001'); //optional to write
})

//or >> app.listen(5001)







//app.get >> by default all browser perform get request.
//app.post
//app.put
//app.delete
//app.all >> works with all of them.
//app.use >> its middware.
//app.listen >> port.

const express = require('express')
const app = express()

//req => middleware => res

//set-up middleware function =>
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next() // you must but must to pass this function, otherwise app doesnt work.
}

//home page
app.get('/',logger, (req,res)=>{
    
    res.send('Home')
})

//about page
app.get('/about', logger,(req,res)=>{
    res.send('About')
})




app.listen(5001, ()=>{
    console.log('Application listens port 5001');
})

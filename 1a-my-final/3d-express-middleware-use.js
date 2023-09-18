const express = require('express')
const app = express()
const logger = require('../middleware-1.js') //iported middleware function file.
const authorize = require('../middleware-2.js')//imported middleware function file.

//req => middleware => res

//use app.use() method to pass in middleware method file.
app.use([logger, authorize])
//app.use('/api/home/products/about',logger) => in this case midlleware function will work after the spicified path, this meand it's not gonna work on homepage.

//home page
app.get('/', (req,res)=>{
    
    res.send('Home')
})

//about page
app.get('/api/about',(req,res)=>{
    res.send('About')
})

//products page
app.get('/api/products', (req,res)=>{
    res.send('Products')
})

//items page
app.get('/api/items',[logger, authorize], (req,res)=>{ //if you want use middleware only here.
    console.log(req.user);
    res.send('Items page..')
})




app.listen(5001, ()=>{
    console.log('Application listens port 5001');
})



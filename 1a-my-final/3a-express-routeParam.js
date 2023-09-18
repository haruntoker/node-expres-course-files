const express = require("express")
const {products} = require('../data')

const app = express()


app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

//1) to get all the products with "id,name,image", and we use map() method for specific info.
app.get('/api/products', (req,res)=>{
    const listPoroduct = products.map((productParam)=>{
        const {id,name,image} = productParam
        return {id,name,image}
    })
    res.json(listPoroduct)
})

//2) using "Route Params" whic is ':' at the frond of path 
//>>its most presferred and especially when you have to work with many data..
app.get('/api/products/:IDs', (req,res)=>{
    const {IDs} = req.params;
    const productLs = products.find((productParam)=> productParam.id === Number(IDs))

    if(!productLs){
        res.status(404).send('Unvalid request..')
    }else{
        res.json(productLs)
    }
})



//to get single product with find() >>>
    // app.get('/api/products/1', (req,res)=>{
    //     const newPro = products.find((product1)=> product1.id === 1)
    //     res.json(newPro)
    // })



//port
const port = 5001

app.listen(port, (req,res)=>{
    console.log(`App listens post: ${port}`);
})
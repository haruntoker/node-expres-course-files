const express = require('express')
const {products} = require('../data')

const app = express()

//get API
app.get('/', (req,res)=>{
    res.send("<h1>Home Page</h1>, <a href='/api/products'>Products>>></a>")

})

//get specified infos from API
app.get('/api/products', (req,res)=>{
    const productsList = products.map((productParam)=>{
        const {id, name, image} = productParam
        return {id,name,image}
    })
    res.json(productsList)
})

//get all infos one by using 'route param ' according to search..
app.get('/api/products/:viewIDs', (req,res)=>{
    const {viewIDs} = req.params;
    const items = products.find((productPar)=> productPar.id === Number(viewIDs))

    if(!items){
        res.status(404).send('Request not valid!!')
    }else{
        res.json(items)
    }
})

//more complex route then aboves
app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        return sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
       return res.status(200).send('Item not exist!!!')
    }
    res.status(200).json(sortedProducts)

})








const port = 5002;

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})
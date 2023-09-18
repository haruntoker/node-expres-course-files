const express = require('express')
const route = express.Router()



//setting-up post
route.post('/', (req,res)=>{
    const {name} = req.body
    console.log(req.body); //to debug
    if(!name){
        return res.status(400).send('Enter valid creditentials!')
    }else{
        return res.status(201).send(`Welcome ${name}`)
    }
})


module.exports = route
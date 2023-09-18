/** 
 * this is base file, which is related with Routes folder
 */

const express = require('express')
const app = express()

//people.js router import
const people = require('../routes/people')
//auth.js router import
const auth = require('../routes/auth')



//static assets middleware
app.use(express.static('../methods-public'))
//parse from data middleware
app.use(express.urlencoded({extended: true}))
//parse json middleware
app.use(express.json())

//routes
app.use('/api/people', people)
app.use('/login', auth)






//port-listen
app.listen(5001, ()=>{
    console.log('App listening port 5001');
})
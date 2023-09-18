const express = require('express')
const router = express.Router()
//change from app.get,post,delete to router.get,post,delete


//import-in from >controller folder >people.js
const {
    getPeople,
    postPeople,
    postPeoplepostman,
    updatePeople,
    deletePeople
} = require('../controllers/people')

//setting-up reading data
router.get('/', getPeople) //route file is in 'controller' folder.

//setting-up adding data
router.post('/', postPeople)  //route file is in 'controller' folder.

//for testing on postman
router.post('/postman', postPeoplepostman) //route file is in 'controller' folder.


//put method - updating data
router.put('/:id', updatePeople) //route file is in 'controller' folder.


//delete method
router.delete('/:id', deletePeople) //route file is in 'controller' folder.


//export router 
module.exports = router
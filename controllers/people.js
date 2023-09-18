/**
 * This is route file of the "people.js" file in "routes" folder.
 */

//bring data in
const {people} = require('../data')

//get request
const getPeople = (req,res)=>{
    res.status(200).json({success:true, data:people})
}


//post request
const postPeople = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'provide name value'})
    }
        return res.status(201).json({success:true, person: name})
 
 
 }

 //post people postman
 const postPeoplepostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'provide name value'})
    }
        return res.status(201).json({success:true, data: [...people, name]})
}

//update people
const  updatePeople = (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(400).json({success:false, msg:`No person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
   res.status(200).json({success:true, data: newPeople})

}


//delete people
const deletePeople = (req,res)=>{

    const person = people.filter((person)=> person.id == Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false, msg: `no person with id ${req.params.id}`})

    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
}



//export out to >route folder >people.js
module.exports ={
    getPeople,
    postPeople,
    postPeoplepostman,
    updatePeople,
    deletePeople
}
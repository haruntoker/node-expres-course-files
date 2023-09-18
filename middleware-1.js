/**
 * This file hosts one of the middleware functions for the projects.
 * Functions it constains exported and will be imported to actual projet file.
 * In this case; file will be used in '1a-my-final' folder, in middleware projects.
 */


//set-up middleware function =>
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next() // you must but must to pass this function, otherwise app doesnt work.
}


module.exports = logger
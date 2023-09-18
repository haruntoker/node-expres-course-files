const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user === 'mark'){
        req.user = {name: 'mark', id:3}
        next()
    }else{
        res.status(401).send('Unauthorized.')
    }
}

module.exports = authorize
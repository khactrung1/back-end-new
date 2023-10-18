const connection = require('../config/database');
const getABC = (req,res) => {
    res.send('CheckABC')
}
const getHomepage = (req,res) => {
    return res.render('homepage.ejs');
}
const gettrung = (req,res) => {
    res.render('sample.ejs')
}
const postCreateUser =(req,res) =>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log("email =", email ,'name = ', name , 'city =',city)
    res.send('create a new user')
}

module.exports = {
    getHomepage,getABC,gettrung,postCreateUser
}   
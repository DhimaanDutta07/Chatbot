const express= require('express')
const{register,login}=require('../controllers/x')
const xrouter=express.Router()



xrouter.post('/register',register)
xrouter.post('/login',login)

module.exports={
    xrouter
}
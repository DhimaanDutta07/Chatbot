const mongoose=require('mongoose')

const userschema= new mongoose.Schema({
    Username:{
        type:String,
        require:true,
        unique:true
    },

    Email:{
        type:String,
        require:true,
    },

    Password:{
        type:String,
        require:true,
    },
})

const authusers= mongoose.model('chatbot',userschema)

module.exports= authusers;
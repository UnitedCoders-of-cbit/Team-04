const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
    
    name : {
        type : String,
        required : true
    },
    phno:{
        type: String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    sector : {
        type : String,
        
    },
    state :{
        type:String,
        required : true
    },
    district:{
        type:String,
        required:true
    },
    workplace:{
        type:String,
        required:true
    },
    date: {
        type : Date,
        default : Date.now 
    }
    
});

module.exports = mongoose.model("worker",NotesSchema)
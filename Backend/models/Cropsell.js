const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'psbuyer'
    },
    cropname : {
        type : String,
        required : true
    },
    quantity:{
        type: String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    description : {
        type : String,
        
    },
    address :{
        type:String,
        required : true
    },
    company:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    date: {
        type : Date,
        default : Date.now 
    }
    
});

module.exports = mongoose.model("notes",NotesSchema)
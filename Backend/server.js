"use strict";
const mongoose =require ('mongoose')
const express = require('express')
const path=require("path")
const mongoURI ="mongodb+srv://vigneshreddyjulakanti:9885048961@neilcodesboombackenddat.8gw5d.mongodb.net/cbit?retryWrites=true&w=majority";


const connectToMongo =async() => {

    await mongoose.connect(mongoURI ,()=>{
        console.log("Connected to mongo successfully ")
})

}
connectToMongo(); 



var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000 


app.use(express.json())
app.use(cors({
  origin:"*",
}))


app.use('/api/auth',require('./routes/auth'));
app.use('/api/workerauth',require('./routes/workerauth'));
app.use('/api/psbuyer',require('./routes/psbuyerauth'));
app.use('/api/pscroporder',require('./routes/pscroporder'));
// app.use('/api/notes',require('./routes/notes'))
app.get('/', (req, res) => {
  res.send("Welcome to boom world")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

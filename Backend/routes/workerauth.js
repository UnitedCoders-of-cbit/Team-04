const express = require("express");
const router = express.Router();
const User = require("../models/Worker");
const bcrypt = require("bcrypt");
const fetchuser=require("../middleware/fetchuser")


var jwt = require("jsonwebtoken");

const JWT_SECRET = "NOIL";




const { body, validationResult } = require("express-validator");
const { findById } = require("../models/User");
router.post("/",async(req,res)=>{
  res.send("You are in api/wokerauth")
})
router.post(
  "/createUser",
  async (req, res) => {
    let success=false;
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   return res.status(400).json({success:success, errors: errors.array() });
    // }
    try {
      let user = await User.findOne({ phno: req.body.phno }); 

      if (user) {
        console.log("phno already exists .......................");
      }

    

   user = await User.create({
        name: req.body.name,
        phno: req.body.phno,
        cost: req.body.cost,
        sector: req.body.sector,
        state: req.body.state,
        district: req.body.district,
        workplace: req.body.workplace
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      var authtoken = jwt.sign(data, JWT_SECRET);
      success=true
      res.json({success:success, authtoken,name:user.name });

      //   res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({success:success,error});
      // return res.status(400).json({"errr":"Some error occured"});
    }
  }
);

router.post(
  "/loginuser",
  async (req, res) => {
    
   
   
    let success =false;
    const errors = validationResult(req);
    

    if (!errors.isEmpty()) {
      return res.status(400).json({ success:success,errors: errors.array() });
    }
    

    let { phno } = req.body;

  
    try{
    let user = await User.findOne({ phno });
    
  
    if (!user) {
      return res
        .status(400)
        .json({ success:success,error: "Enter the valid credentials .   " });
    }

 
    
    // if (!pass_match) {
    //   return res
    //     .status(400)
    //     .json({success:success, error: "Enter the valid credentials .   " });
    // }

    const data = {
      user: {
        id: user.id,
      },
    };
   
    // var authtoken = jwt.sign(data, JWT_SECRET);
  
    success=true
    res.json({success:success});
    

    }catch(e){
      console.log(e);
    }
  }
);


router.post(
    "/userdata",
    async (req, res) => {

        try{
       const user= await User.findOne({phno:req.body.phno});
       res.json({user})
        }catch(error){
            console.log(error.message);
            res.status(500).send("Internal Server Error")
        }





    }
)

router.post("/getall",async(req,res)=>{

  try{
  let data= await User.find({sector:req.body.sector,state:req.body.state,district:req.body.district,workplace:req.body.workplace});
  res.json({data})
  } catch(error){
    console.log(error.message);
    res.status(500).send("Internal Server Error")
}
})



module.exports = router;

const express=require("express")
const router=  express.Router();

const CropSell=require("../models/Cropsell")


const { body } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
router.get("/",async (req,res)=>{
    const data=await CropSell.find({});
    res.json(data);
})

router.get("/myorders",fetchuser,async(req,res)=>{
    try {
        const data = await CropSell.find({ user: req.user.id });
        res.json(data);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
})

router.post("/",fetchuser,async(req,res)=>{
 
    
    try{
    const note_saving=new CropSell({
        cropname:req.body.cropname,
        quantity:req.body.quantity,
        description:req.body.description,
        cost:req.body.cost,
        address:req.body.address,
        company:req.body.company,
        contact:req.body.contact,
        user:req.user.id,
    })
    note_saved=await note_saving.save()

    res.json(note_saved)

}catch(e){
    res.json(e)
}
})

router.put("/",async(req,res)=>{
    try{

        let code = await CropSell.findById(req.body._id);
        let newCode={}

        

        if(req.body.cropname){
            newCode.cropname=req.body.cropname;
        }
        if (req.body.quantity){
            newCode.quantity=req.body.quantity;
        }
        if(req.body.cost){
            newCode.cost=req.body.cost;
        }
        if(req.body.address){
            newCode.address=req.body.address;
        }
        if (req.body.description){
            newCode.description=req.body.description;
        }
        if(req.body.company){
            newCode.company=req.body.company;
        }
        if(req.body.contact){
            newCode.contact=req.body.contact;
        }


        code = await CropSell.findByIdAndUpdate(
            req.body._id,
            { $set: newCode },
            { new: true }
          );
          res.json({ code });



    }catch(e){
        res.json({e});
    }
})




router.delete("/",async(req,res)=>{
    try{
    let code = await CropSell.findById(req.body._id);
    code =await CropSell.findByIdAndDelete(req.body._id);
    res.json({"Success":"Succesucfully deleted"});
    }catch(e){
        res.json({e})
    }
})



module.exports=router;
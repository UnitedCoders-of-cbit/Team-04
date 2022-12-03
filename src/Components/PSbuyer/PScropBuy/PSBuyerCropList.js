import React from 'react'
import { useContext,useEffect,useRef,useState } from 'react'
import noteContext from '../../../context/notes/notecontext'
import PSBuyerCropItem from './PSBuyerCropItem'
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const a=useContext(noteContext)
  const {myorders,fetchmyorders} = a;
 
    const navigate=useNavigate();

    useEffect(() => {
      
      
      
    
      if(!localStorage.getItem("authtoken")){
        navigate("/")
  
      }else{  
   
        fetchmyorders();}

     
     
    },[])


    // let notes=fanotes;

    const [enote, setenote] = useState({ecropname:"",equantity:"",ecost:"",edescription:"",eaddress:"",ecompany:"",econtact:""})

    const ref = useRef(null)
    const closeref = useRef(null)
    const handleclick=(note)=>{
        ref.current.click();
        setenote({ecropname:note.cropname,equantity:note.quantity,ecost:note.cost,edescription:note.description,eaddress:note.address,ecompany:note.company,econtact:note.contact,eid:note._id})


    }

    const ehandleonchange =(e)=>{
        setenote({...enote,[e.target.name]: e.target.value})


    }

    const handdleupdateclick =()=>{
        
            a.editNote(enote.ecropname,enote.equantity,enote.ecost,enote.edescription,enote.eaddress,enote.ecompany,enote.econtact,enote.eid);
            closeref.current.click();
        
    }






    return (

        <>
        <button hidden ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
     
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Order Update</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" >


              <div className="mb-3">
            <label htmlFor="ecropname" className="form-label">Crop Name</label>
            <input style={{"color":"black"}} value={enote.ecropname} type="text" name='ecropname' className="form-control" id="ecropname" onChange={ehandleonchange}/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="equantity" className="form-label">Quantity </label>
            <input style={{"color":"black"}} value={enote.equantity} type="text"   name="equantity" className="form-control" id="equantity" onChange={ehandleonchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="ecost" className="form-label">cost</label>
            <input style={{"color":"black"}} value={enote.ecost} type="text" name='ecost' className="form-control" id="ecost"  onChange={ehandleonchange} />
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">description</label>
            <input style={{"color":"black"}} value={enote.edescription} type="text" name='edescription' className="form-control" id="edescription" onChange={ehandleonchange}/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="eaddress" className="form-label">address</label>
            <input style={{"color":"black"}} value={enote.eaddress} type="text"   name="eaddress" className="form-control" id="eaddress" onChange={ehandleonchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="econtact" className="form-label">contact</label>
            <input style={{"color":"black"}} value={enote.econtact} type="text" name='econtact' className="form-control" id="econtact"  onChange={ehandleonchange} />
          </div>
         
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
                <button type="button" className="btn btn-primary"   onClick={handdleupdateclick}>Update</button>
              </div>
            </div>
          </div>
        </div>




        <div>
             <div className='container my-3'>

             <div   className='d-flex justify-content-center'><h2>Your Orders</h2></div>
{ myorders.length === 0 && "You have Zero Orders."}

<div className='row my-3'>
{


    
    myorders.map((crop)=>{
       
       return  <PSBuyerCropItem key={crop._id} _id={crop._id} cropname={crop.cropname} quantity={crop.quantity} description={crop.description} address={crop.address} cost={crop.cost} company={crop.company} contact={crop.contact} note={crop} handleclick={handleclick}/>
    })
     

}
</div>

</div>
            
        </div>
        </>
    )
}

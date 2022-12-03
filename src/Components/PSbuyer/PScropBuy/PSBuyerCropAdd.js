import React from 'react'
import { useContext ,useState} from 'react'
import noteContext from '../../../context/notes/notecontext'

export default function PSBuyerCropAdd() {
  let companyn=localStorage.getItem("company");
  console.log(companyn);
  const context = useContext(noteContext)
  const [note, setnote] = useState({cropname:"",quantity:"",cost:"",description:"",address:"",company:"",contact:""})
  const clickhandle=(e)=>{
      e.preventDefault()
      context.addNote(note.cropname,note.quantity,note.cost,note.description,note.address,companyn,note.contact);
      setnote({cropname:"",quantity:"",cost:"",description:"",address:"",company:"",contact:""})

  }
  const handleonchange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
  }

    return (
        <>
        <div className='container'>
  

  <form >
    <div className="mb-3 my-3">
      <p className='d-flex justify-content-center'><h2>Place your Order</h2></p>
      <label htmlFor="exampleInputEmail1" className="form-label"> <h5>Crop Name</h5>  </label>
      <input name="cropname"  onChange={handleonchange} className="form-control mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{"width":"20%","color":"black"}} placeholder="crop name"/>
      <br></br>
      <label htmlFor="exampleInputEmail1" className="form-label"> <h5>Quantity</h5>  </label>
      <input name="quantity" onChange={handleonchange} className="form-control mx-2 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex : 1 ton" style={{"width":"20%","color":"black"}} />
      <br></br>
      <label htmlFor="exampleInputEmail1" className="form-label"> <h5>Cost</h5>  </label>
      <input name="cost" onChange={handleonchange} className="form-control mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{"width":"20%","color":"black"}} placeholder="ex : Rs 3000 / ton " /><br></br>
      <label htmlFor="exampleInputEmail1" className="form-label"> <h5>Phone Number</h5>  </label>
      <input name="contact" onChange={handleonchange} className="form-control mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{"width":"20%","color":"black"}} placeholder="Phone Number"/>
      
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label"><h5>Description</h5></label>
      <input name="description" onChange={handleonchange} className="form-control mx-2" id="exampleInputPassword1" style={{"color":"black"}} placeholder="message to farmers"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label"><h5>Address</h5></label>
      <input name="address" onChange={handleonchange} className="form-control mx-2" id="exampleInputPassword1" style={{"color":"black"}} placeholder="address of order"/>
    </div>
  
  
  
 <div className='d-flex justify-content-center'>
    <button className='btn btn-primary my-3' onClick={clickhandle}>Order</button>
    </div>
  </form>
  
  
  </div>
                <hr className='my-3'></hr>

                
                </>
    )   
}

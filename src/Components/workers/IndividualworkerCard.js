import React from 'react'
import { useState } from 'react'

export default function IndividualworkerCard(props) {
    const [phno, setphno] = useState(false);
  return (
    <div>

<div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            
            <div className="row p-2 bg-white border rounded mt-2 d-flex justify-content-between">
                
                <div className="col-md-6 mt-1">
                    <h5>Crop Name : {props.name}</h5>
                    <div className="d-flex flex-row">
                       
                       
                    </div>
                    <p className="text-justify para mb-0">Cost Per Hour : {props.cost}</p>
                    <p className="text-justify para mb-0">Sector : {props.sector}</p>
                    <div className="mt-1 mb-1 spec-1"><span>Location : </span><span className="dot"></span><span>{props.state+", "+props.district+", "+props.workplace}</span><span className="dot"></span></div>
                    {/* <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br/></span></div> */}
                    {/* <p className="text-justify para mb-0">Description : {props.description}</p> */}
                    <br/><br/>
                    
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1 ml-3">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">{props.cost}</h4><span className="strike-text"></span>
                    </div>
                    {/* <h6 className="text-success">Includhipping</h6> */}
                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button" onClick={
                        ()=>{ phno ? setphno(false): setphno(true) }}>SELL</button>
                    {
                        phno &&
                        <p className="text-justify para mb-0 my-2 ">contact no : {props.phno}</p>
                    }
                    {/* <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

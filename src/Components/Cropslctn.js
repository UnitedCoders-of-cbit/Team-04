import React from 'react'


export default function Cropslctn() {

    const clickHandle = () => {
        // a.prerventDefault()
        const res = document.getElementById('ph').value;
        if(res <= 5) {
            
            document.getElementById('result').innerHTML = "PADDY"
            
        }else{
            
            document.getElementById('result').innerHTML = "TOMATO"
        }
    }

  return (
    <div className='slctn'>
            
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Type of Soil : </label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type of soil"/>
        
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Ph of Soil :</label>
        <input type="number" className="form-control" id="ph" placeholder="enter ph"/>
    </div>
    
    <button onClick={clickHandle} type="submit" className="btn btn-primary">Submit</button>

        <h2 className='rescol' id="result"></h2>
    
    </div>
  )
}

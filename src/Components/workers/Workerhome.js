import React from 'react'
import { useEffect } from 'react'
import noteContext from '../../context/notes/notecontext';
import { useContext,useState } from 'react';
export default function Workerhome
() {

 
    const [wd,setwd] = useState({user:{
      cost: "678",
      date: "2022-12-02T20:48:01.692Z",
      district: "Mahabubabad",
      name: "vishnu vardhan  reddy",
      phno: "+916281655780",
      sector: "Harversting",
      state: "Telangana",
      workplace: "Garla"
    }})


    const boom =useContext(noteContext)
    const {host}=boom;

    const getdetails=async ()=>{
        try{
        
        
        const response = await fetch(`${host}/api/workerauth/userdata`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // cors, *no-cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
           
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"phno":localStorage.getItem("workerphno")})

        });

        // console.log(response)
        // console.log("sending request")
        let res=await response.json(); // parses JSON response into native JavaScript objects
        // console.log("respose reached")
        console.log(res)
            ;
            setwd(res);
          localStorage.setItem("workerauthtoken",res.authtoken);
          

        
      }catch(error){
        console.log(error)
        document.getElementById("worker_signin_error").innerHTML=error
      }
    }

    useEffect(()=>{
            getdetails()
    }
        , [])
  return (
    <div className='wdb'>
    <p id='worker_signin_error'></p>
    <div className='container' id='workerhome'>

        <button className='btn btn-success my-3'><a href='/'>back</a></button>

        <div className="card align-middle" style={{width: "18rem;"}}>
        <div className="card-header">
          Your Details
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cost : {wd.user.cost}</li>

          <li className="list-group-item">Date : {wd.user.date}</li>

          <li className="list-group-item">District : {wd.user.district}</li>

          <li className="list-group-item">Name : {wd.user.name}</li>
          <li className="list-group-item">Phone number : {wd.user.phno}</li>
          <li className="list-group-item">Sector : {wd.user.sector}</li>

          <li className="list-group-item">State : {wd.user.state}</li><li className="list-group-item">Workplace : {wd.user.workplace}</li>



        </ul>
      </div>
  


    </div>
    </div>
  )
}

import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import noteContext from '../../context/notes/notecontext';

import { firebase, auth } from './firebase';


export default function Workersignin() {


  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');


  const sendotp = () => {
  
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
        setfinal(result);
        alert("code sent")
        setshow(true);
    })
        .catch((err) => {
          console.log(err)
            alert(err);
            // window.location.reload()
        });
}

const ValidateOtp = () => {
  if (otp === null || final === null)
      return;
  final.confirm(otp).then((result) => {
      // success
      signin()
     
      
  }).catch((err) => {
      alert("Wrong code");
  })
}








    const navigate = useNavigate()

    const boom =useContext(noteContext)
    const {host}=boom

    const [credentials, setcredentials] = useState({email:"",password:""})
    
    const signin=async ()=>{
        try{
    
        const response = await fetch(`${host}/api/workerauth/loginuser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // cors, *no-cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
           
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"phno":mynumber})
        });

        // console.log(response)
        // console.log("sending request")
        let res=await response.json(); // parses JSON response into native JavaScript objects
        // console.log("respose reached")
        if(res.success){
          localStorage.setItem("workerphno",mynumber);
          navigate("/workerhome")

        }else{
            alert("Enter valid details")
        }
      }catch(error){
        console.log(error)
        document.getElementById("signin_error").innerHTML=error
      }
    }


      const handleonchange=(e)=>{
          setcredentials({...credentials,[e.target.name]:e.target.value})
      }


    return (
        <>
      
        <p id='signin_error'>

        </p>












        

<script src="https://use.fontawesome.com/1dec14be15.js"></script>
    <div className="container-fluid stylish-form" style={{"height":"100%"}}>  
      <h2 className="text-center">WELCOME</h2>
      <div className="row mar20" >
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="inner-section">
           
              <div className="mar20 inside-form">
                <h2 className="font_white text-center">SIGN IN</h2>
                  {/* <ul>
                    <li className="icon-holder dsp-flex">
                      <i className="fa fa-facebook "></i>
                    </li>
                    <li className="icon-holder dsp-flex">
                      <i className="fa fa-twitter "></i>
                    </li>
                    <li className="icon-holder dsp-flex">
                      <i className="fa fa-instagram "></i>
                    </li>
                  </ul> */}
               <p className='text-light'>Phone Number       </p>
               <div className="form-group" style={{ display: !show ? "block" : "none" }}>
    <label htmlFor="email">Email address</label>
    <input name="phno" className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter email" value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }}/>
   
  </div>
  <div id="recaptcha-container"></div>
  <button onClick={sendotp}>Send OTP</button>
  <div className="form-group"  style={{ display: show ? "block" : "none" }}>
    <label htmlFor="email">Password</label>
    <input type="password" name='password' className="form-control" id="email"  placeholder="Password"  onChange={(e) => { setotp(e.target.value) }}/>
  </div>
  <button onClick={ValidateOtp}>Verify</button>
                <button className='text-light btn-primary'   ><Link className='text-light' to="/workersignin">Have an account ? Signin</Link>  </button>
              </div>
         
          </div>
        </div>
      </div>
      {/* <a href="fb.com/ervijender"><h2 className="text-center font_white">Farmers are Backbone to India</h2></a> */}
      <br>
      </br>
      <br>
      </br>
      <br></br>
      <br>
      </br>
    </div>
        </>
    )
}
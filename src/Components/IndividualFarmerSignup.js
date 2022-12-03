import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";
import noteContext from '../context/notes/notecontext';
import { Link } from 'react-router-dom';



export default function Login() {

    const navigate = useNavigate();

    const boom =useContext(noteContext);
    console.log(boom);
    const {host}=boom;

    const [credentials, setcredentials] = useState({name:"",email:"",password:""})
    
    const signup=async (a)=>{
        a.preventDefault();
        const response = await fetch(`${host}/api/auth/createUser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-no-cors, *no-cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            
           
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"name":credentials.name,"email":credentials.email,"password":credentials.password})
        });
        let res=await response.json(); // parses JSON response into native JavaScript objects
        if(res.success){
            localStorage.setItem("authtoken",res.authtoken);
            localStorage.setItem("name",res.name);
            navigate("/individualfarmerhome/carousal")

        }else{
            alert("Enter valid details or account already exists")
        }
      }


      const handleonchange=(e)=>{
          setcredentials({...credentials,[e.target.name]:e.target.value})
      }


    return (
      <>
     






<script src="https://use.fontawesome.com/1dec14be15.js"></script>
    <div className="container-fluid stylish-form" style={{"height":"100%"}}>  
      <h2 className="text-center">WELCOME</h2>
      <div className="row mar20" >
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="inner-section">
            <form method="POST">
              <div className="mar20 inside-form">
                <h2 className="font_white text-center">SIGN UP</h2>
                  
                  <p className='text-light'>Name      </p>
                <div className="input-group">
                  <span className="input-group-addon"><i className=""></i></span>
                  <input type="text" className="form-control" name="name" placeholder="Name..." onChange={handleonchange}/>
                </div>
                <p className='text-light'>Phone Number       </p>
                <div className="input-group">
                  <span className="input-group-addon"><i className=""></i></span>
                  <input type="tel" className="form-control" name="email" placeholder="Phno..." onChange={handleonchange}/>
                </div>
                <p className='text-light'>Password       </p>
                <div className="input-group">
                  <span className="input-group-addon"><i className=""></i></span>
                  <input type="password" className="form-control" name="password" placeholder="Password..." onChange={handleonchange}/>
                </div>
                <div className="footer text-center">
                  <a onClick={signup} className="btn btn-neutral btn-round btn-lg">Signup</a>
                </div>
                <button className='text-light'   ><Link className='text-light' to="/individualfarmersignin">Have an account ? Signin</Link>  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     {/* <h2 className="text-center font_white">Farmers are Backbone to India</h2> */}
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

import React from 'react'
import sath from './../assests/farmerhome/sath.jpg'
import { Link, useNavigate } from 'react-router-dom';


export default function IndividualFarmerNavbar(props) {
  let Navigate=useNavigate();

  return (
    <>
    <div className='my-2'>
      <span>
    <img className="imageIndia" src={sath}/>
    <h2 className="titl my-1">
        AGRICULTURE FOOD TECH AND RURAL DEVELOPMENT
    </h2>
    
    {/* <h3 className="italic">Ministry Of Commerce Government Of India</h3> */}
   </span> 
   </div>


    <nav className="navbar navbar-expand-lg navbar-success bg-success">
        
        <div className="container-fluid">
            
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
            
                
                <div id='welcomefarmer'>
            Welcome {props.farmername}
            </div>
              </li>


              <li className="nav-item mx-3 ">
               
                <Link className="nav-link active text-light" aria-current="page" to="/individualfarmerhome/carousal">Home</Link>     
              </li>
              
              <li className="nav-item mx-3 ">
               
                <Link className="nav-link active text-light" aria-current="page" to="/individualfarmerhome/indianmap">Indian Map</Link>     
              </li>
              {/* <!-- <li className="nav-item">
                <a className="nav-link text-light" href="#">General Info</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Schemes</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link text-light" href="#">Stastics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Buyer Seller</a>
              </li> --> */}


              <li className="nav-item mx-3 ">
               
                <Link className="nav-link active text-light" aria-current="page" to="/individualfarmerhome/schemes">Schemes</Link>     
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/individualfarmerhome/carousal/wether">Weather</Link>  
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Chat Page
                  </a>
                
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>

            <button onClick={()=>{
  localStorage.clear();
  Navigate("/");
}}>Logout</button>

               
          
          </div>
        </div>
      </nav>
    </>
  )
}

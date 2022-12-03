import React from 'react'
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import IndividualFarmerCarousal from './IndividualFarmerCarousal';
import IndividualFarmerNavbar from './IndividualFarmerNavbar';

export default function IndividualFarmerhome() {
var farmername=localStorage.getItem("name");
let Navigate=useNavigate();

// if(!localStorage.getItem("stopreload")){
//   window.location.reload();
//   localStorage.setItem("stopreload","yes")
// }

  return (

    <>

  <IndividualFarmerNavbar farmername={farmername}/>
  <Outlet></Outlet>
  {/* <IndividualFarmerCarousal/> */}
  

  


{/* <Link to="/individualfarmerhome/individualfarmercropselling">go to farmers selling</Link> */}



    </>
  )
}

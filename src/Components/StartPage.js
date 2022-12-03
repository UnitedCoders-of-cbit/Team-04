import React from 'react'
import Farmer from '../assests/startPage/Farmer.png'
import Privatesector from '../assests/startPage/Privatesector.jpg'
import '../myStyles/StartPageCSS.css'
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react'


export default function StartPage() {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement('google_element_ifh')
       }
       useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, [])


const [farmersubfunactivate, setfarmersubfunactivate] = useState(false);
const [privatesubfunactivate, setprivatesubfunactivate] = useState(false);

function farmersubfun(){
    if(!farmersubfunactivate){
        setfarmersubfunactivate(true);
    }else{
        setfarmersubfunactivate(false);
    }
}   

function privatesubfun(){
    if(!privatesubfunactivate){
        setprivatesubfunactivate(true);
    }else{
        setprivatesubfunactivate(false);
    }
    
    }

  return (
   <>
   <div className='homeback' style={{"backgroundColor":"black" , "background":"black" ,"height":"49vw"}}>
  
    <h1 className='awp'> AGRICULTURE WEB PORTAL</h1>
    {"\n"}

    <div style={{"backgroundColor":"black"}}>
    <Link to="/individualfarmersignin"><img className='startpageimg' id="farmerimg" src={Farmer} /></Link>
    <Link to="/psbuyersignup"><img className='startpageimg' id="privateimg"  src={Privatesector}/></Link>
    <button id="farmer" className='startpagebutton my-3' style={{"backgroundColor": "black"}} onClick={farmersubfun}> FARMER</button>
    <div id="farmersub">
        {
    farmersubfunactivate &&
    <>
    <p><Link className='sublink' to='/individualfarmersignin' >Individual farmers </Link></p>
    {/* <p> <a className='sublink' href='' >Farmer groups </a></p><p><a className='sublink' href='' > Farmer cooperatives </a></p><br></br> */}
    </>                                     
    
        }
        </div>   
               
    
    
    <button id="private" className='startpagebutton my-3' style={{"backgroundColor": "black"}} onClick={privatesubfun}>PRIVATE SECTOR</button>
<div id="privatesub"> 

{
        privatesubfunactivate &&
    <>
    <p><a className='sublink' href='' >Manufacturers/ Wholesalers/Dealers of inputs </a></p><p> <Link className='sublink' to='/workersignup' > workers    </Link></p><p><Link className='sublink' to='/psbuyersignup' >Traders,Buyers and Commodity Exchanges </Link></p><br/>
    </>
}


    </div>

</div>


<div id='google_div'>
<p id='google_head_id'>
Select Language
</p>
<div id='google_element_ifh'></div>
</div>
</div>
   </>
  )
}



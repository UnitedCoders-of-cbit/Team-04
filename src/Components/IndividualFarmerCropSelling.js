import React from 'react'
import IndividualFarmerCropSellCard from './IndividualFarmerCropSellCard'
import noteContext from '../context/notes/notecontext'
import { useContext,useEffect,useRef,useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function IndividualFarmerCropSelling() {
    let indcrops=[{"id":"1","cropname":"Tamato","quantity":"4 Tones","description":"I will never buy your crop","address":"i am anonymous","cost":"Rs 5000 / tone","company":"bam","contact":"7382956067"},{"id":"2","cropname":"Tamato2","quantity":"4 Tones","description":"I will never buy your crop","address":"i am anonymous","cost":"Rs 4000 / tone","company":"boom","contact":"7382956067"}]


    const a=useContext(noteContext)
    const {fanotes,fetchallnotes} = a;
   
      const navigate=useNavigate();
  
      useEffect(() => {
        
        
        
      
        if(!localStorage.getItem("authtoken")){
          navigate("/")
    
        }else{  
     
          fetchallnotes();}
  
       
       
      },[])
  return (
      <>

    <h2 className='my-3 d-flex justify-content-center'>SELL YOUR CROP</h2>
    <h5 className='my-3 d-flex justify-content-center'>
    { fanotes.length === 0 && "No orders"}
    </h5>
{
    
    fanotes.map((crop)=>{
     return <IndividualFarmerCropSellCard key={crop.id} cropname={crop.cropname} quantity={crop.quantity} description={crop.description} address={crop.address} cost={crop.cost} company={crop.company} contact={crop.contact}></IndividualFarmerCropSellCard>
    })
}
  

</>
  )
}

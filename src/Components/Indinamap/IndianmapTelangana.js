import React, { useState ,useEffect} from 'react'

import { useLocation, useRoutes } from 'react-router-dom'
import telanganadistricts from './../../assests/farmerhome/telanganadistricts.png'
export default function IndianmapTelangana() {
  // let location=useLocation();
  // let routename=useRoutes();
  // useEffect(() => {
  //   stopspeach();
  // }, [routename.name])
  
  function speak(sentence) {
                        
    const utterance = new SpeechSynthesisUtterance(sentence)
    window.speechSynthesis.speak(utterance)
    
  }
  function stopspeach(){
    window.speechSynthesis.cancel();
  }
  const [speaking, setspeaking] = useState(false)
  console.log(speaking)
  function startSpeaking(){
    if(tstablespeaking){
      stopspeach()
      settstablespeaking(false);
    }
    if(speaking){
      stopspeach();
      setspeaking(false);
    }else{
      setspeaking(true);
      speak("Telangana grows 27 important crops in Kharif and Rabi seasons put together covering an area of about 53.51 lakh ha. The important crops grown are Rice (14.19) lakh ha, Maize (6.63) lakh ha, Pulses (6.11) lakh ha, Groundnut (1.89) lakh ha, Cotton (18.13) lakh ha, Chillies (0.83) lakh ha and Sugarcane (0.41) lakh ha.")
      var myTab = document.getElementById('telanganacropstable');

      
        for (let i = 1; i < myTab.rows.length; i++) {



         
            var objCells = myTab.rows.item(i).cells;

           
            for (var j = 0; j < objCells.length; j++) {
                if(j==0){
                    continue;
                }
                
                var k=objCells.item(j).innerHTML;
                speak (myTab.rows.item(0).cells.item(j).innerHTML )
                speak (k );
                // alert(k);
                
            } 
    }

    speak("Rythu Bandhu scheme also Farmer's Investment Support Scheme (FISS) is a welfare program to support farmer’s investment for two crops a year by the Government of Telangana.[2] The government is providing 58.33 lakh (5.8 million) farmers ₹5000 per acre per season to support the farm investment, twice a year, for rabi(Yasangi) and kharif(Rainy) seasons.[3][4] This is a first direct farmer investment support scheme in India, where the cash is paid directly.[5] The scheme The scheme offers a financial help of ₹10,000 per year to each farmer (two crops). There is no cap on the number of acres, and most of the farmers are small and marginal. The total farming land is 1.43 crore acres and the number of farmers in the state stood at 58.33 lakh. Around 55% of population in Telangana make a living from agriculture. The agriculture land holdings are: Land Extent No. of farmers Total Acres Est.Cost under 1 acre 18 lakhs 18 lakhs 14.4 billionAs of 16 February 2020, 30.8% under 1-2 acres 24 lakhs 48 lakhs 38.4 billion 41.9% under 3-5 acres 11 lakhs 44 lakhs (avg) 35.2 billion 18.8% 5-10 acres 4.4 lakhs 33 lakhs (avg) 26.4 billion 7.5% > 10 acres 94,000 9.4 lakhs 7.52 billion 1.6% > 25 acres 6488 1.62 lakhs 1.3 billion 0.1% > 50 acres 298 14900 119 million 0.005 {"%"} go to farmers selling ")


    }
    
    
  }

const [tstablespeaking, settstablespeaking] = useState(false)
  let speaktelanganatablecrop=()=>{
    if(speaking){
      stopspeach()
      setspeaking(false)
    }
    if(tstablespeaking){
      stopspeach();
      settstablespeaking(false);
    }else{

      settstablespeaking(true);

    var myTab = document.getElementById('telanganacropstable');

      
    for (let i = 1; i < myTab.rows.length; i++) {

     
        var objCells = myTab.rows.item(i).cells;

       
        for (var j = 0; j < objCells.length; j++) {
            if(j==0){
                continue;
            }
            
            var k=objCells.item(j).innerHTML;
            
            speak (myTab.rows.item(0).cells.item(j).innerHTML )
            speak(k );
            // alert(k);
            
        } 
}
    }

  }
  return (
    <div className='container'>
        <h2 className='d-flex justify-content-center' style={{"color":"red"}}>Telangana</h2>
        <button className='btn btn-danger my-2' onClick={startSpeaking}>{speaking ? "stop": "Speak out"}</button>
        <p>Telangana grows 27 important crops in Kharif and Rabi seasons put together covering an area of about 53.51 lakh ha. The important crops grown are Rice (14.19) lakh ha, Maize (6.63) lakh ha, Pulses (6.11) lakh ha, Groundnut (1.89) lakh ha, Cotton (18.13) lakh ha, Chillies (0.83) lakh ha and Sugarcane (0.41) lakh ha.</p>
        <div className='d-flex justify-content-center'>
        <img id='telanganadistrictsmap' src={telanganadistricts}></img>

        </div>
        <button className='btn btn-danger my-2' onClick={speaktelanganatablecrop}>{tstablespeaking ? "stop": "Speak out"}</button>
        <table className="table table-bordered my-3" id='telanganacropstable'>
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Crop</th>
      <th scope="col">Quantity produced</th>
      <th scope="col">Highest producing district</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Paddy</td>
      <td>94.54 lakh Metric Tones</td>
      <td>Kamareddy District</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Wheat</td>
      <td>80 lakh Metric Tones</td>
      <td>Medak District</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cotton</td>
      <td>518463 qtls</td>
      <td>kamareddy District</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jowar</td>
      <td>5 lakh Metric Tones</td>
      <td>Adilabad</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Maize</td>
      <td>16 lakh tones</td>
      <td>Nalgonda</td>
    </tr>
 
 
  </tbody>
</table>

Rythu Bandhu scheme also Farmer's Investment Support Scheme (FISS) is a welfare program to support farmer’s investment for two crops a year by the Government of Telangana.[2] The government is providing 58.33 lakh (5.8 million) farmers ₹5000 per acre per season to support the farm investment, twice a year, for rabi(Yasangi) and kharif(Rainy) seasons.[3][4] This is a first direct farmer investment support scheme in India, where the cash is paid directly.[5]

The scheme The scheme offers a financial help of ₹10,000 per year to each farmer (two crops). There is no cap on the number of acres, and most of the farmers are small and marginal. The total farming land is 1.43 crore acres and the number of farmers in the state stood at 58.33 lakh. Around 55% of population in Telangana make a living from agriculture. The agriculture land holdings are: Land Extent No. of farmers Total Acres Est.Cost under 1 acre 18 lakhs 18 lakhs 14.4 billionAs of 16 February 2020, 30.8% under 1-2 acres 24 lakhs 48 lakhs 38.4 billion 41.9% under 3-5 acres 11 lakhs 44 lakhs (avg) 35.2 billion 18.8% 5-10 acres 4.4 lakhs 33 lakhs (avg) 26.4 billion 7.5% {'>'} 10 acres 94,000 9.4 lakhs 7.52 billion 1.6% {">"} 25 acres 6488 1.62 lakhs 1.3 billion 0.1% {">"} 50 acres 298 14900 119 million 0.005%

    </div>
  )
}

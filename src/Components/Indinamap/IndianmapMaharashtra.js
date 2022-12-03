import React, { useState ,useEffect} from 'react'

import { useLocation, useRoutes } from 'react-router-dom'
import telanganadistricts from './../../assests/farmerhome/telanganadistricts.png'
export default function IndianmapMaharashtra() {
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
      speak("Agriculture continues to be the main occupation of the people of Maharashtra. Majority of the people directly or indirectly depend on agriculture and allied activities for their livelihood. ")
      var myTab = document.getElementById('telanganacropstable');

      
        for (let i = 1; i < myTab.rows.length; i++) {



         
            var objCells = myTab.rows.item(i).cells;

           
            for (var j = 0; j < objCells.length; j++) {
                if(j===0){
                    continue;
                }
                
                var k=objCells.item(j).innerHTML;
                speak (myTab.rows.item(0).cells.item(j).innerHTML )
                speak (k );
                // alert(k);
                
            } 
    }

    speak("Maharashtra is a leading State in agriculture. Principal crops grown in the State are rice, jowar, bajra, wheat, tur, mung, urad, gram and other pulses. The State is a major producer of oilseeds. Groundnut, sunflower, soyabean are the major oil seed crops. Major portion of the state is semi arid with three distinct season of which rainy season comprises of July to September. There are large variations in the quantity of rainfall within different parts of the state. Ghat and coastal districts receive an annual rainfall of 2000 mm but most part of the state lies in the rain shadow belt of the ghat with an average of 600 to 700 mm. The rainfall variations from 500 to 3000 mm have been recorded with an average of 1000 mm distributed over 60-70 days. Net irrigated area in 1999-2000 was 25.7 lakh hectares (gross 33.7 lakh hectares). Principle crops grown in the state are rice, jowar, bajara, wheat, tur, mung, urad, gram and other pulses. The state is major producer of oilseeds. Groundnut, sunflower, soybean are major oil seed crops. Important cash crops grown are cotton, sugarcane, turmeric and vegetables. The state has an area of 10.91 lakh hectares under various fruit crops like mango, banana, orange, grape and cashew nut etc.  ")


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
            if(j===0){
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
        <h2 className='d-flex justify-content-center' style={{"color":"red"}}>Maharashtra</h2>
        <button className='btn btn-danger my-2' onClick={startSpeaking}>{speaking ? "stop": "Speak out"}</button>
        <p>Agriculture continues to be the main occupation of the people of Maharashtra. Majority of the people directly or indirectly depend on agriculture and allied activities for their livelihood. </p>
        <div className='d-flex justify-content-center'>
        <img id='telanganadistrictsmap' src={telanganadistricts} />

        </div>
        <button className='btn btn-danger my-2' onClick={speaktelanganatablecrop}>{tstablespeaking ? "stop": "Speak out"}</button>

        <table className="table table-bordered my-3" id='telanganacropstable'>
        <tr>
            <th scope="col">S.No</th>
            <th scope="col">Crop</th>
            <th scope="col">Quantity produced</th>
            <th scope="col">Highest Producing district</th>

          </tr>
          <tr>
            <td scope="row">1</td>
            <td>Jowar</td>
            <td>98.4 lakh metric tons</td>
            <td>Ahmednagar</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Millet</td>
            <td>78 lakh metric tons</td>
            <td>Thane</td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td>Cotton</td>
            <td>715241 qtls</td>
            <td>Yavatamal,Akola</td>
          </tr>
          <tr>
            <td scope="row">4</td>
            <td>Wheat</td>
            <td>10 metric tons</td>
            <td>Nashik</td>
          </tr>
          <tr>
            <td scope="row">5</td>
            <td>Sugarcane</td>
            <td>137 lakh tons</td>
            <td>Solapur</td>
          </tr>
      </table>

        

      Maharashtra is a leading State in agriculture. Principal crops grown in the State are rice, jowar, bajra, wheat, tur, mung, urad, gram and other pulses. The State is a major producer of oilseeds. Groundnut, sunflower, soyabean are the major oil seed crops. Major portion of the state is semi arid with three distinct season of which rainy season comprises of July to September. There are large variations in the quantity of rainfall within different parts of the state. Ghat and coastal districts receive an annual rainfall of 2000 mm but most part of the state lies in the rain shadow belt of the ghat with an average of 600 to 700 mm. The rainfall variations from 500 to 3000 mm have been recorded with an average of 1000 mm distributed over 60-70 days. Net irrigated area in 1999-2000 was 25.7 lakh hectares (gross 33.7 lakh hectares). Principle crops grown in the state are rice, jowar, bajara, wheat, tur, mung, urad, gram and other pulses. The state is major producer of oilseeds. Groundnut, sunflower, soybean are major oil seed crops. Important cash crops grown are cotton, sugarcane, turmeric and vegetables. The state has an area of 10.91 lakh hectares under various fruit crops like mango, banana, orange, grape and cashew nut etc.  

    </div>
  )
}

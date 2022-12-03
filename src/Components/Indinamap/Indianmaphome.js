import React from 'react'
import Indianmapimg from './../../assests/farmerhome/indianmapimg.jpg'
import Placeholdermap from './../../assests/farmerhome/placeholder.png'
import { useNavigate } from 'react-router-dom'
export default function Indianmaphome() {
    
    const navigate = useNavigate();
  return (
<>
<div className='container'>
<h2 className=' d-flex justify-content-center'>
select a state</h2>

<div className='container d-flex justify-content-center'>

<img src={Indianmapimg} width="70%"></img>



</div>
<img src={Placeholdermap} className="mappointer" id="telanganamappointer" onClick={()=>{navigate("/individualfarmerhome/telangana")}}></img>

<img src={Placeholdermap} className="mappointer" id="maharastramappointer" onClick={()=>{navigate("/individualfarmerhome/maharashtra")}}></img>
</div>
</>
  )
}

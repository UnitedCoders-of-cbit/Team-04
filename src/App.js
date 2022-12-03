
import './App.css';
import StartPage from './Components/StartPage';
import {  Routes, Route } from "react-router-dom";
import IndividualFarmerSignup from './Components/IndividualFarmerSignup'
import IndividualFarmerSignin from './Components/IndividualFarmerSignin'
import IndividualFarmerhome from './Components/IndividualFarmerhome';
import IndividualFarmerCropSelling from './Components/IndividualFarmerCropSelling';
import PSHome from './Components/PSbuyer/PSHome';
import PSBuyersignin from './Components/PSbuyer/PSBuyersignin';
import PSBuyersignup from './Components/PSbuyer/PSBuyersignup';
import PSBuyerCrop from './Components/PSbuyer/PScropBuy/PSBuyerCrop'
import NoteState from "./context/notes/NoteState"
import Indianmaphome from './Components/Indinamap/Indianmaphome';
import IndividualFarmerCarousal from './Components/IndividualFarmerCarousal';
import IndianmapTelangana from './Components/Indinamap/IndianmapTelangana'
import Irrigationhome from './Components/irrigation/irrigationhome';
import Irrigationhome1 from './Components/irrigation/detailspages/Fdetails1';
import Irrigationhome2 from './Components/irrigation/detailspages/Fdetails2';
import Irrigationhome3 from './Components/irrigation/detailspages/Fdetails3';
import Seeds from './Components/seedselection/Seeds';
import Wheetseed from './Components/seedselection/Wheetseed';
import Tomatoseed from './Components/seedselection/Tomatoseed';
import Paddyseed from './Components/seedselection/Paddyseed';


import Wether from './Components/Wether';



import IndianmapMaharashtra from './Components/Indinamap/IndianmapMaharashtra';
import Workersignup from './Components/workers/Workersignup';
import Workersignin from './Components/workers/Workersignin';
import Workerhome from './Components/workers/Workerhome';
import Farmerworker from './Components/workers/Farmerworker';
import Cropslctn from './Components/Cropslctn';
import Schemes from './Components/Schemes';


function App() {
  return (
<>
<NoteState>
<Routes>
<Route path="/" element={<StartPage />} />
<Route path="/individualfarmersignup" element={<IndividualFarmerSignup />} />
<Route path="/individualfarmersignin" element={<IndividualFarmerSignin />} />
<Route path='/individualfarmerhome' element={<IndividualFarmerhome/>}>
<Route path="/individualfarmerhome/indianmap" element={<Indianmaphome/>}/>
<Route path="/individualfarmerhome/carousal" element={<IndividualFarmerCarousal/>}/>
<Route path='/individualfarmerhome/carousal/irrigation' element={<Irrigationhome/>}/>
<Route path='/individualfarmerhome/carousal/irrigation/1' element={<Irrigationhome1/>}/>
<Route path='/individualfarmerhome/carousal/irrigation/2' element={<Irrigationhome2/>}/>
<Route path='/individualfarmerhome/carousal/irrigation/3' element={<Irrigationhome3/>}/>

<Route path="/individualfarmerhome/telangana" element={<IndianmapTelangana/>}/>

<Route path='/individualfarmerhome/individualfarmercropselling' element={<IndividualFarmerCropSelling/>}/>
</Route>

<Route path='/individualfarmerhome/carousal/seeds' element={<Seeds/>}/>
<Route path='/individualfarmerhome/carousal/seed/1' element={<Paddyseed/>}/>
<Route path='/individualfarmerhome/carousal/seed/2' element={<Wheetseed/>}/>
<Route path='/individualfarmerhome/carousal/seed/3' element={<Tomatoseed/>}/>

<Route path='/individualfarmerhome/maharashtra' element={<IndianmapMaharashtra/>}/>


{/* <Route path='/individualfarmerhome/carousal/wether' element={<Wether/>}/> */}

<Route path="/psbuyersignin" element={<PSBuyersignin/>}/>
<Route path="/psbuyersignup" element={<PSBuyersignup/>}/>

<Route path="/pshome" element={<PSHome/>}>
<Route path="/pshome/psbuyercrop" element={<PSBuyerCrop/>}/>
</Route>

<Route path="/workersignup" element={<Workersignup/>}/>
<Route path="/workersignin" element={<Workersignin/>}/>
<Route path="/workerhome" element={<Workerhome/>}/>
<Route path="/farmerworker" element={<Farmerworker/>}/>
<Route path='/harvesting' element={<Farmerworker/>}/>

<Route path='/individualfarmerhome/carousal/wether' element={<Wether/>}/>
<Route path='/individualfarmerhome/carousal/selection' element={<Cropslctn/>}/>
<Route path='/individualfarmerhome/schemes' element={<Schemes/>}/>

</Routes>
</NoteState>
</>
  );
}

export default App;

import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";
import noteContext from '../../context/notes/notecontext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { firebase, auth } from './firebase';

export default function Workersignup() {

  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');


const sendotp = () => {
  
    if (credentials.phno === "" || credentials.phno < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(credentials.phno, verify).then((result) => {
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
      signup()
  }).catch((err) => {
    console.log(err)
      alert("Wrong code");
  })
}








    const navigate = useNavigate();

    const boom =useContext(noteContext);
    // console.log(boom);
    const {host}=boom;
    // name
    // phno
    // cost
    // sector
    // state
    // district
    // workplace


    
 
    const [credentials, setcredentials] = useState({name:"",phno:"",cost:"",sector:"",state:"",district:"",workplace:""})
    
    const signup=async (a)=>{ 
        // a.preventDefault();
        const response = await fetch(`${host}/api/workerauth/createUser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-no-cors, *no-cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"name":credentials.name,"phno":credentials.phno,"cost":credentials.cost,"sector":credentials.sector,"state":credentials.state,"district":credentials.district,"workplace":credentials.workplace})
        });
        let res=await response.json(); // parses JSON response into native JavaScript objects
        if(res.success){
            localStorage.setItem("workerauthtoken",res.authtoken);
            localStorage.setItem("workerphno",credentials.phno);
            navigate("/workerhome")

        }else{
            alert("Enter valid details or account already exists")
        }
      }


      const handleonchange=(e)=>{
          setcredentials({...credentials,[e.target.name]:e.target.value})
      }


      var places = {

        "Telangana":{
       "Adilabad":["Adilabad(urban)","Adilabad(rural)","Mavala","Gudihatnoor","Bajahatnoor","Bela","Boadh","Jainath","Indervelly","Narnoor","Gudiguda","Utnoor"],
       "Bhadradri_Kothagudem":["Kothagudem","Palwancha","Tekulapalli","Yellandu","Chandrugonda","Aswaraopeta","Mulakalapalli","Dammapeta","Gundala","Julurpadu","Sujathangar","Chunchupalle","Laxmidevipalli","Allapalli","Annapureddypalli","Bhadrachalam","Dummugudem","Cherla","Burgampahad","Aswapuram"],
       "Hyderabad":["Secunderabad","Amberpet","Asifnagar","Bahadurpura","Bandlaguda","Charminar","Golkonda","Himayathnagar","Nampally","Saidabad","Ameerpet","Khairtabad","Marredpally","Musheerabad","Shaikpet","Trimulgherry"],
       "Jagitial":["Jagitial","Jagitial(Rural)","Raikal","Sarangapur","Beeerpur","Dharmapuri","Buggaram","Pegadapalli","Gollapalli","Mallial","Kodimial","Velgatur","Korutla","Metpalli","Mallapur","Ibrahimpatnam","Medipalli","Kathlapur"],
       "Jangaon":["Bachannapeta","Devaruppala","Gundala","Jangaon","Lingalaghanpur","Narmetta","Raghunathapalle","Tarigoppula","Chilpur","Zaffergadh","Kodakandla","Palakurthi","Station Ghanpur"],
       "Jayashankar_Bhupalpally":["Bhupalaplle","Chityal","Ghanpur","Kataram","Mahadevpur","Maha Mutharam","Malharrao","Mogullapalle","Palimela","Regonda","Tekumatla","Eturunagaram","Govindaraopet","Mangapet","Mulug","Tadvai","Vajedu","Venkatapur","Kannaigudem"],
       "Jogulamba_Gadwal":["Ieeja","Maldakal","Manopad","Ghattu","Alampur","Dharoor","Gadwal","Itikyala","Kaloor-thimmana Doddi","Rajoli","Undavelly","Waddepally"],
       "Kamareddy":["Kamareddy","Elichpur","Adloor","Isrojiwadi","Gargul","Thimmakkapalle","Gudem","Uggrawai","Shabdipur","Rameswarpalle","Devanpalle","Lingapur(R)","Sarampalle","Kyasampalle","Raghavapur","Patharajampet","Chinna Mallareddy","Arepalle","Achampet","Hasanpalle"],
       "Karimnagar":["Karimnagar","Kothapally","Karimnagar Rural","Manakondur","Thimmapur","Ganneruvaram","Gangadhara","Ramadugu","Choppadandi","Chigurumamidi","Huzurabad","Veenavanka","V.Saidapur","Jammikunta","Ellandakunta","Shankarapatnam"],
       "Khammam":["Khammam ","Khammam Rural","Madhira","Kalluru","Thirumalayapalem","Nelakondapalli","Konijerla","Kusumanchi","Mudigonda","Thallada","Singareni","Wyra","Penuballi","Yerrupalem","Chinthakani","Vemsoor","Bonakal","Kamepalli","Sathupally","Raghunathapalem(New)","Enkuru"],
       "Kumuram_Bheem":["Asifabad","Bejjur","Dahegaon","Jainoor","Kagaznagar","Kerameri","Kouthala","Rebbena","Sirpur(T)","Sirpur(U)","Tiryani","Wankidi"],
       "Mahabubabad":["Mahabubabad","Kuravi","Kesamudram","Dornakal","Gudur","Kothaguda","Gangaram","Bayyaram","Garla","Chinnagudur","Danthalapalle","Thorrur","Nellikudur","Maripeda","Narsimhulapet","Peddavangara"],
       "Mahabubnagar":["Addakal","Balanagar","Bhoothpur","CC Kunta","Devarakadra","Gandeed","Hanwada","Jadcherla","Koilkonda","MBNR","MBNR(U)","Moosapet","Midjil","Nawabpet","Rajapur"],
       "Mancherial":["Chennur","Jaipur","Bheemaram","Kotapally","Luxettipet","Mancherial","Naspur","Hajipur","Mandamarri","Dandepally","Jannaram","Kasipet","Bellampally","Vempally","Nennel","Tandur","Bheemini","Kannepally"],
       "Medak":["Medak","Havelighanpur","Papannapet","Shankarampet-R","Ramayampet","Nizampet","Shankarampet-A","Tekmal","Alladurg","Regode","Narsapur","Kulcharam","Kowdipally","Shivampet","chilipched","Toopran","Chegunta","Narsingi","Yeldurthy","Manoharabad"],
       "Medchal_Malkajgiri":["Alwal","Bachupally","Balanagar","Dundigal","Kukatpally","Malkajgiri","Quthbullapur","Ghatkesar","kapra","Keesara","Medchal","Medipally","shamirpet","Uppal"],
       "Mulugu":["Eturnagaram","Govindaraopet","Kannaigudem","Mangapet","Mulug","Tadvai","Venkatapur","Venkatapuram","Wazeed"],
       "Nagarkurnool":["Nagarkurnool","Tadoor","Pentlavelli","Kollapur","Kodair","Kalwakurthy","Urkonda","Charakonda","Vangoor","Veldanda","Achampet","Uppununthala","Amrabad","Bijnapalle","Telkapalle"],
       "Narayanpet":["Damargidda","Dhanwada","Kosgi","Krishna","Maddur","Maganur","Makthal","Marikal","Narayanpet","Narva","Utkur"],
       "Nalgonda":["Chandur","Chityal","kanagal","Kattangur","Munugode","Nakrekal","Nalgonda","Narayanapoor","Narketpally","Thipparthy","Kethepally","Shaligouraram","Ghattuppal","Damaracherla","Miryalaguda","Vemulapally","Anumula(Haliya)","Nidmanoor","Pedavoora","Tripuraram","Madgulapalli","Tirumalagiri","Chandampeta","Chinthappally","Devarkonda","Gundlapally","Gurrampode","Konda_Mallepally","Marriguda","Nampally","P.A.Pally"],
       "Nirmal":["Basar","Bhainsa","Dasturabad","Dilawarpur","Kaddam(Peddur)","Khanapur","Kubeer","Kuntala","Laxmanchanda","Lokeswaram","Mamda","Mudhole","Narsapur G","Nirmal","Nirmal Rural","Pembi","Sarangapur","Soan","Tanur"],
       "Nizamabad":["Armoor","Balkonda","Mupkal","Mendora","Kammar palle","Velpur","Morthad","Bheemgal","Jakranpally","Nandipet","Yergatla","Bodhan","Yedapally","Renjal","Kotagiri","Varni","Rudrur","Chandur","Mosra","Mugpal","Dichpally","Dharpally","Indalwai","Makloor","Sirikonda","Navipet"],
       "Peddapalli":["Peddapalli","Sulthanabad","Ramagundam","Manthani","Darmaram","Ramagiri","Kamanpur","Kalva Srirampur","Julapalli","Eligaid","Odela","Mutharam(Manthani)","Palakurthy","Anthergoan"],
       "Rajanna_Sircilla":["Boinpalli","Chandurthi","Ellanthakunta","Gambhiraopet","Konaraopet","Mustabad","Rudrangi","Sircilla","Thangallaplli","Veernapalli","Vemulawada","Vemulawada Rural","Yellareddipet"],
       "Ranga_Reddy":["Chevella","Moinabad","Shahbad","Shankarpalle","Abdullapuramet","Hayathnagar","Ibrahimpatanam","Madgul","Manchal","Yacharam","Amangal","Balapur","Kandukur","Kadthal","Maheswaram","Thalakondapalle","Saroornagar","Gandipet","Rajendranagar","Serilingampally","Shamshabad","Chowderguda","Farooqnagar","Keshampeta","Kondurg","Kothur","Nandigama"],
       "Sangareddy":["Ameenpur","Andole","Gummadidala","Hathnoora","Jinnaram","Kandi","Kondapur","Munipally","Patancheru","Pulkal","Ramachandrapuram","Sadasivpet","sangaredddy","Vatpally","Jharasangam","kohir","Mogudampally","Nyalkal","Raikode","Zaheerabad"],
       "Siddipet":["Siddipet(Urban)","Siddipet(Rural)","Nangnoor","Chinnakodur","Thoguta","Doultabad","Mirdoddi","Dubbak","Cherial","Komuravelli","Gajwel","Jagdevpur","Kondapak","Mulug","Markook","Wargal","Raipole","Husnabad","Akkannapet","Koheda","Bejjanki","Maddur"],
       "Suryapet":["Atmakur(s)","Chivvemla","Jajireddygudem","Mothey","Nuthankal","Penpahad","Suryapet","Thirumalagiri","Thungathurthy","Garidepally","Neredcherla","Nagaram","Maddirala","Palakeedu","Chilkur","Huzurnagar","Kodad","Mattampally","Mellachervu","Mungala","Nadigudem","Ananthagiri","Mallareddygudem"],
       "Vikarabad":["Basheerabad","Bommaraspet","Doulthabad","Kodangal","Peddemul","Tandur","Yelal","Doma","Dharur","Bantwaram","Kulkacherla","Kotepally","Marpalle","Mominpet","Nawabpet","Pudur","Pargi","Vikarabad"],
       "Wanaparthy":["Amarchinta","Atmakur","Chinnambavi","Ghanpur(khilla)","Gopalpeta","Kothakota","Madanapur","Pangal","Pebbair","Peddamandadi","Revally","Srirangapur","Veepanagandla","Wanaparthy"],
       "Warangal_Rural":["Atmakur","Damera","Geesugonda","Parkal","Parvathagiri","Rayaparthy","Sangem","Shayampet","Wardhannapet","Chennaraopet","Duggondi","Khanapur","Narsampet","Nallabelly","Nekkonda"],
       "Warangal_Urban":["Bheemadevarpalli","Dharmasagar","Elkathurthy","Inavole","Hanamkonda","Hasanparthy","Kamalapur","Kazipet","Khila Warangal","Velair","Warangal"],
       "Yadadri_Bhuvanagiri":["Addaguduru","Alair","Atmakur(M)","Bibinagar","Bhongir","Bommalaramaram","Motakondur","Mothkur","Rajapet","Turkapally","Yadagirigutta","Bhoodan_Pochampally","Choutuppal","Narayanpur","Ramannapet","Valigonda"],
      
      
      }
      }


      var worksector=["Harversting","Plowing","Threshing","Gutting","perfusion","ploughing"];


      useEffect(() => {
        
        
var subjectSel = document.getElementById("state");
var topicSel = document.getElementById("district");
var chapterSel = document.getElementById("workplace");
var worksectorSel=document.getElementById("sector");
for (var x in worksector) {
  worksectorSel.options[worksectorSel.options.length] = new Option(worksector[x], worksector[x]);
}
for (var x in places) {
  subjectSel.options[subjectSel.options.length] = new Option(x, x);
}
subjectSel.onchange = function() {
  //empty Chapters- and Topics- dropdowns
  chapterSel.length = 1;
  topicSel.length = 1;
  //display correct values
  for (var y in places[this.value]) {
    topicSel.options[topicSel.options.length] = new Option(y, y);
  }
}
topicSel.onchange = function() {
  //empty Chapters dropdown
  chapterSel.length = 1;
  //display correct values
  var z = places[subjectSel.value][this.value];
  for (var i = 0; i < z.length; i++) {
    chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
  }

}


      }, [])
      




    return (
      <>
    





<script src="https://use.fontawesome.com/1dec14be15.js"></script>
    <div className="container-fluid stylish-form" style={{"height":"100%"}}>  
      <h2 className="text-center">WELCOME</h2>
      <div className="row mar20" >
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="inner-section">
          
              <div className="mar20 inside-form">
                <h2 className="font_white text-center">SIGN UP</h2>
                  
                  <p className='text-light'>Full Name      </p>
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-pencil "></i></span>
                  <input type="text" className="form-control" name="name" placeholder="Name..." onChange={handleonchange}/>
                </div>
                <p className='text-light'>Phone Number</p>
                <div className="input-group">
                  <input type="text" className="form-control" name="phno" placeholder="Phno..." onChange={handleonchange}/>
                </div>
                <p className='text-light'>Cost Per Hour</p>
                {/* <div className="input-group"> */}
                  <input type="text" className="form-control" name="cost" placeholder="cost..." onChange={handleonchange}/>
                {/* </div> */}


                <p className='text-light'>Sector</p>
                <div className="input-group">

                <select name="sector" id="sector" onChange={handleonchange} >
                  <option value="not selected" className='form-control' selected="selected">worksector</option>
                </select>
                </div>



                <p>
                State: <select name="state" id="state" onChange={handleonchange} >
                    <option value="not selected" selected="selected">Select state</option>
                  </select>
                  <br/>
                </p>
                <p>
                <br/>
                  District: <select name="district" id="district" onChange={handleonchange} >
                  <option value="" selected="selected">Select district</option>
                  </select>
                  <br/>
                </p>
                <p>
    
                <br/>
                  Mandal : <select name="workplace" id="workplace" onChange={handleonchange} >
                  <option value="" selected="selected">Select workPlace</option>
                  </select>
                  <br/>
                </p>





                <div id="recaptcha-container"></div>
                <button onClick={sendotp}>Send OTP</button>
                <div className="form-group"  style={{ display: show ? "block" : "none" }}>
    <label htmlFor="email">OTP</label>
    <input  name='password' className="form-control" id="email"  placeholder="OTP"  onChange={(e) => { setotp(e.target.value) }}/>
    <button onClick={ValidateOtp}>Verify</button>
  </div>
                
                <button className='text-light btn-primary'   ><Link className='text-light' to="/workersignin">Have an account ? Signin</Link>  </button>
              </div>
            
          </div>
        </div>
      </div>
   
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

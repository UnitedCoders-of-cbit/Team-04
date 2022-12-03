import React from 'react'
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import noteContext from '../../context/notes/notecontext';
import IndividualworkerCard from './IndividualworkerCard';
export default function Farmerworker() {
    const boom =useContext(noteContext);
    // console.log(boom);
    const {host}=boom;
    const [allworkers,setallworkers]=useState([]);
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

      const [credentials, setcredentials] = useState({sector:"",state:"",district:"",workplace:""})


      const fetchallworkers=async ()=>{
        
        const response = await fetch(`${host}/api/workerauth/getall`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-no-cors, *no-cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
           
           
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"state":credentials.state, "district":credentials.district, "workplace":credentials.workplace, "sector":credentials.sector})
        });
        let fetchednotes=await response.json(); // parses JSON response into native JavaScript objects
        console.log(fetchednotes)
        setallworkers(fetchednotes.data); 
      }
      

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


      const handleonchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }


     


 
 
    return (
        <>
        <div>
        
    <h2 className='my-3 d-flex justify-content-center'>Hire Workers</h2>


          <div className='card fw'>
              <p className='text-light'>Sector</p>
                <div className="input-group">

                <select className='my-4' style={{"margin-left":"100px"}} name="sector" id="sector"  onChange={handleonchange}  >
                <h1>Work sector</h1>
                  <option value="not selected" className='form-control' selected="selected" >worksector</option>
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
                  District: <select name="district" id="district"  onChange={handleonchange} >
                  <option value="" selected="selected">Select district</option>
                  </select>
                  <br/>
                </p>
                <p>
    
                <br/>
                  Mandal : <select name="workplace" id="workplace"  onChange={handleonchange}  >
                  <option value="" selected="selected">Select workPlace</option>
                  </select>
                  <br/>
                </p>



    
<button className='btn btn-primary my-4' onClick={fetchallworkers}>Get</button>
</div>
</div>



<h5 className='my-3 d-flex justify-content-center'>
{ allworkers.length === 0 && "No Workers with specified skill and work location"}
</h5>
{

 allworkers && allworkers.map((person)=>{
 return <IndividualworkerCard key={person._id} name={person.name}  phno={person.phno}  cost={person.cost}  sector={person.sector}  state={person.state}  district={person.district}  workplace={person.workplace}  />
})
}



</>

  )
}

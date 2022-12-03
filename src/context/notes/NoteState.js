import noteContext from "./notecontext";
import { useState } from "react";



const NoteState=(props)=>{
  // const port=process.env.PORT || 5000;
  const port=5000;


 
  
  const host =`http://localhost:${port}`;
  // const host='https://inotebookbackendd.herokuapp.com';
  
  // console.log("host in notestate",host)


    const fetchallnotes=async (id)=>{
      const auth_token=localStorage.getItem('authtoken');
      const response = await fetch(`${host}/api/pscroporder`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-no-cors, *no-cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'auth-token': auth_token
         
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
      });
      let fetchednotes=await response.json(); // parses JSON response into native JavaScript objects
      setfanotes(fetchednotes);
    }
    const [myorders, setmyorders] = useState([])
    const fetchmyorders=async (id)=>{
      const auth_token=localStorage.getItem('authtoken');
      const response = await fetch(`${host}/api/pscroporder/myorders`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-no-cors, *no-cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'auth-token': auth_token
         
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
      });
      let sss=await response.json(); // parses JSON response into native JavaScript objects
      setmyorders(sss);
    }

    let n1=
        [
        
          ]

        const [fanotes, setfanotes] = useState(n1)

        //add Note

  
      

        const addNote=async(cropname,quantity,cost,description,address,company,contact)=>{
          const auth_token=localStorage.getItem('authtoken');
          //API CALL


          const response =  await fetch(`${host}/api/pscroporder`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-no-cors, *no-cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'auth-token': auth_token
             
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({cropname,quantity,cost,description,address,company,contact}) // body data type must match "Content-Type" header
          });
          const resp= await response.json(); // parses JSON response into native JavaScript objects
          console.log(resp)


        
          setmyorders(myorders.concat(resp));
        }

        // delete Note
        const deleteNote=async(id)=>{
          const auth_token=localStorage.getItem('authtoken');

          
            await fetch(`${host}/api/pscroporder`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-no-cors, *no-cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'auth-token': auth_token
             
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
             // body data type must match "Content-Type" header
             body: JSON.stringify({_id:id})
          });

          // client side delete
          let newnote=myorders.filter((note)=>{return note._id!==id})
          setmyorders(newnote);
        }
        
        // edit Note
        const editNote=async(cropname,quantity,cost,description,address,company,contact,id)=>{
          const auth_token=localStorage.getItem('authtoken');

          // API call
          await fetch(`${host}/api/pscroporder`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-no-cors, *no-cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'auth-token': auth_token
             
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
             // body data type must match "Content-Type" header
             body: JSON.stringify({cropname,quantity,cost,description,address,company,contact,_id:id})
          });

          // logic in client

          let newnotes=myorders.slice();
          console.log(id)
          for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index];
            console.log(element._id)
            
            if(element._id===id){
              newnotes[index].cropname=cropname;
              newnotes[index].description=description;
              newnotes[index].quantity=quantity;
              newnotes[index].cost=cost;
              newnotes[index].address=address;
              newnotes[index].contact=contact;
              
              
              break;
            }
          }
       
          setmyorders(newnotes);
      

          
          
        }


 
    return(
    <noteContext.Provider value={{fanotes,addNote,deleteNote,fetchallnotes,editNote,host,myorders,fetchmyorders}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState
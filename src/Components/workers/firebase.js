
import firebase from 'firebase';
  

const firebaseConfig = {
    apiKey: "AIzaSyCdd-5pZceNiSDuG1bIiTBWsAVdBCoO1gM",
    authDomain: "agriweb-7bff2.firebaseapp.com",
    projectId: "agriweb-7bff2",
    storageBucket: "agriweb-7bff2.appspot.com",
    messagingSenderId: "918978179433",
    appId: "1:918978179433:web:41db8137ed9e75e18a0df8",
    measurementId: "G-X0JLTDYZJK"
  };

  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};
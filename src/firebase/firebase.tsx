
import{ getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore}from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyC3dEnAfLaTqVz8q-f35Lmn7rq2DfXljxw",
    authDomain: "chatgtp-clone-4e6ec.firebaseapp.com",
    projectId: "chatgtp-clone-4e6ec",
    storageBucket: "chatgtp-clone-4e6ec.appspot.com",
    messagingSenderId: "1058358263893",
    appId: "1:1058358263893:web:b011aeca47819f44bf54dc",
    measurementId: "G-45BDW46WKJ"
  };

  const app=getApps().length ? getApp():initializeApp(firebaseConfig);
  const db=getFirestore(app);
export {db}; 
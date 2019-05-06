<<<<<<< HEAD
import {initRouter} from "./route.js"
const init = () =>{
  const config = {
    apiKey: "AIzaSyDIEvUz8dj8uVtCTycN0FqLGIvwpkWS7K0",
    authDomain: "usuario-18d2f.firebaseapp.com",
    databaseURL: "https://usuario-18d2f.firebaseio.com",
    projectId: "usuario-18d2f",
    storageBucket: "usuario-18d2f.appspot.com",
    messagingSenderId: "445069069824"

    };
    firebase.initializeApp(config);  
    
    initRouter();
}
 window.onload = init();



=======
import {initRouter} from "./route.js"
import{observer} from "./view-controller.js"
const init = () =>{
  const config = {
      apiKey: "AIzaSyCiKAaY7lb-RFBBp10RSyTZmRHd1BBo90w",
      authDomain: "db-drama-fever.firebaseapp.com",
      databaseURL: "https://db-drama-fever.firebaseio.com",
      projectId: "db-drama-fever",
      storageBucket: "db-drama-fever.appspot.com",
      messagingSenderId: "82992397174"
    };
    firebase.initializeApp(config);  
    
    initRouter();
    observer();
}
 window.onload = init();



>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543

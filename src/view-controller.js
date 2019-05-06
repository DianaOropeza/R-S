import { signIn ,signInGoogle ,signInFacebook,signUp ,signOut ,addNote} from "./controller/controller-firebase.js";

const changeHash = (hash) =>  {
    location.hash = hash;
}

/********************** AUTENTIFICACION  **************** */
    
// Funcion de Login EMAIL Y CONTRASEÑA
export const signInOnSubmit = (event) => {
  event.preventDefault()
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;  
  signIn(email, password)
  	.then(() => {
      changeHash('/home')
    })
    .catch(error => {
      const errorCode = error.code;
      const  errorMessage = error.message;
      alert( `Error: ${errorMessage} Tipo:${errorCode}`)
    })
}
  // Funcion de Login con GOOGLE
export const signInGoogleOnSubmit = () => {
  signInGoogle()
    .then(() => {
      const user = firebase.auth().currentUser;      
      if (user != null) {
        user.providerData.forEach( profile =>{
          firebase.firestore().collection('users').doc(user.uid).set({
            id: profile.uid,
            name: profile.displayName,
            email: profile.email,
            photo: profile.photoURL,
          })
        })
      }
      changeHash('/home')
    })         
    .catch(error => {
      const errorCode = error.code;
      const  errorMessage = error.message;
      alert( `Error: ${errorMessage} Tipo:${errorCode}`)
    })    
}
  // Funcion de Login FACEBOOK
export const signInFacebookOnSubmit = () => {
	signInFacebook()
  .then(() => {
    const user = firebase.auth().currentUser;      
    if (user != null) {
      user.providerData.forEach( profile =>{
        firebase.firestore().collection('users').doc(user.uid).set({
          id: profile.uid,
          name: profile.displayName,
          email: profile.email,
          photo: profile.photoURL,
        })
      }) 
    }
    changeHash('/home')
    
  })         
  .catch(error => {
    const errorCode = error.code;
    const  errorMessage = error.message;
    alert( `Error: ${errorMessage} Tipo:${errorCode}`)
  })
}
// Funcion de CREAR CUENTA 
export const signUpSubmit = (event) =>{
	event.preventDefault();
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
  const name = document.querySelector('#name').value;
  signUp(email,password)	
		.then(()=>{
      const user = firebase.auth().currentUser;
      console.log(user);
      if(user != null){
        firebase.firestore().collection('users').doc(user.uid).set({
          id: user.uid,
          name: name,
          email: user.email,
          photo: 'https://images.vexels.com/media/users/3/147101/isolated/lists/b4a49d4b864c74bb73de63f080ad7930-boton-de-perfil-de-instagram.png',
        })
      }      
      changeHash('/signIn');
    })
		.catch(error => {
        const errorCode = error.code;
        const  errorMessage = error.message;
        alert( `Error: ${errorMessage} Tipo:${errorCode}`)
    })
}
// Salir de la Cuenta
export const signOutSubmit = () =>{
  signOut()
  .catch(error => {
    const errorCode = error.code;
    const  errorMessage = error.message;
    alert( `Error: ${errorMessage} Tipo:${errorCode}`)
  })
} 

// OBSERVADOR 
export const  observer = () => {
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log(user.displayName);
      console.log('Usuario activo')
    }else{
      console.log('usuario no activo')
    }
  })  
}

/********************** POST  **************** */

export  const addNoteSubmit = (event) =>{
  event.preventDefault();
  const user = firebase.auth().currentUser;
  console.log(user);
  const userName = user.displayName;
  const userPhoto = user.photoURL;
  const textPost = document.querySelector('#text-post').value;
  const privacy = document.querySelector('#options-privacy').value;  
  addNote(userName,userPhoto,textPost,privacy)
    .then(doc=>console.log(doc.data()))
    .catch(error => {
      const errorCode = error.code;
      const  errorMessage = error.message;
      alert( `Error: ${errorMessage} Tipo:${errorCode}`)
    })

}
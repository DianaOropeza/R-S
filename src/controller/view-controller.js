import { signIn ,signInGoogle ,signInFacebook,signUp,singOut,addNote,removeNote,editNote} from "./controller-firebase.js";

const changeHash = (hash) =>  {
    location.hash = hash;
  }
    
  // Funcion de Login EMAIL Y CONTRASEÑA
export const signInOnSubmit = (event) => {
	event.preventDefault()
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
    signIn(email, password)
  	  .then(() => changeHash('/home'))
      .catch((e) => console.log(e.message))
}

  // Funcion de Login con GOOGLE
export const signInGoogleOnSubmit = () => {
  signInGoogle()
    .then(() => {
      const user = firebase.auth().currentUser;      
      console.log(user)
      if (user != null) {
        console.log(user.providerData)
        user.providerData.forEach( profile =>{
          console.log(profile.uid);
          console.log(user.uid);
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
    .catch((e) => console.log(e.message))
    
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
  .catch((e) => console.log(e.message))
}


// Funcion de CREAR CUENTA 

export const signUpSubmit = (event) =>{
	event.preventDefault()
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
          photo: user.photoURL,
        })
      }      
      changeHash('/signIn');
    })
		.catch(() => {})
}

export const singOutLogin = () => {
  singOut()
  .then(()=>{
    changeHash('/signIn');
  }) 
  .catch((e) => console.log(e.message))
}

export const addNotes =(event)=>{
  event.preventDefault();
  const inputNote = document.querySelector('#post').value;
  if(inputNote ===""){
    alert("escriba");
  }
  else{ 
  const postN = document.querySelector('#post').value;
  const user = firebase.auth().currentUser;
  console.log(firebase.auth().currentUser);
  const userName = user.email;
  addNote(postN,userName)
  .then(function(docRef){
    console.log("Document written ID: ", docRef.id);
  })
  .catch((e) => console.log(e.message))}
}

export const removeNotes=(event)=>{
  event.preventDefault();
  console.log(event.target.id);
  removeNote(event.target.id)
  .then(function() {
    console.log("Document successfully deleted!");
  }).catch((e) => console.log(e.message))
}

export const EditNotes = (event) =>{
event.preventDefault();
const editId= event.target.id;
const textId= ("btn-"+editId.slice(10,30));
console.log(editId);
console.log(textId);
console.log(document.getElementById(textId));
document.getElementById(textId).readOnly=false;

//document.getElementById("btnEditar-"+editId.slice(10,30)).style.display = 'none';
}

export const datosUsuario =()=>{
  const user = firebase.auth().currentUser;
  const userName = user.email;
  const photo = user.photo;
  const name = user.name;
  console.log(userName,photo,name);
}
<<<<<<< HEAD
// aqui exportaras las funciones que necesites

export default () => {
  const form = document.createElement('div');
  const formContent = `
      <div>
      <header>
      <img src="img/logo1.png" class="title">
          <nav class="header-nav">
            <ul>
              <li> <i class="fa fa-home"></i></li>
              <li> <i class="fa fa-users"></i></li>
              <li> <i class="fa fa-user-edit"></i> </li>
              <li> <i class="fa fa-cog"></i></li>
              <li> <i class="fa fa-sign-in-alt"></i></li>
            </ul> 
          </nav>
        </header>
        <div class="page-content">
        <div class="timeline">
          <div class="timeline-component">
            <div class="timeline-component-header">
              <div class="timeline-component-header-img1">
            </div>
          </div>
            <div class="timeline-component-interact">
              <div class="thumb-up-container">
            <div class="timeline-component-content1">
            LESLI ZARATE
            </div>
          <div class="timeline-component-content1">Front End Developer Master</div>      
            <div class="thumb-up-container">
                <i class="fa fa-user-edit"></i>Ok</div>
              </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
            `;

  form.innerHTML = formContent
  return form
}
=======
// aqui exportaras las funciones que necesites
import {signOutSubmit } from '../view-controller.js';

export default () => {
  const userProfile = document.createElement('main');
  const user = firebase.auth().currentUser;
  console.log(user);
  
/*  const profileContent = `
          <div>
            <h1>Perfil del Usuario</h1>
            <p>${user.displayName}</p>
            <img src= '${user.photoURL}'/>
            <button id="btn-signOut">Cerrar Sesion </button>
          </div>        
          `;
   userProfile.innerHTML = profileContent
   const btnSignOut = userProfile.querySelector('#btn-signOut')
          btnSignOut.addEventListener('click',signOutSubmit) */

  const docRef = firebase.firestore().collection('users').doc(user.uid);  
  docRef.get()
    .then(doc=>{
      if(doc.exists){
        const profileContent = `
          <div>
            <h1>Perfil del Usuario</h1>
            <p>${doc.data().name}</p>
            <img src= '${doc.data().photo}'/>
            
          </div>        
          `;
          userProfile.innerHTML = profileContent;
        
        }
        else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    })
    .catch(e=>console.log(e.message)) 

  return userProfile;
}
>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543

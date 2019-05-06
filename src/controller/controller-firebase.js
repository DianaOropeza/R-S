<<<<<<< HEAD
// LOGIN CON EMAIL -PASSWORD
export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

// LOGIN CON GOOGLE
export const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

// LOGIN CON FACEBOOK
export const signInFacebook = ()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

// CREAR CUENTA
export const signUp = (email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// CERRAR SESION
export const singOut =() => firebase.auth().signOut()

//Crear notas
export const addNote = (post,userName)=> {
    return firebase.firestore().collection('post').add({
        note: post,
        name : userName,
    })
}

//Leer notas
export const readNotes =(callback)=>{
    firebase.firestore().collection('post').onSnapshot((querySnapshot)=>{
        const posts =[];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            posts.push({id: doc.id,...doc.data()});
        });
        callback(posts);
    })
}

//Eliminar nota
export const removeNote = (id)=>{
    console.log(id);
    return firebase.firestore().collection('post').doc(id).delete();
}

//Editar nota
export const editNote = (id) => {
    return firebase.firestore().collection('post').doc(id).update();
}
=======
// LOGIN CON EMAIL -PASSWORD
export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// LOGIN CON GOOGLE
export const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

// LOGIN CON FACEBOOK
export const signInFacebook = ()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

// CREAR CUENTA 
export const signUp = (email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}
// Cerrar Sesión
export const signOut = () => firebase.auth().signOut();

/********************** POST  **************** */
  export const addNote = (userName,userPhoto,textPost,privacy) => {
    return firebase.firestore().collection('posts').add({
      name : userName,
      photo :  userPhoto,
      textPost : textPost,
      privacy : privacy,
      date : Date(),
      likes :0,
    });
  }
>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543

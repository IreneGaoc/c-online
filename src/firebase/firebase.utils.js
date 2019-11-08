import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyC_jszf_lKwNXao8Qq1PKw0R9swUipVZBc",
    authDomain: "c-online-b2be6.firebaseapp.com",
    databaseURL: "https://c-online-b2be6.firebaseio.com",
    projectId: "c-online-b2be6",
    storageBucket: "c-online-b2be6.appspot.com",
    messagingSenderId: "750805443468",
    appId: "1:750805443468:web:d6819332ec10b73faaaca9",
    measurementId: "G-RJW4K8BST0"
  };
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          }catch(error){
              console.log('error creating user', error.message);
          }
      }
      return userRef;
  };
  


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()  => auth.signInWithPopup(provider);
  
  export default firebase;
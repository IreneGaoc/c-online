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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()  => auth.signInWithPopup(provider);
  
  export default firebase;
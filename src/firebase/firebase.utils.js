import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBiDannJg6hpeEb_7DVJDaAVqAHnW0-To8",
  authDomain: "crwn-clothing-b173e.firebaseapp.com",
  projectId: "crwn-clothing-b173e",
  storageBucket: "crwn-clothing-b173e.appspot.com",
  messagingSenderId: "389106418360",
  appId: "1:389106418360:web:3c6827c7f58b4bfa21ea4d"
};


  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


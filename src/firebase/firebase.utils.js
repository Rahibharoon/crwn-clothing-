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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();
if(!snapShot.exists){
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
  }catch(error){
    console.log('error creating user',  error.message)
  }
}
return userRef;
}

// firebase.initializeApp(config);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;



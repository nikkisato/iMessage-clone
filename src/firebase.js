import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDIyHweHeHV-K4QNfzvAYwRUH1NznpCcdM',
  authDomain: 'imessage-clone-b8563.firebaseapp.com',
  projectId: 'imessage-clone-b8563',
  storageBucket: 'imessage-clone-b8563.appspot.com',
  messagingSenderId: '1086427097319',
  appId: '1:1086427097319:web:cf4cdb9e542ddc4c519a42',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

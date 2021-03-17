import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAr7m4XLvapfkEHXE0qU2-GoAjV7ws_2P0",
    authDomain: "corpoelec-crud.firebaseapp.com",
    projectId: "corpoelec-crud",
    storageBucket: "corpoelec-crud.appspot.com",
    messagingSenderId: "1035735282854",
    appId: "1:1035735282854:web:980165518dea81683f3067"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);


export const auth = fb.auth()

export const db = fb.firestore();

export default fb
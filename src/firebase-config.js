import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyT5djY2JxzTr12QievCJHMbuUpELTiTA",
  authDomain: "todo-list-ada.firebaseapp.com",
  projectId: "todo-list-ada",
  storageBucket: "todo-list-ada.appspot.com",
  messagingSenderId: "184622766614",
  appId: "1:184622766614:web:4169fd590a29699eebb337"
};
// Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

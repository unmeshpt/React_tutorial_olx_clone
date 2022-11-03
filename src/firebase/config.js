import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzdZ8CmYnDgTeZDBfdawGvKy9WJIpbj5Q",
    authDomain: "olxapp-59587.firebaseapp.com",
    projectId: "olxapp-59587",
    storageBucket: "olxapp-59587.appspot.com",
    messagingSenderId: "851404712210",
    appId: "1:851404712210:web:fdbd44b80961c2cde2abcb",
    measurementId: "G-GST7E4ZZ9Q"
  };

export default firebase.initializeApp(firebaseConfig)
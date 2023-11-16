
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHjisPqLGoLs-7lTqqmvIK2lGk_Uju72E",
  authDomain: "tcc-1-ccbe3.firebaseapp.com",
  projectId: "tcc-1-ccbe3",
  storageBucket: "tcc-1-ccbe3.appspot.com",
  messagingSenderId: "216816330906",
  appId: "1:216816330906:web:20028ca4bc5e84ebff9723",
  measurementId: "G-DG0RQXXD9Z"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
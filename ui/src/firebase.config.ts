import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJXDS4biV_aaL1sAIvxbwPW2kfXSKuqvc',
  authDomain: 'mechas-882f9.firebaseapp.com',
  projectId: 'mechas-882f9',
  storageBucket: 'mechas-882f9.appspot.com',
  messagingSenderId: '438533220384',
  appId: '1:438533220384:web:60efc61383566c04b7b445',
  measurementId: 'G-35FRHY6YVR',
};

let firebaseApp: FirebaseApp;
let firestoreDb: Firestore;

const intializeFirebase = () => {
  firebaseApp = initializeApp(firebaseConfig);
  firestoreDb = getFirestore();
};

export { firebaseApp, firestoreDb, intializeFirebase };

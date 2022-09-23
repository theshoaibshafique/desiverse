// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpzWl9yjQbxXFV7Sry_dAO1vTuVnXzUpU',
  authDomain: 'desiverse.firebaseapp.com',
  projectId: 'desiverse',
  storageBucket: 'desiverse.appspot.com',
  messagingSenderId: '368078593183',
  appId: '1:368078593183:web:2ab905c4a4e462032e96aa',
  measurementId: 'G-PFG9759H6X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

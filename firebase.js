// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5VjL5x8mDAZGoLHDYzZcXXXB-3rJPl5g',
  authDomain: 'first-app-68b7e.firebaseapp.com',
  projectId: 'first-app-68b7e',
  storageBucket: 'first-app-68b7e.appspot.com',
  messagingSenderId: '570574855636',
  appId: '1:570574855636:web:7e3755652a84d09f258a41',
  measurementId: 'G-7K777HGDWD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

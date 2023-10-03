// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCa1fENlbhoZJCaFS_dWQoJyinjBXZCK58',
  authDomain: 'quizzy-development.firebaseapp.com',
  projectId: 'quizzy-development',
  storageBucket: 'quizzy-development.appspot.com',
  messagingSenderId: '13576353448',
  appId: '1:13576353448:web:cf3a2947845a62adf0349d',
  measurementId: 'G-1NPNPQM6T8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;

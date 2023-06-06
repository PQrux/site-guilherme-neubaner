// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCJFwDvfznaRqqiWD-Z3O-zXbKkUHtaWUk",
authDomain: "site-guilherme-neubaner.firebaseapp.com",
projectId: "site-guilherme-neubaner",
storageBucket: "site-guilherme-neubaner.appspot.com",
messagingSenderId: "498984603481",
appId: "1:498984603481:web:247a9c51343b155dfc4648",
measurementId: "G-FC7B7EW7KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
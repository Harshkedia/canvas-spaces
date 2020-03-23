const firebase = require("firebase/app");
require("firebase/storage");

/**
 * Initialize the Firebase database connection.
 * @returns {firebase.firestore.Firestore}
 */
function InitFirebase() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: "rhythm-day",
    storageBucket: "rhythm-day.appspot.com",
    messagingSenderId: "376005643552",
    appId: "1:376005643552:web:a9ac4ebeca7beca6e2db45",
    measurementId: "G-0N758Y7TKX"
  };

  firebase.initializeApp(firebaseConfig);
  return firebase.storage();
}
const db = InitFirebase();

module.exports = db;

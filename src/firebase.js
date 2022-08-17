// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMmuDoRi2czilx9MGHcwpfV-IHcUPFwxo",
  authDomain: "facebook-clone-d1144.firebaseapp.com",
  projectId: "facebook-clone-d1144",
  storageBucket: "facebook-clone-d1144.appspot.com",
  messagingSenderId: "821606617898",
  appId: "1:821606617898:web:6c7b892a8c20c4a923c453",
  measurementId: "G-H307SXLPWW",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

// export { auth, db };

// //initialize the app to connect frontend with firebase

// const firebaseApp = initializeApp(firebaseConfig);
// //connect to the database
// const db = getFireStore(firebaseApp);

// //to setting up authentication this allow you login signin
// const auth = firebase.auth();

//provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

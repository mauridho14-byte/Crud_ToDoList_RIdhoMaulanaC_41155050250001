import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVdylarOdRo-wJelt6f3lUki6wOycdsY",
  authDomain: "todosapp-mobile-ridho.firebaseapp.com",
  projectId: "todosapp-mobile-ridho",
  storageBucket: "todosapp-mobile-ridho.appspot.com",
  messagingSenderId: "52775867202",
  appId: "1:52775867202:web:f03465b8cbcf5b3436aedb"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
import firebase from 'firebase/app';
import 'firebase/auth';

// Entrez vos informations firebase afin de tester l'application

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

export const auth = app.auth();
export default app;
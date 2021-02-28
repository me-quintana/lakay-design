import firebase from 'firebase/app';
import "@firebase/firestone";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA5sYvyh2BZjLEs5h3QCfA6BUie074fqxk",
    authDomain: "lakay-design.firebaseapp.com",
    projectId: "lakay-design",
    storageBucket: "lakay-design.appspot.com",
    messagingSenderId: "126923762293",
    appId: "1:126923762293:web:d2b4c4da4cc8fbba44663c"
});

export const getFirebase = () => {
    return app;
};

export const getFirestore = () => {
    return firebase.firestore(app);
};
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDealTnstmZVes6XZuXP3KJOqz8FtPMqlA",
    authDomain: "todo-react-7a183.firebaseapp.com",
    projectId: "todo-react-7a183",
    storageBucket: "todo-react-7a183.appspot.com",
    messagingSenderId: "261164422190",
    appId: "1:261164422190:web:cbe5962b200ac3799fbbbf",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
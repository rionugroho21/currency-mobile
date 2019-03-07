import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC_eG1XPmVUfPN69-j_VBfYpqmXSNJ0jEU",
    authDomain: "currency-112d4.firebaseapp.com",
    databaseURL: "https://currency-112d4.firebaseio.com",
    projectId: "currency-112d4",
    storageBucket: "",
    messagingSenderId: "439177483778"
};
firebase.initializeApp(config);

const database = firebase.database();

export {database};
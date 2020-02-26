import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
	apiKey: "AIzaSyB48KEnnTUvqbijXxqDNdOxPMXlqmg_gtQ",
	authDomain: "chat-crud.firebaseapp.com",
	databaseURL: "https://chat-crud.firebaseio.com",
	projectId: "chat-crud",
	storageBucket: "chat-crud.appspot.com",
	messagingSenderId: "243437175506",
	appId: "1:243437175506:web:480466cb8ac41a5394230b"
};
firebase.initializeApp(config);
export default firebase;
export const db = firebase.firestore();
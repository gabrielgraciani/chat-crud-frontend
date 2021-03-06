import firebase, {db} from 'services/firebase';
import io from 'socket.io-client'
const socket = io('https://chat-crud-backend.herokuapp.com/');

export default class chat{
	static saveMessage = (message, userId, userNome) => {
		return new Promise((res, rej) => {
			try{
				let newDoc = db.collection('chat').doc();
				const id = newDoc.id;
				newDoc.set({
					message,
					userId,
					userNome,
					createdAt: firebase.firestore.FieldValue.serverTimestamp()
				});

				socket.emit('chat.message', {
					id,
					userId,
					userNome,
					message
				});

				const success = true;
				res(success);
			} catch(error){
				console.log('erro', error);
			}
		});
	};

	static getMessages = () => {
		let message = [];
		return new Promise((res, rej) => {
			db.collection('chat').orderBy('createdAt', 'asc').get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					message.push({
						id: doc.id,
						...doc.data()
					})
				});

				res({message});
			}).catch(rej)
		});
	};
}

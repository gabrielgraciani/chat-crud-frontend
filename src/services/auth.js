import firebase, {db} from 'services/firebase';

export default class auth{
	static registerUser = (email, endereco, nome, nome_usuario, senha) => {
		return new Promise((res, rej) => {
			try{
				let newDoc = db.collection('users').doc();
				newDoc.set({
					email,
					endereco,
					nome,
					nome_usuario,
					senha,
					createdAt: firebase.firestore.FieldValue.serverTimestamp()
				});

				const success = true;
				res(success);
			} catch(error){
				console.log('erro', error);
			}
		});
	};
}
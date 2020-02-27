import {db} from 'services/firebase';

export default class user{
	static getItens = (last) => {
		let user = [];
		return new Promise((res, rej) => {
			db.collection('users').orderBy('createdAt', 'desc').get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					user.push({
						id: doc.id,
						...doc.data()
					})
				});

				res({user});
			}).catch(rej)
		});
	};
}

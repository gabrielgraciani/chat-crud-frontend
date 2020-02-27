import firebase, {db} from 'services/firebase';

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
				const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
				let end;

				if(lastVisible){
					end = false;
					res({user, lastVisible, end});
				}else{
					end = true;
					res({user, end});
				}
			}).catch(rej)
		});
	};
}

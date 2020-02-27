import React, {useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import {userDelete, userFetch, userShowEdit} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";

function DataList(){
	const dispatch = useDispatch();
	const { isLoading, list = [] } = useSelector(store => store.user);

	useEffect(() => {
		if(list.length === 0){
			dispatch(userFetch());
		}
	}, [dispatch, list.length]);

	return(
		<>
		{list.map((user, index) => (
			<div className="row" key={user.id}>
				<div className="item">{user.id}</div>
				<div className="item">{user.nome}</div>
				<div className="item">{user.nome_usuario}</div>
				<div className="item">{user.email}</div>
				<div className="item">{user.endereco}</div>
				<div className="item">{user.senha}</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(userShowEdit(user))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o user ${user.nome} ?`)) dispatch(userDelete(user.id))}} /></div>
				</div>
			</div>
		))}
		{isLoading && (
			<div className="row loading">
				<div className="loading">
					<div className="loading">
						<CircularProgress size={20} />
					</div>
				</div>
			</div>
		)}
		</>
	)
}

export default DataList;

import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {userSend, userUpdate, userCloseForm} from "../../redux/actions/user";
import CircularProgress from '@material-ui/core/CircularProgress';

function Formulario() {
	const initialState = {
		id: '',
		nome: '',
		nome_usuario: '',
		email: '',
		endereco: '',
		senha: '',
	};
	const [values, setValues] = useState(initialState);
	const [validate, setValidate] = useState(false);

	const dispatch = useDispatch();
	const {active, payload, isEditing, saving } = useSelector(store => store.user);

	useEffect(() => {
		if(payload){
			setValues(payload);
		}
	}, [payload]);

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const {nome, nome_usuario, email, endereco, senha} = values;
		if(!nome || !nome_usuario || !email || !endereco || !senha){ setValidate(true); }
		else{ dispatch(userSend({nome, nome_usuario, email, endereco, senha})); setValidate(false);}

	};

	const onUpdate = (e) => {
		e.preventDefault();

		const {id, nome, nome_usuario, email, endereco, senha} = values;
		if(!nome || !nome_usuario || !email || !endereco || !senha){ setValidate(true); }
		else{ dispatch(userUpdate({id, nome, nome_usuario, email, endereco, senha})); setValidate(false);}
	};

	return(
		<form id="wrap_formulario" className={active}>
			<div className="indent">
				<div className="head">
					<div className="titulo">
						<h3>{isEditing ? 'Editar' : 'Criar'} Item</h3>
					</div>
					<div className="fechar">
						<CloseIcon onClick={() => dispatch(userCloseForm())} />
					</div>
				</div>

				<div className="item">
					<label htmlFor="nome">Nome<span>{validate && '*'}</span></label>
					<input type="text" name="nome" value={values.nome} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="nome_usuario">Nome de usuário<span>{validate && '*'}</span></label>
					<input type="text" name="nome_usuario" value={values.nome_usuario} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="email">E-mail<span>{validate && '*'}</span></label>
					<input type="text" name="email" value={values.email} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="endereco">Endereço<span>{validate && '*'}</span></label>
					<input type="text" name="endereco" value={values.endereco} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="senha">Senha<span>{validate && '*'}</span></label>
					<input type="password" name="senha" value={values.senha} onChange={handleChange} autoComplete="off" />
				</div>

				<div className="item"><label htmlFor=""><span>{validate && 'Preencha os campos com *'}</span></label></div>

				{saving ? <div className="load"><CircularProgress size={25} /> </div> : isEditing ? <input type="submit" value="Editar" onClick={onUpdate} /> : <input type="submit" value="Salvar" onClick={onSubmit} />}


			</div>

		</form>
	)
}

export default Formulario;

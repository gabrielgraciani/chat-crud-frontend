import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {userSend, userUpdate, userCloseForm} from "../../redux/actions/user";
import CircularProgress from '@material-ui/core/CircularProgress';

function Formulario() {
	const initialState = {
		id: '',
		nome: '',
		descricao: '',
		funcao: '',
		imagem: ''
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

		const {nome, descricao, funcao, imagem} = values;
		if(!nome || !descricao || !funcao || !imagem){ setValidate(true); }
		else{ dispatch(userSend({nome, descricao, funcao, imagem})); setValidate(false);}

	};

	const onUpdate = (e) => {
		e.preventDefault();

		const {id, nome, descricao, funcao, imagem} = values;
		if(!nome || !descricao || !funcao || !imagem){ setValidate(true); }
		else{ dispatch(userUpdate({id, nome, descricao, funcao, imagem})); setValidate(false);}
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
					<label htmlFor="descricao">Descrição<span>{validate && '*'}</span></label>
					<input type="text" name="descricao" value={values.descricao} onChange={handleChange} autoComplete="off" />
				</div>
				<div className="item">
					<label htmlFor="funcao">Função<span>{validate && '*'}</span></label>
					<input type="text" name="funcao" value={values.funcao} onChange={handleChange} autoComplete="off" />
				</div>

				<div className="item"><label htmlFor=""><span>{validate && 'Preencha os campos com *'}</span></label></div>

				{saving ? <div className="load"><CircularProgress size={25} /> </div> : isEditing ? <input type="submit" value="Editar" onClick={onUpdate} /> : <input type="submit" value="Salvar" onClick={onSubmit} />}


			</div>

		</form>
	)
}

export default Formulario;

import React from 'react';
import DataList from './dataList';
import {userOpenForm} from "../../redux/actions/user";
import {useDispatch} from "react-redux";

function Tabela() {
	const dispatch = useDispatch();

	return(
		<div id="wrap_tabela" className="item">


			<div className="head">
				<div className="titulo">
					<h3>Itens</h3>
				</div>

				<div className="botoes">
					<button onClick={() => dispatch(userOpenForm())}>Criar Item</button>
				</div>
			</div>

			<div className="conteudo">
				<div className="row head">
					<div className="item">ID</div>
					<div className="item">Nome</div>
					<div className="item">Nome de usuário</div>
					<div className="item">Email</div>
					<div className="item">Endereço</div>
					<div className="item">Senha</div>
					<div className="item">Ações</div>
				</div>

				<DataList />
			</div>
		</div>
	)
}

export default Tabela;
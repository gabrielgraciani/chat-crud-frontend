import React from 'react';

function Tabela() {

	return(
		<div id="wrap_tabela" className="item">
			<div className="head">
				<div className="titulo">
					<h3>Usuários</h3>
				</div>

				<div className="botoes">
					<button onClick={() => {}}>Criar Usuário</button>
				</div>
			</div>

			<div className="conteudo">
				<div className="row head">
					<div className="item">ID</div>
					<div className="item">E-mail</div>
					<div className="item">Endereço</div>
					<div className="item">Nome</div>
					<div className="item">Nome de Usuário</div>
					<div className="item">Senha</div>
					<div className="item">Ações</div>
				</div>
				<div className="row">
					<div className="item">ID</div>
					<div className="item">E-mail</div>
					<div className="item">Endereço</div>
					<div className="item">Nome</div>
					<div className="item">Nome de Usuário</div>
					<div className="item">Senha</div>
					<div className="item">Ações</div>
				</div>

			</div>
		</div>
	)
}

export default Tabela;
import React, {useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch, useSelector} from "react-redux";
import {authSendCadastro, authSendLogin} from "../../redux/actions/auth";
function Login (){

	const initialState = {
		email: '',
		endereco: '',
		nome: '',
		nome_usuario: '',
		senha: '',
	};

	const [login, setLogin] = useState(true);
	const [values, setValues] = useState(initialState);
	const [validate, setValidate] = useState(false);

	const dispatch = useDispatch();
	const { loading, error, success, user = [] } = useSelector(store => store.auth);

	const handleChangeForm = () => {
		setLogin(!login);
		setValues(initialState);
	};

	const handleChange = (e) => setValues({
		...values,
		[e.target.name]: e.target.value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);

		dispatch(authSendLogin(values));
	};

	const handleRegister = (e) => {
		e.preventDefault();
		const {email, endereco, nome, nome_usuario, senha} = values;

		if(!email || !endereco || !nome || !nome_usuario || !senha){
			setValidate(true);
		}
		else{
			setValidate(false);
			dispatch(authSendCadastro(values));
			if(!error){
				setValues(initialState);
			}
		}

	};

	return(
		<>
		<div id="wrap_login">
			<div className="indent">
				<div className="col col2">
					<div className="bloco">
						{login ? (
							<div>
								<div className="title">
									<h4>Login</h4>
								</div>

								<form action="" onSubmit={handleSubmit}>
									<input type="text" name="email" value={values.email} onChange={handleChange} placeholder="E-mail"/>
									<input type="password" name="senha" value={values.senha} onChange={handleChange} placeholder="Senha"/>
									<input type="submit" disabled={!values.email} value="Entrar"/>
								</form>

								<div className="esqueci">
									<span>Esqueceu a senha?</span>
								</div>
							</div>
						) :
							<div>
								<div className="title">
									<h4>Cadastro</h4>
								</div>

								<form action="" onSubmit={handleRegister}>
									<input type="text" name="nome" value={values.nome} onChange={handleChange} placeholder="Nome completo"/>
									<input type="text" name="nome_usuario" value={values.nome_usuario} onChange={handleChange} placeholder="Nome de usuário"/>
									<input type="text" name="email" value={values.email} onChange={handleChange} placeholder="E-mail"/>
									<input type="text" name="endereco" value={values.endereco} onChange={handleChange} placeholder="Endereço"/>
									<input type="password" name="senha" value={values.senha} onChange={handleChange} placeholder="Senha"/>
									{loading ? (
										<div className="loading">
											<CircularProgress size={20} />
										</div>
									) : (
										<input type="submit" value="Cadastre-se"/>
									)}
								</form>
							</div>
						}
					</div>

					{user && (
						<div>logado</div>
					)}

					{validate && (
						<div className="error"><span>Preencha todos os campos.</span></div>
					)}

					{error && (
						<div className="error"><span>Ocorreu um erro. Tente novamente mais Tarde</span></div>
					)}

					{success && (
						<div className="success"><span>Usuário cadastrado com sucesso!.</span></div>
					)}

					<div className="bloco bloco2">
						{login ? (
							<span>Não tem uma conta?
							<button type="button" onClick={() => handleChangeForm()}>
								<span className="blue">Cadastre-se</span>
							</button></span>
						) :
							<span>tem uma conta?
							<button type="button" onClick={() => handleChangeForm()}>
								<span className="blue">Conecte-se</span>
							</button></span>}

					</div>

				</div>
			</div>
		</div>

		</>
	)
};

export default Login;
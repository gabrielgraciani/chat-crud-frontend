import React, {lazy, Suspense, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import {LOGIN, HOME, CRUD} from './routes';
import Header from 'components/header';
import {useSelector} from "react-redux";
import { useCookies } from 'react-cookie';

const Home = lazy(() => import('pages/index'));
const Login = lazy(() => import('pages/login'));
const Crud = lazy(() => import('pages/crud'));


function App({location}){
	const {id, nome } = useSelector(store => store.auth);

	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(['id']);
	// eslint-disable-next-line
	const [cookiesNome, setCookiesNome] = useCookies(['nome']);


	useEffect(() => {
		if(!cookies.id){
			setCookie('id', id || '', {path: '/', maxAge: 3600});
			setCookiesNome('nome', nome || '', {path: '/', maxAge: 3600});
		}
	}, [id, nome, cookies, setCookie, setCookiesNome, cookies.id]);

	const handleLogout = () => {
		setCookie('id', '');
		setCookiesNome('nome', '');
	};


	if(cookies.id){
		if(location.pathname === LOGIN){
			return <Redirect to={HOME} />
		}
	}
	else{
		if(location.pathname !== LOGIN){
			return <Redirect to={LOGIN} />
		}
	}

	return(
		<>
		<div id="wrapper_body">
			<Header location={location} handleLogout={handleLogout} />

			<div id="wrapper_components">
				<Suspense fallback={''}>
					<Switch>
						<Route path={LOGIN} component={Login} />
						<Route path={CRUD} component={Crud} />
						<Route component={Home} />
					</Switch>
				</Suspense>
			</div>

		</div>
		</>
	);
}

export default App

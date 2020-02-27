import React, {lazy, Suspense, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import {LOGIN, HOME} from './routes';
import Header from 'components/header';
import {useSelector} from "react-redux";
import { useCookies } from 'react-cookie';

const Home = lazy(() => import('pages/index'));
const Login = lazy(() => import('pages/login'));


function App({location}){
	const { user = [] } = useSelector(store => store.auth);

	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(['id']);

	useEffect(() => {
		if(!cookies.id){
			setCookie('id', user || '', {path: '/', maxAge: 3600});
		}
	}, [user, setCookie, cookies.id]);


	if(cookies.id){
		if(location.pathname === LOGIN){
			return <Redirect to={HOME} />
		}
	}
	else{
		if(location.pathname === HOME){
			return <Redirect to={LOGIN} />
		}
	}

	return(
		<>
		<div id="wrapper_body">
			<Header location={location} />

			<div id="wrapper_components">
				<Suspense fallback={''}>
					<Switch>
						<Route path={LOGIN} component={Login} />
						<Route component={Home} />
					</Switch>
				</Suspense>
			</div>

		</div>
		</>
	);
}

export default App

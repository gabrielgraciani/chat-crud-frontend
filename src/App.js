import React, {lazy, Suspense} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import {LOGIN, HOME} from './routes';
import Header from 'components/header';
import Footer from 'components/footer';
import {useSelector} from "react-redux";

const Home = lazy(() => import('pages/index'));
const Login = lazy(() => import('pages/login'));


function App({location}){
	const { user = [] } = useSelector(store => store.auth);

	if(user){
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
			<Header />

			<div id="wrapper_components">
				<Suspense fallback={''}>
					<Switch>
						<Route path={LOGIN} component={Login} />
						<Route component={Home} />
					</Switch>
				</Suspense>
			</div>

			<Footer />
		</div>
		</>
	);
}

export default App

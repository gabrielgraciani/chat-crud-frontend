import React, {lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom';
import {LOGIN} from './routes';
import Header from 'components/header';
import Footer from 'components/footer';

const Home = lazy(() => import('pages/index'));
const Login = lazy(() => import('pages/login'));


const App = ({location}) => (
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

export default App

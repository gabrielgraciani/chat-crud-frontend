import React from 'react';
import { useCookies } from 'react-cookie';

function Home(){

	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(['id']);

	const handleLogout = () => {
		setCookie('id', '');
	};

	return(
		<>
		<div>home</div>
		<button type="button" onClick={ handleLogout }>Logout</button>
		</>
	)
}

export default Home;
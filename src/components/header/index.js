import React, {useState} from 'react';
import {LOGIN} from '../../routes';
import { useCookies } from 'react-cookie';

function Header({location}){

	const [hidden, setHidden] = useState(false);

	if(location.pathname === LOGIN){
		try{
			setHidden(true);
		} catch(error){}
	}

	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(['id']);

	const handleLogout = () => {
		setCookie('id', '');
	};

	return(
		<>
			{!hidden && (
				<div id="wrap_header">
					<div className="indent">
						<div className="menu">
							<li>Home</li>
							<li>Gerenciar usuários</li>
							<li onClick={handleLogout}>Logout</li>

						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Header;
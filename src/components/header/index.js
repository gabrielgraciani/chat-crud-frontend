import React, {useState} from 'react';
import {LOGIN} from '../../routes';
import { useCookies } from 'react-cookie';
import {Link} from 'react-router-dom';
import {CRUD, HOME} from 'routes';


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
							<Link to={HOME}>
								<li>Home</li>
							</Link>
							<Link to={CRUD}>
								<li>Gerenciar usuários</li>
							</Link>
							<li onClick={handleLogout}>Logout</li>

						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Header;
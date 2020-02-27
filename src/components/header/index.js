import React, {useState} from 'react';
import {LOGIN} from '../../routes';

function Header({location}){

	const [hidden, setHidden] = useState(false);

	if(location.pathname === LOGIN){
		try{
			setHidden(true);
		} catch(error){
		}
	}

		return(
			<>
				{!hidden && (
					<div>header</div>
				)}
			</>
	)
}

export default Header;
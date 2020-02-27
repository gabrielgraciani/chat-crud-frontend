import React from 'react';
import Tabela from 'components/crud/tabela';
import Form from 'components/crud/formulario';

function Crud(){
	return(
		<>
		<div id="wrap_crud">
			<div className="indent">

				<Tabela/>

			</div>
		</div>

		<Form />

		</>
	);
}

export default Crud;
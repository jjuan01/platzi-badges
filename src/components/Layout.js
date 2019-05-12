import React from 'react';
import Navbar from './Navbar';

function Layout(props) {
	// Children llama lo que esta dentro
	// de la etiqueta <Layout> donde es llamada
	// como argumento de la funcion
	const children = props.children;
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
		</React.Fragment>
	);
}
export default Layout;

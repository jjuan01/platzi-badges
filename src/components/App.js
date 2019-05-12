import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				{/* Lo que esta dentro de <Layout> se muestra
        gracias al prop children dentro de la funcion 
        en el componente layout */}
				<Switch>
					<Route
						exact
						path='/'
						component={Home}
					/>
					<Route
						exact
						path='/badges'
						component={Badges}
					/>
					<Route
						exact
						path='/badges/new'
						component={BadgeNew}
					/>
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

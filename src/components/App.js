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
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
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
					<Route
						exact
						path='/badges/:badgeId'
						component={BadgeDetails}
					/>
					<Route
						exact
						path='/badges/:badgeId/edit'
						component={BadgeEdit}
					/>
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

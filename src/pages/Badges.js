import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';

import confLogo from '../images/badge-header.svg';
// NAVBAR SE LLAMA AHORA DESDE
// EL LAYOUT PARA CADA PAGINA
// import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import MiniLoader from '../components/MiniLoader.';

class Badges extends React.Component {
	// Metodos que se ejecutan
	// antes y despues del render
	// constructor(props) {
	// 	super(props);
	// 	console.log('1. Cosntructors');
	// 	this.state = {
	// 		data: []
	// 	};
	// }

	// componentDidMount() {
	// 	console.log('3. componentDidMount');

	// 	this.timeoutId = setTimeout(() => {
	// 		this.setState({
	// 			data: [
	// 				{
	// 					id:
	// 						'2de30c42-9deb-40fc-a41f-05e62b5939a7',
	// 					firstName: 'Freda',
	// 					lastName: 'Grady',
	// 					email: 'Leann_Berge@gmail.com',
	// 					jobTitle: 'Legacy Brand Director',
	// 					twitter: 'FredaGrady22221-7573',
	// 					avatarUrl:
	// 						'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
	// 				},
	// 				{
	// 					id:
	// 						'd00d3614-101a-44ca-b6c2-0be075aeed3d',
	// 					firstName: 'Major',
	// 					lastName: 'Rodriguez',
	// 					email: 'Ilene66@hotmail.com',
	// 					jobTitle: 'Human Research Architect',
	// 					twitter: 'MajorRodriguez61545',
	// 					avatarUrl:
	// 						'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon'
	// 				},
	// 				{
	// 					id:
	// 						'63c03386-33a2-4512-9ac1-354ad7bec5e9',
	// 					firstName: 'Daphney',
	// 					lastName: 'Torphy',
	// 					email: 'Ron61@hotmail.com',
	// 					jobTitle: 'National Markets Officer',
	// 					twitter: 'DaphneyTorphy96105',
	// 					avatarUrl:
	// 						'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon'
	// 				}
	// 			]
	// 		});
	// 	}, 3000);
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('5. DidUpdate');
	// 	console.log({
	// 		prevProps: prevProps,
	// 		prevState: prevState
	// 	});

	// 	console.log({
	// 		props: this.props,
	// 		state: this.state
	// 	});
	// }

	// componentWillUnmount() {
	// 	console.log('6. WillUnmount');

	// 	clearTimeout(this.timeoutId);
	// }

	/* 	state = {
		loading: true,
		error: null,
		data: undefined
  }; */

	state = {
		loading: true,
		error: null,
		data: undefined
	};

	componentDidMount() {
		this.fetchData();

		// Polling: Cada determinado tiempo
		// se busquen   ciertos datos y se
		// actualicen
		this.intervalId = setInterval(
			this.fetchData,
			5000
		);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.list();
			this.setState({
				loading: false,
				data: data
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	};

	render() {
		if (
			this.state.loading === true &&
			!this.state.data
		) {
			return <PageLoading>/</PageLoading>;
		}

		if (this.state.error) {
			return (
				<PageError error={this.state.error} />
			);
		}

		return (
			<React.Fragment>
				{/* NAVBAR SE LLAMA AHORA DESDE 
        EL LAYOUT PARA CADA PAGINA */}
				{/* <Navbar /> */}

				<div className='Badges'>
					<div className='Badges__hero'>
						<div className='Badges__container'>
							<img
								className='Badges_conf-logo'
								src={confLogo}
								alt='Conf Logo'
							/>
						</div>
					</div>
				</div>
				<div className='Badges__container'>
					<div className='Badges__buttons'>
						{/* Componente de React Router que permite 
          intercetar el link para que no haya que 
          recargar toda la pagina 
          
          Se usa junto a BrowserRouter 
          Switch y Route */}
						<Link
							to='/badges/new'
							className='btn btn-primary'
						>
							New badge
						</Link>
					</div>

					{/* <div className='Badges__list'>
						<div className='Badges__container'> */}
					<BadgesList badges={this.state.data} />
					{/* </div> */}
					{/* </div> */}
					{this.state.loading && <MiniLoader />}
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;

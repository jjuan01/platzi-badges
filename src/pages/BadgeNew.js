import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
// NAVBAR SE LLAMA AHORA DESDE
// EL LAYOUT PARA CADA PAGINA
// import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	handleChange = e => {
		// const nextForm = this.state.form;
		// nextForm[e.target.name] = e.target.value;

		// this.setState({
		//   form: nextForm
		// });

		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({ loading: true, error: null });

		try {
			console.log(this.state.form);
			await api.badges.create(this.state.form);
			this.setState({ loading: false });
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				{/* NAVBAR SE LLAMA AHORA DESDE
        EL LAYOUT PARA CADA PAGINA */}
				{/* <Navbar /> */}
				<div className='BadgeNew__hero'>
					<img
						className='BadgeNew__hero-image img-fluid'
						src={header}
						alt='Logo'
					/>
				</div>

				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<Badge
								firstName={
									this.state.form.firstName ||
									'FIRST_NAME'
								}
								lastName={
									this.state.form.lastName ||
									'LAST_NAME'
								}
								twitter={
									this.state.form.twitter ||
									'twitter'
								}
								jobTitle={
									this.state.form.jobTitle ||
									'JOB_TITLE'
								}
								email={
									this.state.form.email || 'EMAIL'
								}
								avatarUrl='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
							/>
						</div>

						<div className='col-6'>
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;

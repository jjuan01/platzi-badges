import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
// NAVBAR SE LLAMA AHORA DESDE
// EL LAYOUT PARA CADA PAGINA
// import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
// import PageError from '../components/PageError';
import api from '../api';
import { truncate } from 'fs';

class BadgeEdit extends React.Component {
	state = {
		loading: truncate,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async e => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.read(
				this.props.match.params.badgeId
			);

			this.setState({
				loading: false,
				form: data
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
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
			await api.badges.update(
				this.props.match.params.badgeId,
				this.state.form
			);
			this.setState({ loading: false });

			this.props.history.push('/badges');
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		return (
			<React.Fragment>
				{/* NAVBAR SE LLAMA AHORA DESDE
        EL LAYOUT PARA CADA PAGINA */}
				{/* <Navbar /> */}
				<div className='BadgeEdit__hero'>
					<img
						className='BadgeEdit__hero-image img-fluid'
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
							<h1>Edit Attendant</h1>
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeEdit;

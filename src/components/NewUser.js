import React from 'react'
// import PropTypes from 'prop-types'

class NewUser extends React.Component {

	state = {
		username: '',
		password: '',
		submitted: false
	}

	handleChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		alert('submitted');
	}


	render () {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input
							type='text'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</label>
					<br/>
					<label>
						Password:
						<input
							type='password'
							name='password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</label>
					<br/>
					<input type='submit'/>
				</form>
			</div>
		)
	}
}

export default NewUser;

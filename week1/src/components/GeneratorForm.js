import React from 'react'
import TextField from './TextField'
import store from '../store'
import './GeneratorForm.css'

export default class GeneratorForm extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.form)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

	render() {
		return (
			<div className="GeneratorForm">
				<TextField
					label="1. What is your name?"
					value={this.state.name}
					onChange={this.handleChange.bind(this, 'name')}
				/>
				<TextField
					label="2. What is your email?"
					value={this.state.email}
					onChange={this.handleChange.bind(this, 'email')}
				/>
                
			</div>
		)
	}

	handleChange(input, value) {
		const form = {...this.state}
		form[input] = value
		store.setState({form})
	}

}
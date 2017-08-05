import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

export default class TextField extends React.Component {

	static propTypes = {
		label:    PropTypes.string,
		value:    PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired
	}

	static defaultProps = {
		value: ''
	}

	render() {
		const {label, value} = this.props

		return (
			<label className="TextField">
				<div className="TextField-label">{label}</div>
				<input
					className="TextField-input"
					type="text"
					value={value}
					onChange={this.handleChange.bind(this)}
				/>
			</label>
		)
	}

	handleChange(e) {
		const value = e.target.value
		this.props.onChange(value)
	}

}
import React from 'react'


class Counter extends React.Component {
	state = { count: 0 }

	_inc = () => this.setState(prev => ({ count: prev.count + 1 }))
	_dec = () => this.setState(prev => ({ count: prev.count - 1 }))

	render () {
		const { count } = this.state

		return (
			<React.Fragment>
				Class Counter
				<button onClick={this._inc}>INC</button>
				{count}
				<button onClick={this._dec}>DEC</button>
			</React.Fragment>
		)
	}
}

export default Counter

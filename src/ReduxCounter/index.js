import React from 'react'
import { connect } from 'react-redux'

import {
	inc as incAction,
	dec as decAction,
} from 'store/actions'


const Counter = ({ count, inc, dec }) => (
	<React.Fragment>
		Redux-wired Counter
		<button onClick={inc}>INC</button>
		{count}
		<button onClick={dec}>DEC</button>
	</React.Fragment>
)

const mapStateToProps = (state) => ({
	count: state.counter
})
const mapDispatchToProps = {
	inc: incAction,
	dec: decAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

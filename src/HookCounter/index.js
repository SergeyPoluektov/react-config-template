import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'


const Counter = () => {
	const [count, setCount] = useState(0)
	const inc = useCallback(() => setCount(count + 1))
	const dec = useCallback(() => setCount(count - 1))
	return (
		<React.Fragment>
			Hook Counter
			<button onClick={inc}>INC</button>
			{count}
			<button onClick={dec}>DEC</button>
		</React.Fragment>
	)
}

export default Counter

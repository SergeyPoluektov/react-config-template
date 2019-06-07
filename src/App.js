import { hot } from 'react-hot-loader/root'
import React from 'react'

import Counter from './Counter'
import ReduxCounter from './ReduxCounter'
import HookCounter from './HookCounter'


const App = () => (
	<React.Fragment>
		<h2>React + Redux + HMR config example</h2>
		<Counter/>
		<div>
			<ReduxCounter/>
		</div>
		<div>
			<HookCounter/>
		</div>
	</React.Fragment>
)

export default hot(App)

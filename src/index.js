import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import getConfiguredStore from './store'


const rootEl = document.getElementById('root')
const store = getConfiguredStore()
const rootApp = (
	<Provider store={store}>
		<App/>
	</Provider>
)

ReactDOM.render(rootApp, rootEl)

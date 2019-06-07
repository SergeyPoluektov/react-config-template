import { combineReducers, createStore } from 'redux'
import rootReducer from './root/reducer'


function getConfiguredStore() {
	const store = createStore(rootReducer)

	if (module.hot) {
		module.hot.accept('./root/reducer', () => {
			store.replaceReducer(rootReducer)
		})
	}

	return store
}

export default getConfiguredStore

import {
	INC,
	DEC,
} from '../actions'


const initialState = 0

export default function counterReducer(state = initialState, action) {
	switch(action.type) {
		case INC: return state + 2
		case DEC: return state - 1
		default: return state
	}
}

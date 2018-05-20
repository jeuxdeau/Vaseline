import * as list from '../actions/list'

const initialState = {
	companion_list: undefined,
	errors: {},
}

export default (state=initialState, action) => {
	switch(action.type) {
		case list.LIST_SUCCESS:
			return {
				companion_list: action.payload,
				errors: {}
			}
		case list.LIST_FAILURE:
			return {
				companion_list: undefined,
				errors: 
					action.payload.response || {'get_list_errors': action.payload.statusText},
			}
		default:
			return state
	}
}

export const companionList = (state) => (state.companion_list)
export const errors = (state) => (state.errors)
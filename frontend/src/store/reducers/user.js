import * as userAction from '../actions/user'

const initialState = {
	user: undefined,
	news: undefined,
	repr: undefined,
	errors: {},
}

export default (state=initialState, action) => {
	switch(action.type) {
		case userAction.USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				news: state.news,
				errors: {}
			}
		case userAction.USER_FAILURE:
			return {
				...state,
				user: undefined,
				news: state.news,
				errors: 
					action.payload.response || {'get_user_errors': action.payload.statusText},
			}
		case userAction.USER_NEWS_SUCCESS:
			return {
				...state,
				user: state.user,
				news: action.payload,
				errors: {}
			}
		case userAction.USER_NEWS_FAILURE:
			return {
				...state,
				user: state.user,
				news: undefined,
				errors:
					action.payload.response || {'get_user_news_errors': action.payload.statusText}
			}
		case userAction.USER_REPR_SUCCESS:
			return {
				...state,
				repr: action.payload,
				errors: {}
			}
		case userAction.USER_REPR_FAILURE:
			return {
				...state,
				repr: undefined,
				errors:
					action.payload.response || {'get_user_repr_errors': action.payload.statusText}
			}
		case userAction.USER_REPR_UPDATE_SUCCESS:
			return {
				...state,
				repr: action.payload,
				errors: {}
			}
		case userAction.USER_REPR_UPDATE_FAILURE:
			return {
				...state,
				repr: undefined,
				errors:
					action.payload.response || {'get_user_repr_update_errors': action.payload.statusText}
			}
		default:
			return state
	}
}

export const userInfo = (state) => (state.user)
export const userNews = (state) => (state.news)
export const userRepr = (state) => (state.repr)
export const errors = (state) => (state.errors)
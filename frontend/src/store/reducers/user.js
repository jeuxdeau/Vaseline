import * as userAction from '../actions/user'

const initialState = {
	user: undefined,
	news: undefined,
	errors: {},
}

export default (state=initialState, action) => {
	switch(action.type) {
		case userAction.USER_SUCCESS:
			return {
				user: action.payload,
				news: state.news,
				errors: {}
			}
		case userAction.USER_FAILURE:
			return {
				user: undefined,
				news: state.news,
				errors: 
					action.payload.response || {'get_user_errors': action.payload.statusText},
			}
		case userAction.USER_NEWS_SUCCESS:
			return {
				user: state.user,
				news: action.payload,
				errors: {}
			}
		case userAction.USER_NEWS_FAILURE:
			return {
				user: state.user,
				news: undefined,
				errors:
					action.payload.response || {'get_user_news_errors': action.payload.statusText}
			}
		default:
			return state
	}
}

export const userInfo = (state) => (state.user)
export const userNews = (state) => (state.news)
export const errors = (state) => (state.errors)
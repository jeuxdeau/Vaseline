import { connect } from 'react-redux'
import SearchPage from '../components/pages/SearchPage'
import { search } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { user } from '../store/actions/user'
import { userInfo, userID } from '../store/reducers'
import { currentCompanionList, listErrors } from '../store/reducers'


const mapStateToProps = (state) => ({
	companion_list: currentCompanionList(state),
	user_info : userInfo(state),
        user_id : userID(state)
})

const mapDispatchToProps = (dispatch) => ({
        get_user_info: (id) => {
                dispatch(user(id))
        },
	get_companion_list: () => {
                dispatch(list())
        },
        post_signout: () => {
                dispatch(logout())
        }

})


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)

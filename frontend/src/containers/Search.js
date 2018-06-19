import { connect } from 'react-redux'
import SearchPage from '../components/pages/SearchPage'
import { search } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { user, user_repr } from '../store/actions/user'
import { userInfo, userID } from '../store/reducers'
import { currentCompanionList, listErrors } from '../store/reducers'
import { address_list } from '../store/actions/auth'
import { userRepr, currentCompanionAddressList } from '../store/reducers'


const mapStateToProps = (state) => ({
	companion_list: currentCompanionList(state),
	companion_address_list: currentCompanionAddressList(state),
	user_repr: userRepr(state),
	user_info : userInfo(state),
        user_id : userID(state)
})

const mapDispatchToProps = (dispatch) => ({
        get_user_repr: (id) => {
                dispatch(user_repr(id))
        },
	get_user_info: (id) => {
                dispatch(user(id))
        },
	get_companion_list: () => {
                dispatch(list())
        },
        post_signout: () => {
                dispatch(logout())
        },
	get_companion_address_list: () => {
                dispatch(address_list())
        }

})


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)

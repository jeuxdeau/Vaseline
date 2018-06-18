import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
	UncontrolledDropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class Sidebar extends Component {
	createInterval(f, dynamicParam0, dynamicParam1, interval) {
		setInterval(function() {
			f(dynamicParam0, dynamicParam1)
		}, interval)
	}

	updateUserInfo(get_user_news, userID, user) {
		//console.log("Update user news information...")
		get_user_news(userID)
	}

	// get number of unread news
	uNews(user_news) {
		const companions = user_news.companion
		let num = 0
		var i
		for(i = 0; i < companions.length; i++) {
			const message = companions[i].message_received
			const like = companions[i].like_received
			const proposal = companions[i].proposal_received

			var j
			for(j = 0; j < message.length; j++) {
				if(message[j].is_read == false) num++
			}
			for(j = 0; j < like.length; j++) {
				if(like[j].is_read == false) num++
			}
			for(j = 0; j < proposal.length; j++) {
				if(proposal[j].is_read == false) num++
			}
		}
		return num
	}

	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.compToggle = this.compToggle.bind(this)
		this.state = {
			isOpen: false,
			compOpen: false,
			userID: props.user_id,
		}
	}

	componentDidMount() {
		this.props.get_user_news(this.props.user_id)
		this.props.get_user_repr(this.props.user_id)
		this.props.get_companion_list()
		this.createInterval(this.updateUserInfo, this.props.get_user_news, this.state.userID, 3000)
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	compToggle() {
		this.setState({
			...this.state,
			compOpen: !this.state.compOpen,
		})
	}

	GetMyCompanions(companion_list, userId) {
		const myCompanions = companion_list.filter((singleCompanion) => { return (singleCompanion.user == userId)})
		return myCompanions
	}

	render() {
		const news = this.props.user_news
		const repr = this.props.user_repr
		const comp = this.props.companion_list
		const userId = this.props.user_id
		if(news == undefined || repr == undefined || comp == undefined) return null
		const uNewsNum = this.uNews(news)
		const userName = news.username
		const userRepr = repr.represent_companion
		
		const myCompanions = this.GetMyCompanions(comp, userId)
		const myReprCompanion = myCompanions.filter((myCompanion) => {return (myCompanion.id == userRepr)})[0]
		return(
			<div>
				<Navbar color="info" light expand="md">
					<NavbarBrand href="/" className="text-white">VASELINE</NavbarBrand>
					<NavbarBrand>Welcome! {userName} </NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.setState.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<ButtonDropdown isOpen={this.state.compOpen} toggle={this.compToggle}>
									<DropdownToggle size="sm" color="primary" caret>
										{myReprCompanion.name}
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem header>반려동물 바꾸기</DropdownItem>
										<DropdownItem div/>
									</DropdownMenu>
								</ButtonDropdown>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/jeuxdeau/Vaseline">Github</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/notification">News</NavLink>
							</NavItem>
							<NavItem>
								{uNewsNum}
							</NavItem>
							<NavItem>
                                <NavLink href="/account/">Account</NavLink>
                            </NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

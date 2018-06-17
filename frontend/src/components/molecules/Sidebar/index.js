import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
	NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
		this.state = {
			isOpen: false,
			userID: props.user_id
		}
	}

	componentDidMount() {
		this.props.get_user_news(this.props.user_id)
		this.createInterval(this.updateUserInfo, this.props.get_user_news, this.state.userID, 3000)
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const news = this.props.user_news
		if(news == undefined) return null
		const uNewsNum = this.uNews(news)
		const userName = news.username
		return(
			<div>
				<Navbar color="info" light expand="md">
					<NavbarBrand href="/" className="text-white">VASELINE</NavbarBrand>
					<NavbarBrand>Welcome! {userName}</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.setState.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/notification">News</NavLink>
							</NavItem>
							<NavItem>
								{uNewsNum}
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
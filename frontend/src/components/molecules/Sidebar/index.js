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
		console.log("Update user information...")
		get_user_news(userID)
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
		console.log(this.props.user_news)
		const userName = (this.props.user_news == undefined) ? "Undefined" : this.props.user_news.username
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
								<NavLink href="/detail/companion1">News</NavLink>
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
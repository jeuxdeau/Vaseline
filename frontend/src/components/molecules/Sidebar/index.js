import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledTooltip,
	UncontrolledDropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'

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
		this.createInterval(this.updateUserInfo, this.props.get_user_news, this.state.userID, 1000)
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

	UpdateMyReprCompanion(reprId) {
		this.props.put_user_repr(this.props.user_id, reprId)
	}

	MakeMyCompanionDropdownItems(myCompanions) {
		return (
			myCompanions.map((singleCompanion, index) =>
				{return (<DropdownItem onClick={()=>
					{this.UpdateMyReprCompanion(singleCompanion.id)}}>{singleCompanion.name}</DropdownItem>)})
		)
	}

	MakeMyCompanionDropdown(myCompanions, myReprCompanion) {
		myCompanions = myCompanions.filter((singleCompanion) => { return (singleCompanion.id != myReprCompanion.id)})
		return (
		<UncontrolledDropdown nav inNavbar>
			<DropdownToggle id="myRepresentingCompanionSelector" nav caret>
				{myReprCompanion.name}
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem header>반려동물 목록</DropdownItem>
				<DropdownItem divider />
				{this.MakeMyCompanionDropdownItems(myCompanions)}
			</DropdownMenu>
		</UncontrolledDropdown>
		)
	}

	onSignoutBtnClick() {
		this.props.post_signout()
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
					<NavbarBrand>{userName}님, 환영합니다.♥ </NavbarBrand>
					<Button size="sm" color="secondary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>{' '}
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.setState.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								{this.MakeMyCompanionDropdown(myCompanions, myReprCompanion)}
							</NavItem>
							<UncontrolledTooltip placement="bottom" target="myRepresentingCompanionSelector">
								반려동물을 바꿀 수 있습니다.
							</UncontrolledTooltip>
							<NavItem id="newsfeed">
								<NavLink href="/notification">뉴스피드<Badge color="danger">{uNewsNum}</Badge></NavLink>
							</NavItem>
							<UncontrolledTooltip placement="bottom" target="newsfeed">
								반려동물에게 온 소식을 확인할 수 있습니다.
							</UncontrolledTooltip>
							<NavItem id="account">
                                <NavLink href="/account/">내 계정</NavLink>
                            </NavItem>
                            <UncontrolledTooltip placement="bottom" target="account">
								계정을 관리합니다.
							</UncontrolledTooltip>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

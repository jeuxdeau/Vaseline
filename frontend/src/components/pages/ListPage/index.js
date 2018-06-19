import React, { Component } from 'react'
import { Jumbotron, Alert, Button, CardDeck, Container, Row, Col } from 'reactstrap'
import CompanionBlock from '../../atoms/CompanionBlock'
import { Redirect } from 'react-router-dom'
export default class ListPage extends Component {
	onSignoutBtnClick() {
		this.props.post_signout()
	}
	componentDidMount() {
		this.props.get_companion_list()
		this.props.get_companion_address_list()
		this.props.get_user_repr(this.props.user_id)
            	this.props.get_user_info(this.props.user_id)
	}
	constructor(props) {
            super(props)
            this.state = {
                setting:false,
                desired_mate_sex: undefined,
                desired_mate_breed: undefined,
                desired_mate_size: undefined,
                desired_mate_affinity_with_human: undefined,
                desired_mate_affinity_with_dog: undefined,
                desired_mate_shyness: undefined,
                desired_mate_activity: undefined,
                desired_mate_aggression: undefined,
                desired_mate_loudness: undefined,
                desired_mate_etc: undefined,
                desired_mate_first_address:undefined,
                desired_mate_second_address:undefined,
                repr: undefined,
                companion_all_list: undefined,
                search_companion_list: undefined,
                user:undefined,
		result:[],
            }
	}
	search_result_atom = (companion, index, first_address, second_address, score) => {
            return (
                <Col xs="4">
                <CompanionBlock companion={companion} key={index} first_address={first_address} second_address={second_address} score = {score}/><p />
                </Col>)
            }
            search_result = (companion_list) => {
                    console.log(companion_list)
                if(companion_list){
			console.log(companion_list)
                    console.log("#########################")
                    return companion_list.map((companion, index) =>
                    this.search_result_atom(companion, index, companion_list[index].first_address, companion_list[index].second_address, companion_list[index].score))
                }
                else{
                        return <div>검색 결과가 없습니다.</div>
                }
            }
	all_atom = (companion, index, first_address, second_address, score) => {
            return (
                <Col xs="4">
                <CompanionBlock companion={companion} key={index} first_address={first_address} second_address={second_address} score = {score}/><p />
                </Col>)
            }
            all_result = (companion_list) => {
                    console.log(companion_list)
                if(companion_list){
                        console.log(companion_list)
                    console.log("#########################")
                    return companion_list.map((companion, index) =>
                    this.all_atom(companion, index, companion_list[index].first_address, companion_list[index].second_address, companion_list[index].score))
                }
                else{
                        return <div>검색 결과가 없습니다.</div>
                }
            }


	render() {
		const companion_list = this.props.companion_list
		const companion_address_list = this.props.companion_address_list
		const errors = this.props.errors || {}
		if(this.props.companion_list && this.props.companion_address_list && this.props.user_repr)
		{
			if(!this.state.setting){
				let companion_all_list = this.props.companion_list
                        console.log(companion_all_list)
                        for (var key in companion_all_list){
                                console.log("tttttttttttttt")
                                companion_all_list[key].first_address = this.props.companion_address_list[key].user.profile.first_address
                                companion_all_list[key].second_address = this.props.companion_address_list[key].user.profile.second_address
                                console.log(companion_all_list)
                        }
                        console.log(companion_all_list)
                        let companion_repr = this.props.companion_list[this.props.user_repr.represent_companion-1]
                        console.log("########################")
                        console.log(companion_repr)
                        console.log(this.props.user_repr.represent_companion)
                        this.setState({
                            setting:true,
                            desired_mate_sex: companion_repr.desired_mate.sex,
                            desired_mate_breed: companion_repr.desired_mate.breed,
                            desired_mate_size: companion_repr.desired_mate.size,
                            desired_mate_affinity_with_human: companion_repr.desired_mate.personality.affinity_with_human,
                            desired_mate_affinity_with_dog: companion_repr.desired_mate.personality.affinity_with_dog,
                            desired_mate_shyness: companion_repr.desired_mate.personality.shyness,
                            desired_mate_activity: companion_repr.desired_mate.personality.activity,
                            desired_mate_aggression: companion_repr.desired_mate.personality.aggression,
                            desired_mate_loudness: companion_repr.desired_mate.personality.loudness,
                            desired_mate_etc: companion_repr.desired_mate.personality.etc,
                            desired_mate_first_address: this.props.user_info.profile.first_address,
                            desired_mate_second_address: this.props.user_info.profile.second_address,
                            repr: this.props.companion_list[this.props.user_repr.represent_companion-1],
                            companion_all_list:companion_all_list,
                            user:this.props.user_info
                        })
			}
			if(this.state.repr)
			{
				if(this.state.repr.id!=this.props.companion_list[this.props.user_repr.represent_companion-1].id){
					window.location.reload();	
				}				
				console.log(this.state.result.length==0)
				if(this.state.result.length==0)
				{
					console.log("saaa")
					console.log(this.state.companion_all_list)
					console.log(this.state)
					let result_imsi = []
					for (var key in this.state.companion_all_list)
					{
						let x = this.state.companion_all_list[key]
						console.log("^0^")
						console.log(x)
						console.log(this.state)
						if(x.breed==this.state.desired_mate_breed && x.sex==this.state.desired_mate_sex && x.first_address==this.state.desired_mate_first_address)
						{
							result_imsi.push(this.state.companion_all_list[key])
						}
					}
					let personality_result = []
					if(result_imsi.length == 0){
						this.setState({search_companion_list:result_imsi})
					}
					else{
						let companion_all_list_imsi = this.state.companion_all_list
						for(var key in this.state.companion_all_list){
                                                        let p = this.state.companion_all_list[key].personality
                                                        let dp = this.state.repr.desired_mate.personality

                                                        let score = 0
                                                        if(dp.affinity_with_human != 0)
                                                                score += 2-Math.abs(dp.affinity_with_human-p.affinity_with_human)
                                                        if(dp.affinity_with_dog != 0)
                                                                score += 2-Math.abs(dp.affinity_with_dog-p.affinity_with_dog)
                                                        if(dp.aggression != 0)
                                                                score += 2-Math.abs(dp.aggression-p.aggression)
                                                        if(dp.loudness != 0)
                                                                score += 2-Math.abs(dp.loudness-p.loudness)
                                                        if(dp.shyness != 0)
                                                                score += 2-Math.abs(dp.shyness-p.shyness)
                                                        if(dp.activity != 0)
                                                                score += 2-Math.abs(dp.activity-p.activity)
                                                        companion_all_list_imsi[key].score = (parseInt)((25*score/6)+50)
                                                }
						this.setState({companion_all_list:companion_all_list_imsi})
						for(var key in result_imsi){
							let p = result_imsi[key].personality
							let dp = this.state.repr.desired_mate.personality
							
							let score = 0
							if(dp.affinity_with_human != 0)
								score += 2-Math.abs(dp.affinity_with_human-p.affinity_with_human)
							if(dp.affinity_with_dog != 0)
								score += 2-Math.abs(dp.affinity_with_dog-p.affinity_with_dog)
							if(dp.aggression != 0)
								score += 2-Math.abs(dp.aggression-p.aggression)
							if(dp.loudness != 0)
								score += 2-Math.abs(dp.loudness-p.loudness)
							if(dp.shyness != 0)
								score += 2-Math.abs(dp.shyness-p.shyness)
							if(dp.activity != 0)
								score += 2-Math.abs(dp.activity-p.activity)
							result_imsi[key].score = (parseInt)((25*score/6)+50)
						}
					}
					console.log("result_before_sort")
					console.log(result_imsi)
					result_imsi.sort(function(a, b){
						if(a.score > b.score)
							return -1
						if(a.score < b.score)
							return 1
						return 0})
					console.log("result")
					console.log(result_imsi)
					this.setState({search_companion_list:result_imsi,
					result:result_imsi})

				}
				return (
				<Jumbotron className="container">
					<h1>
						VASELINE
					</h1>
					<CardDeck>
		                            {this.search_result(this.state.search_companion_list)}
                	                </CardDeck>
					<center><h2>----------------------------------------------------</h2></center>
					<CardDeck>
						{this.all_result(this.state.companion_all_list)}
					</CardDeck>
	
				</Jumbotron>
			)
			}
			else{
				return (
                                <Jumbotron className="container">
                                </Jumbotron>
                        )
			}
		}
		else {
			return (
				<Jumbotron className="container">
				</Jumbotron>
			)
		}
	}
}

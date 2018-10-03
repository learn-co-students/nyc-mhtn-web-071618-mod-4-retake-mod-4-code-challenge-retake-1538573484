import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	constructor(props) {
		super(props)

		this.state = {
			mybots: this.props.bots
		}
	}

	generateCards = () => {
		return this.state.mybots.map((bot,idx) => <BotCard key={idx} bot={bot} handleClick={this.props.handleBotSpecs}/>)
	}

	sortByName = () => {
		this.setState({
			mybots: this.props.bots.sort((a,b) => a.name < b.name ? -1 : 1)
		})
	}

	sortByHealth = () => {
		this.setState({
			mybots: this.props.bots.sort((a,b) => a.health < b.health ? -1 : 1)
		})
	}
	sortByDamage = () => {
		this.setState({
			mybots: this.props.bots.sort((a,b) => a.damage < b.damage ? -1 : 1)
		})
	}
	sortByArmor = () => {
		this.setState({
			mybots: this.props.bots.sort((a,b) => a.armor < b.armor ? -1 : 1)
		})
	}

	filterBots = (event) => {
		this.setState({
			mybots: this.props.bots.filter(bots => bots.name.toLowerCase().includes(event.target.value.toLowerCase()))
		})
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.bots !== this.props.bots){
				this.setState({mybots: nextProps.bots});
		}
	}

  render(){
  	return (
  	  <div className="ui four column grid">
					<button onClick={() => this.sortByName()}> Sort By Name</button>
					<button onClick={() => this.sortByHealth()}> Sort By Health</button>
					<button onClick={() => this.sortByDamage()}> Sort By Damage</button>
					<button onClick={() => this.sortByArmor()}> Sort By Armor</button>
					<input type='text' placeholder='Filter' onChange={this.filterBots}/>
    		<div className="row">
    		  {this.generateCards()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

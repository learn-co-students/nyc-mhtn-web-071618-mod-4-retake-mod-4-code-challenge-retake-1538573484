import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	generateCards = () => {
		return this.props.bots.map((bot,idx) => <BotCard key={idx} bot={bot} handleClick={this.props.handleAddToArmy}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.generateCards()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

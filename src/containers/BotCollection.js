import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  render(){
    const botIterator = this.props.allBots.map(bot => {
      return <BotCard key={bot.id} {...bot} handleClick={this.props.handleClick}/>
    })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {botIterator}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

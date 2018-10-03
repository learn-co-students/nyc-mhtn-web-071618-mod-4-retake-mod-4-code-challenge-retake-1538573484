import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  onChange = (event)=>{

    let condition={
      ...this.props.condition,
      [event.target.name]:event.target.value
    }
    this.props.onFilter(condition)
  }
  render(){
  	return (
  	  <div className="ui four column grid">
        <div>
        sort by:
        <select className="ui select" name="sortBy" onChange={this.onChange} value={this.props.condition.sortBy}>
          <option value="" ></option>
          <option value="health" >health</option>
          <option value="damage" >damage</option>
          <option value="armor" >armor</option>
        </select>
        search:
        <input className="ui input" name="search" onChange={this.onChange} value={this.props.condition.search} />
        </div>
    		<div className="row">
    		  {this.props.bots.map(bot=><BotCard key={bot.id} bot={bot} onBotClick={this.props.onClickBotOnCollection} />)}
    		</div>

  	  </div>
  	);
  }

};

export default BotCollection;

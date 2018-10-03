import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  passBots = () => {
    return this.props.bots.map((bot) => {
      return(
        <BotCard bot={bot} handleClick={this.props.handleClick}/>
      )
      // console.log(bot)
      // debugger
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.passBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

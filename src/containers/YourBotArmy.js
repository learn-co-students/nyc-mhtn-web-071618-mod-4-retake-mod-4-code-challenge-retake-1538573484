import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  generateCards = () => {
		return this.props.botsInArmy.map((bot,idx) => <BotCard key={idx} bot={bot} handleClick={this.props.handleRemoveFromArmy}/>)
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.generateCards()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

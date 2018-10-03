import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor() {
    super()
  }

  renderBotArmy = () => {
    return this.props.selectedBots.map((bot) => {
      // console.log(bot)
      // debugger
      return(
        <BotCard bot={bot[0]} />
      )
    })
    // debugger
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

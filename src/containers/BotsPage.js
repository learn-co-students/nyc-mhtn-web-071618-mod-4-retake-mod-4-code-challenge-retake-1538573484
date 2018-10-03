import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';  
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsInArmy: [],
    displayBotSpecs: false,
    activeBot: {}
  }


  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  handleAddToArmy = (bot) => {
    this.setState({
      botsInArmy: [...this.state.botsInArmy, bot]
    })
  }

  handleBotSpecs = (bot) => {
    this.setState({
      displayBotSpecs: true,
      activeBot: bot
    })
  }

  handleBack = () => {
    this.setState({
      displayBotSpecs: false
    })
  }

  handleRemoveFromArmy = (bot) => {
    console.log(bot);
    
    this.setState({
      botsInArmy: this.state.botsInArmy.filter(botFilter => botFilter !== bot)
    })
  }

  render() {
    console.log(this.state.bots);
    return (
      
      <div>
        <YourBotArmy botsInArmy={this.state.botsInArmy} handleRemoveFromArmy={this.handleRemoveFromArmy}/>
        {this.state.displayBotSpecs ? 
        <BotSpecs bot={this.state.activeBot} handleClick={this.handleAddToArmy} handleBack={this.handleBack}/> : 
        <BotCollection bots={this.state.bots} handleBotSpecs={this.handleBotSpecs} handleAddToArmy={this.handleAddToArmy} />}
      </div>
    );
  }

}

export default BotsPage;

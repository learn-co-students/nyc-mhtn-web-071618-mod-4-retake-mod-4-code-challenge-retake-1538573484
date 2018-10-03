import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';  

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsInArmy: []
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
        <BotCollection bots={this.state.bots} handleAddToArmy={this.handleAddToArmy} />
      </div>
    );
  }

}

export default BotsPage;

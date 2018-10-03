import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selectedBots: []
  }

  handleClick = (botId) => {
    const selectedBot = this.state.bots.filter(bot => bot.id === botId)
    if (this.state.selectedBots.includes(selectedBot[0])) {
      console.log("This bot has already been selected.")
    }
    else {
      this.setState({
        selectedBots: this.state.selectedBots.concat(selectedBot)
      })
    }
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(data => this.setState({
      bots: data
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;

import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selectedBots: [],
    botSpecs: '',
    clickedBack: false
  }

  handleBotsClick = (botObj) => {
    this.setState({
      botSpecs: botObj
    })
  }

  handleEnlistClick = (botId) => { //enlists bot to BotArmy
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

  //attempted to get back function working using conditional rendering. tried using a nested ternary operator, could not get it to work without errors.
  handleBackClick = () => {
    this.setState({
      clickedBack: true
    })
    console.log(this.state.clickedBack)
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
        { this.state.botSpecs ?
            <BotSpecs bot={this.state.botSpecs} handleEnlistClick={this.handleEnlistClick}/> :
            <BotCollection bots={this.state.bots} handleBotsClick={this.handleBotsClick} handleBackClick={this.handleBackClick}/>
        }
      </div>
    );
  }

}

export default BotsPage;

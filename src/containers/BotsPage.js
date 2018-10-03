import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: [],
      selectedBots: [],
      duplicate: false
    }
  }


  handleRemoveBot = (id) => {

  }

  handleClick = (event, botId) => {
    // console.log(key)
    const selectedBot = this.state.bots.filter((bot) => {
      // console.log(bot)
      // debugger
      return bot.id === botId
    })

    // console.log(selectedBot[0])

    /*Comment on Log:
      - if the selected bot does not match any of the bots in the selectedBots array, then add bot to array via setState & splat operator
    */

    if(this.state.selectedBots.length > 0) {
      this.state.selectedBots.forEach((bot) => {
        if(bot !== selectedBot) {

        }
      })
    }

    this.setState({
      selectedBots: [...this.state.selectedBots, selectedBot]
    })

    // debugger
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      // console.log(bots)
      this.setState({
        bots: bots
      })
    })
  }


  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy selectedBots={this.state.selectedBots}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>

      </div>
    );
  }

}

export default BotsPage;

import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    someBots: []
  }

  handleClick = (wholeBot) => {
    if (this.state.someBots.find(bot => bot.id === wholeBot.id)){
      const myBots = this.state.someBots.filter(bot => {
        console.log(bot.id, wholeBot.id)
        return bot.id != wholeBot.id
      })
      this.setState({
        someBots: myBots
      })
    } else {
      this.setState({someBots: [...this.state.someBots, wholeBot]})
    }

    // this.state.someBots.find(bot => bot.id === wholeBot.id) ? null : this.setState({someBots: [...this.state.someBots, wholeBot]})
    //
    // if (this.state.someBots.find(bot => bot.id === wholeBot.id) && this.state.allBots.find(bot => bot.id === wholeBot.id)) {
    //   // for(var i=0; i < testArray.length; i++){
    //   //   if (testArray[i].id === wholeBot.id) {
    //   //     testArray.splice(i, 1)
    //   //   }
    //   // }
    // }
  }

  render() {
    console.log(this.state.someBots)
    return (
      <div>
        <YourBotArmy someBots={this.state.someBots}/>
        <BotCollection allBots={this.state.allBots} handleClick={this.handleClick}/>
        {/* put your components here */}
      </div>
    );
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
        allBots: data
      })
    })
  }

}

export default BotsPage;

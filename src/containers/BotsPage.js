import React from "react";
import ServerApi from '../ServerApi'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
//import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  //start here with your code for step one
  all = {}
  state = {
    yourBots:[],
    bots:[]
  }
  componentDidMount(){
    ServerApi.bots().then(json=>{
      json.forEach(data=>{
        this.all[data.id] = data;
      })
      this.setState({
        bots:json
      })
    })
  }
  onClickBotOnCollection = (id)=>{
    let bot = this.state.yourBots.find(bot=>bot.id === id )
    if( bot )
      return;
    bot = this.all[id];
    if( bot ){
      this.setState(prevState=>{
        return {
          yourBots : prevState.yourBots.concat(bot)
        }
      })
    }
  }

  onClickBotOnYourOwn = (id)=>{
    this.setState(prevState=>{
      return {
        yourBots : this.state.yourBots.filter(bot=>bot.id !== id )
      }
    })
  }
  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} onClickBotOnYourOwn={this.onClickBotOnYourOwn} />

        <BotCollection bots={this.state.bots} onClickBotOnCollection={this.onClickBotOnCollection}/>

      </div>
    );
  }

}

export default BotsPage;

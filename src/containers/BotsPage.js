import React from "react";
import ServerApi from '../ServerApi'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  //start here with your code for step one
  all = {}
  state = {
    yourBots:[],
    bots:[],
    select: null
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

  enlist = (id)=>{
    let bot = this.state.yourBots.find(bot=>bot.id === id )
    if( bot ){
      this.setState({ select:null})
      return;
    }
    bot = this.all[id];
    if( bot ){
      this.setState(prevState=>{
        return {
          select : null,
          yourBots : prevState.yourBots.concat(bot)
        }
      })
    }
  }

  removeFromEnlist = (id)=>{
    this.setState(prevState=>{
     return {
       yourBots : this.state.yourBots.filter(bot=>bot.id !== id )
     }
   })
  }

  goBack = ()=>{
    this.setState( { select : null } )
  }

  onShowBotSpec = (id)=>{
    this.setState( { select : this.all[id] } )
  }
  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} onClickBotOnYourOwn={this.removeFromEnlist} />

        {this.state.select ? <BotSpecs bot={this.state.select} goBack={this.goBack} enlist={this.enlist}/>
          : <BotCollection bots={this.state.bots} onClickBotOnCollection={this.onShowBotSpec}/>
        }
      </div>
    );
  }

}

export default BotsPage;

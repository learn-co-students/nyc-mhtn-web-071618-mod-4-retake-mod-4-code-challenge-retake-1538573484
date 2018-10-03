import React from "react";
import ServerApi from '../ServerApi'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  //start here with your code for step one
  all = []
  state = {
    yourBots:[],
    bots:[],
    select: null,
    condition:{search:"", sortBy:""}
  }

  getBot(id){
    return this.all.find(bot=>bot.id === id)
  }
  componentDidMount(){
    ServerApi.bots().then(json=>{
      this.all = json
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
    bot = this.getBot(id);
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
    this.setState( { select : this.getBot(id) } )
  }

  filter = (condition)=>{
    let {sortBy, search} = condition
    let bots = this.all.filter(bot=>bot.name.toLowerCase().includes(search.toLowerCase()))
    if( sortBy !== ""){
      bots.sort( (a, b)=> {
        let v1 = a[sortBy], v2 = b[sortBy]
        if( v1 > v2 ) return -1;
        else if( v1 < v2 )  return 1;
        else return 0;
      } )
    }
    this.setState({
      bots,
      condition
    })
  }
  render() {
    return (
      <div>
        <YourBotArmy
            yourBots={this.state.yourBots}
            onClickBotOnYourOwn={this.removeFromEnlist}
        />
        {
          this.state.select ?
            <BotSpecs bot={this.state.select}
                goBack={this.goBack}
                enlist={this.enlist}
            />
          : <BotCollection
                bots={this.state.bots}
                onClickBotOnCollection={this.onShowBotSpec}
                onFilter={this.filter}
                condition={this.state.condition}
            />
        }
      </div>
    );
  }

}

export default BotsPage;


const URL = "https://bot-battler-api.herokuapp.com/api/v1/"

const GET_BOTS = URL+"bots"


class ServerApi{

  static bots(){
    return fetch(GET_BOTS)
      .then(resp=>resp.json())
    }
}

export default ServerApi

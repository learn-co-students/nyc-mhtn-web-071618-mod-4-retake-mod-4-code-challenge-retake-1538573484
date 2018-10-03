import React from "react";

const BotCard = props => {
  // console.log(props.bot.avatar_url)
  /*
    place onClick & onClick handler on BotCard such that when the card is clicked,
    it should pass the clicked bot's id to BotsPage, BotsPage will go through the selectedBots array and check for a match, then filter & return those bots that do not match.  Then, use setState to updated the bot array, which will update via re-rendering the child components.

  */
  const bot = props.bot;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={(event) => {props.handleClick(event, bot.id)}}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;

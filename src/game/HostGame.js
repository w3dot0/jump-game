import React, { Component } from 'react';
import { broadcastState } from './State';
import { createGame } from './Game';


class HostGame extends Component {
  constructor(props){
    super(props);
    const players = props.players;

    const onUpdateCb = (game) => {
      broadcastState(game.world, players);
    }

    window.gameObj = createGame({onUpdateCb: onUpdateCb});
  }

  render() {
    return <div id={'game'}/>
  }
}

export default HostGame;
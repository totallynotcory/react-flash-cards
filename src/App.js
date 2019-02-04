import React, { Component } from 'react';
import AnswerCard from './components/AnswerCard'
import StatusText from './components/StatusText'
import './css/pressStart2p.css';
import './css/nes.min.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="bubble nes-container is-rounded is-dark"> 
            <StatusText />
        </div>

        <div className="monster">
            馬
        </div>

        <div className="choices">
            <AnswerCard text="COW" />
            <AnswerCard text="HORSE" />
            <AnswerCard text="PIG" />
            <AnswerCard text="FROG" />
        </div>
    </div>
    );
  }
}

export default App;

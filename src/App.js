import React, { Component } from 'react';
import CardContainer from './components/CardContainer'
import StatusText from './components/StatusText'
import Monster from './components/Monster'
import './css/pressStart2p.css';
import './css/nes.min.css';
import './css/style.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {currentCard: {
                question: "馬",
                answer: "horse",
                guesses: ["cow", "horse", "pig", "frog"]}}
    }

    checkAnswer = (guess) => {
        if(guess === this.state.currentCard.answer) {
            this.setState({correct: true})
            return true;
        } else {
            this.setState({correct: false})
            return false;
        }
    }

  render() {
    return (
      <div id="main">

        <StatusText />

        <Monster 
            currentQuestion={this.state.currentCard.question} 
            answer={this.state.correct}
            />

        <CardContainer 
            currentCard={this.state.currentCard}
            correctAnswerChosen={this.state.correct}
            checkAnswer={this.checkAnswer}            
            />
    </div>
    );
  }
}

export default App;

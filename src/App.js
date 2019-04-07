import React, { Component } from 'react';
import CardContainer from './components/CardContainer'
import StatusText from './components/StatusText'
import Monster from './components/Monster'
import vocabs from './SampleVocab'
import './css/pressStart2p.css';
import './css/nes.min.css';
import './css/style.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {currentVocab: {
                question: "馬",
                answer: "horse",
                guesses: ["cow", "horse", "pig", "frog"]}}
    }

    componentDidMount() {
        this.loadCards();
    }

    popNewVocab = (e) => {    
        const monster = e.currentTarget;
        if(monster.classList.contains("monsterLeft")) monster.classList.remove("monsterLeft")
        if(monster.classList.contains("monsterRight")) monster.classList.remove("monsterRight")
        if(this.state.vocabList.length > 0){
            const newVocab = this.state.vocabList.pop();
            this.setState({currentVocab : newVocab})
            monster.removeEventListener('transitionend', this.popNewVocab);
        } else {
            this.setState({allDone : true})
            this.setState({currentVocab : {question: "Yay!"}})
        }

        this.setState({correct : undefined})
        
    }

    loadCards = () => {
        let allVocab = vocabs;
        this.setState({ vocabList : allVocab });
    }

    checkAnswer = (guess) => {
        this.popVocabWhenGhostGone();

        if(guess === this.state.currentVocab.answer) {
            this.setState({correct: true})
            return true;
        } else {
            this.setState({correct: false})
            return false;
        }
    }

    popVocabWhenGhostGone = () => {
        const monster = document.querySelector('.monster');
        monster.addEventListener('transitionend', this.popNewVocab);
    }

  render() {
    return (
      <div id="main">

        <StatusText 
            allDone={this.state.allDone}
        />

        <Monster 
            allDone={this.state.allDone}
            currentQuestion={this.state.currentVocab.question} 
            answer={this.state.correct}
            popNewVocab={this.popNewVocab}
            allVocab={this.state.allVocab}
            />

        <CardContainer 
            allDone={this.state.allDone}
            currentVocab={this.state.currentVocab}
            correctAnswerChosen={this.state.correct}
            checkAnswer={this.checkAnswer}            
            />
        
    </div>
    );
  }
}

export default App;

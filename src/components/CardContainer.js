import React from 'react';
import AnswerCard from './AnswerCard'

class CardContainer extends React.Component{
    render(){
        let cards; 
        if (!this.props.allDone){
            cards = this.props.currentVocab.guesses.map(key =>  
                <AnswerCard 
                    key={key + this.props.currentVocab.answer}
                    text={key}
                    isCorrectAnswer={this.props.currentVocab.answer === key}
                    correctAnswerChosen={this.props.correctAnswerChosen}
                    onClick={this.props.checkAnswer} />);
        } else {
            cards = <p>All Done!</p>;
        }

        return(
            <div className="choices">
                {cards}
            </div>
        )
    }
}

export default CardContainer;
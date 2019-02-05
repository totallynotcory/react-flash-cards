import React from 'react';
import AnswerCard from './AnswerCard'

class CardContainer extends React.Component{
    render(){
        return(
            <div className="choices">
                {this.props.currentCard.guesses.map(key =>  
                    <AnswerCard 
                        key={key}
                        text={key}
                        isCorrectAnswer={this.props.currentCard.answer === key}
                        correctAnswerChosen={this.props.correctAnswerChosen}
                        onClick={this.props.checkAnswer} />)}
            </div>
        )
    }
}

export default CardContainer;
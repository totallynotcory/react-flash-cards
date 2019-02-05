import React from 'react';

class AnswerCard extends React.Component{

    checkAnswer = (e) => {
        if(this.props.onClick(this.props.text)) {
            e.currentTarget.classList.add("is-success");
        } else {
            e.currentTarget.classList.add("is-error");
        }
    }

    buttonClassName = () => {
        const correct = this.props.isCorrectAnswer;
        const answerNotChosen = this.props.correctAnswerChosen === undefined;
        if(answerNotChosen) return "card-response nes-btn";
        return correct ? "card-response nes-btn is-success" : "card-response nes-btn"
    }

	render() {
        return (
            <button 
                type="button"
                //className="card-response nes-btn"
                className={this.buttonClassName()} 
                onClick={(e) => this.checkAnswer(e)}>
                    {this.props.text.toUpperCase()}
            </button>
        );
    }
} 

export default AnswerCard;
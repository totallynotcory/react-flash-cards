import React from 'react';

class AnswerCard extends React.Component{
	render() {
        return (
            <button type="button" className="card-response nes-btn">
                {this.props.text}
            </button>
        );
    }
} 

export default AnswerCard;
import React from 'react';
import { Ghost } from 'react-kawaii';

class Monster extends React.Component{
    monsterClasses = () => {
        const correct = this.props.answer;
        return correct === undefined ? "monster" 
            : correct ? "monster monsterLeft" : "monster monsterRight";
    }

    ghostExpersion = () => {
        const correct = this.props.allDone || this.props.answer;
        return correct === undefined ? "sad" : correct ? "excited" : "ko";
    }

    render(){
        return (
            <div className={this.monsterClasses()}>
                <Ghost size={400} mood={this.ghostExpersion()} color="#FDA7DC" />
                {/* <Ghost size={400} mood="ko" color="#FDA7DC" />
                <Ghost size={400} mood="excited" color="#FDA7DC" /> */}
                {/* Items: backpack, browser, cat, creditcard, file, ghost, icecream, mug, planet, speechbubble */}
                {/* Moods:  sad, shocked, happy, blissful, lovestruck, excited, ko */}
                <div className="nes-balloon from-left">{this.props.currentQuestion}</div>
            </div>
        )
    }
}

export default Monster;
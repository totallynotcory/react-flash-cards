import React from 'react';

class StatusText extends React.Component{
    render(){
        return (
            <div className="bubble nes-container is-rounded is-dark"> 
                    A Wild Vocab Appears! <br/>
                    {this.props.allDone ? "Wild Vocabs Defeated!!" : ""}
            </div>
        );
    }
} 

export default StatusText;
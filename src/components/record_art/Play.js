import React from 'react';

class Play extends React.Component{
    clickHandler () {

    }

    render() {
        return <div>
                <button className="record"
                      onClick={this.clickHandler}>Play</button>
                </div>
    }
}

export default Play;

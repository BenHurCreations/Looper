import React from 'react';

class Record extends React.Component{
    constructor(props) {
      super(props);
      this.state= {
          isRecord: false,
      };
    }

    clickHandler = () => {
        const isPressed = this.state.isRecord;
        this.setState({isRecord: !isPressed});
        if(this.state.isRecord)
        {

        }
        else
        {
            // stop record and save it
        }
    }

    render(){
        return <div>
                <button className="record"
                      onClick={this.clickHandler}>Record</button>
                </div>
    }
};

export default Record;



import React from 'react';
import audioFiles from "../looper_machine/CreateAudioFiles";

class Play extends React.Component{
    clickHandler = () => {
        let flag = false;
        for(let i = 0; i < 9; i++)
        {
            if(this.props.array[i] && audioFiles[i].currentTime > 0)
            {
                audioFiles[i].play();
                flag = true;
            }
        }
        if(flag)
        {
            document.getElementById("mainLoop").play();
            flag = false;
        }
    }

    render(){
        return <div>
                <button className="pause"
                      onClick={this.clickHandler}>Play</button>
                </div>;
    }
}

export default Play;

import React from 'react';
import audioFiles from "../looper_machine/CreateAudioFiles";

class Stop extends React.Component{

    clickHandler = () => {
        for(let i = 0; i < 9; i++)
        {
            if(this.props.array[i])
            {
                audioFiles[i].pause();
                audioFiles[i].currentTime = 0;
                this.props.array[i] = false;
                document.getElementsByClassName("loopers")[i].style.borderColor = "white";
                this.props.refresh[i] = true;
            }
        }
        document.getElementById("mainLoop").pause();
        document.getElementById("mainLoop").currentTime = 0;
        this.props.counter();
    }

    render(){
        return <div>
                <button className="stop"
                      onClick={this.clickHandler}>Stop</button>
                </div>
    }
};

export default Stop;

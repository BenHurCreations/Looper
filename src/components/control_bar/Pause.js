import React from 'react';
import audioFiles from "../looper_machine/CreateAudioFiles";

class Pause extends React.Component{

    clickHandler = () => {
        for(let i = 0; i < 9; i++)
        {
            audioFiles[i].pause();
            document.getElementById("mainLoop").pause();
        }
    }

    render(){
        return <div>
                <button className="pause"
                      onClick={this.clickHandler}>Pause</button>
                </div>
    }
};

export default Pause;

import React from 'react';
import MusicBox from "./MusicBox";
import icon1 from "../../icons/dj-mixer.png";
import icon2 from "../../icons/drum.png";
import icon3 from "../../icons/electric-guitar (1).png";
import icon4 from "../../icons/electric-guitar (2).png";
import icon5 from "../../icons/drums.png";
import icon6 from "../../icons/african-drum.png";
import icon7 from "../../icons/dj.png";
import icon8 from "../../icons/keyboard.png";
import icon9 from "../../icons/piano.png";
import audioFiles from "./CreateAudioFiles";
import loop from "../../loops/SilentStar_120_Em_OrganSynth.mp3"
import Play from "../control_bar/Play";
import Pause from "../control_bar/Pause";
import Stop from "../control_bar/Stop";


class LoopersBoard extends React.Component {

    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            isPlaying: false,
            count: 0,
            playArray: [false,false,false,false,false,false,false,false,false],
            refresh: [false,false,false,false,false,false,false,false,false],
        };
    }

    handler = (num) =>
    {
        this.setState({count: this.state.count + num},
            () => this.handleChange());
    }

    handleChange()
    {
        if(this.state.count === 0)
        {
            this.setState({isPlaying: false},
                () => console.log(this.state.isPlaying + " here 3 "));
            document.getElementById("mainLoop").pause();
            document.getElementById("mainLoop").currentTime = 0;
        }
        else
        {
            this.setState({isPlaying: true},
                () => console.log(this.state.isPlaying + " there 4 "));
        }
    }

    // Play all activated loops in the begining of the next 8 seconds
    playLoops = () => {
        console.log("here bro");
        for(let i = 0; i < 9; i++)
        {
            if(this.state.playArray[i])
            {
                audioFiles[i].play();
                console.log(this.state.playArray[i]);
            }
            document.getElementById("mainLoop").play();
        }
    }

    countZero = () =>
    {
        this.setState({count: 0},
            () => this.playingFalse());

    }

    playingFalse = () =>
    {
        this.setState({isPlaying: false},
        () => console.log("ready to go"));
    }

    render(){
        return <span>

                    <span id="looperBoard">
                            <div>
                                <MusicBox icon={icon1} loop={audioFiles[0]} index="0" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                                <MusicBox icon={icon2} loop={audioFiles[1]} index="1" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                                <MusicBox icon={icon3} loop={audioFiles[2]} index="2" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                            </div>

                            <div>
                                <MusicBox icon={icon4} loop={audioFiles[3]} index="3" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                                <MusicBox icon={icon5} loop={audioFiles[4]} index="4" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                                <MusicBox icon={icon6} loop={audioFiles[5]} index="5" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                            </div>

                            <div>
                                <MusicBox icon={icon7} loop={audioFiles[6]} index="6" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                                <MusicBox icon={icon8} loop={audioFiles[7]} index="7" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                                <MusicBox icon={icon9} loop={audioFiles[8]} index="8" counter={this.handler}
                                          play={this.state.isPlaying} array={this.state.playArray}
                                          refresh={this.state.refresh}></MusicBox>
                            </div>

                            <div>
                                <audio id="mainLoop" muted onEnded={this.playLoops}>
                                    <source src={loop} type="audio/mp3"/>
                                    The audio file is not supported by your browser
                                </audio>
                            </div>
                    </span>

                    <span id="controlBar">
                        <Play array={this.state.playArray}></Play>
                        <Pause/>
                        <Stop array={this.state.playArray} counter={this.countZero}
                              refresh={this.state.refresh}></Stop>
                    </span>

            </span>
    }
}

export default LoopersBoard;

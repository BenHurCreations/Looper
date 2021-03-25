import React from 'react';
import Play from "./Play";
import Pause from "./Pause";
import Stop from "./Stop";


function ControlBar () {
    return <span id="controlBar">
        <Play/>
        <Pause/>
        <Stop/>
        </span>
}

export default ControlBar;

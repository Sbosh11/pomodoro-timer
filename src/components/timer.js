import React from 'react';

/*const Timer = (props) => {
return (
    <div className='timer' id='timer-label'>
    <h4>{props.mode === 'session' ? 'Session' : 'Break'}</h4>
    <div id="time-left">{props.time}</div>
    <div className='main-controls'>
    <button id='start_stop' >start</button>
    <button id='reset'>reset</button>
    
    </div>

    </div>
)
}*/

const Timer = ({mode, time}) => {
    return (
        <div className='timer' >
        <h4 id='timer-label'>{mode === 'session' ? 'session' : 'break'}</h4>
        <div id="time-left">{time}</div>
        </div>
    )
    }
    

export default Timer;
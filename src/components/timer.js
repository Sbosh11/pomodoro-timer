import React from 'react';


const Timer = ({mode, time}) => {
    return (
        <div className='timer' >
        <h4 id='timer-label'>{mode === 'session' ? 'session' : 'break'}</h4>
        <div id="time-left">{time}</div>
        </div>
    )
    }
    

export default Timer;
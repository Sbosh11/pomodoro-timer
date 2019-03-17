import React from 'react';
import './controls.css';

const ControlTimer = ({active, handleReset, handlePlayPause}) => {
    return (

 <div className='main-controls'>
 <button id='start_stop' onClick={handlePlayPause} >
 { active ? <span  aria-label='pause'>&#10074;&#10074;</span>: <span>&#9658;</span>}
 
 </button>
 <button id='reset' aria-label='reset' onClick={handleReset}>&#8634;</button>
 
 </div>
    )
    }
export default ControlTimer;
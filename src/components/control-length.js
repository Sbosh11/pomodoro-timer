import React from 'react';
import './controls.css';

/*const Controls =({type}) => {


    return (
        <div className = 'controls'>
        <div className='labels'  id={`${props.break}-label`}>{props.break}
        <div className='button-controls'>
        <button id={`${props.break}-decrement`} onClick={props.decreaseBreak}>-</button>
        <span id={`${props.break}-length`}>{props.breakValue}</span>
        <button id={`${props.break}-increment`} onClick={props.incrementBreak}>+</button>
        </div>
        </div>
        <div className='labels' id={`${props.session}-label`}>{props.session}
        <div className='button-controls'>
        <button id={`${props.session}-decrement`} onClick={props.decreaseSession}>-</button>
        <span id={`${props.session}-length`}>{props.sessionValue}</span>
        <button id={`${props.session}-increment`} onClick={props.incrementSession}>+</button>
        </div>
        </div> 
        </div>
    )
    }*/
    
const ControlLength = ({type, value, handleClick}) => {
    return (
   
        <div className='labels'  id={`${type}-label`}>{type === 'session' ? 'session' : 'break'}
        <div className='button-controls'>
        <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}`)}>-</button>
        <span id={`${type}-length`}>{value}</span>
        <button id={`${type}-increment`} onClick={() => handleClick(true,`${type}`)}>+</button>
        </div>
        </div>
        

    )
}
    
    
    export default ControlLength;



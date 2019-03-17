import React from 'react';
import './controls.css';


    
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



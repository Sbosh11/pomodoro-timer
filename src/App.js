import React, { Component } from 'react';
import ControlLength from './components/control-length';
import Timer from './components/timer';
import ControlTimer from './components/control-timer';
import mp3_file from './components/short-beep.mp3';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     mode: 'session',
     time: 25 * 60 ,
     session: .1,
     break: .1,
     active: false,
     started: false

    }
  } 

    componentDidUpdate(prevState) {
  if(prevState.time === 0 && prevState.mode === 'session'){
    this.setState({time: this.state.break * 60 , mode: 'break'})
    this.audio.play()
  }
  if(prevState.time === 0 && prevState.mode === 'break') {
    this.setState({time: this.state.session * 60 , mode: 'session'})
    this.audio.play()
  }
}


// FORMAT MINUTES AND SECONDS
  formatTime =() => {
 // let time = this.state.time
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds
   
  }
// INCREMENT/DECREMENT TIME

setTimer =(increment, type) => {
if(this.state[type]===60 && increment) return
if(this.state[type] ===1 && !increment) return
this.setState({[type]: this.state[type] +( increment ? 1: -1 )})

}

// RESET TIME
  handleReset = () => {
    this.setState({
      mode: 'session',
      break: 5,
      session: 25,
      time: 25 * 60 ,
      active:false,
      started:false
      })
      clearInterval(this.countdown)
      this.audio.pause()
      this.audio.currentTime = 0
    
  }
 
//TOGGLE PLAY AND PAUSE
  handlePlayPause = () => {
    if(this.state.active) {
    clearInterval(this.countdown)
    this.setState({active: false})
    } else {
      if(this.state.started) {
     this.countdown = setInterval(() => this.setState({time: this.state.time -1}), 1000)
    
      this.setState({active: true})
      } else {
        this.setState({time: this.state.session * 60 , 
          started:true,
           active:true}, 
          () => this.countdown = setInterval(() => this.setState({time: this.state.time -1}), 1000) )
      }
    }
  }
  
  
  render() {
   const {mode, session, active } = this.state
   // const timer = now - time 
    return (
      <div className="pomodoro">
      <h3>Pomodoro Timer</h3>
      <div className='main'>
      <Timer   mode={mode} time={this.formatTime()}/>
      <ControlTimer active={active}
      handleReset={this.handleReset}
      handlePlayPause={this.handlePlayPause}
      />

      <div className = 'controls'>
     <ControlLength type ='break' value={this.state.break}  handleClick={this.setTimer}/>
     <ControlLength  type ='session' value={session} handleClick={this.setTimer}/>
      </div>
      <audio id='beep'  ref={el => this.audio =el}>
      <source id="src_mp3" type="audio/mp3" src={mp3_file}/>
      </audio>
      </div>
      </div>
     
    );
  }
}

export default App;

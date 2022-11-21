import React, { Component } from 'react';
import Die from '../die/Die';
import "./Dice.css";

class Dice extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
    <div className='Dice'>
      {   
        this.props.dices.map((val, idx) => (
        <Die 
          val={val} 
          key={idx}
          idx={idx}
          dieHandleClick={this.props.diceHandleClick}
          locked={this.props.locked[idx]}
          disabled={this.props.disabled}
          isRolling={this.props.isRolling && !this.props.locked[idx]}
        /> 
        ))
      }
    </div>
    )
  }
}

export default Dice; 
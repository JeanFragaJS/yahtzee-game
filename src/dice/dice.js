import React, { Component } from 'react';
import Die from '../die/Die';

class Dice extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
    <div>
      {   
        this.props.dices.map((val, idx) => (
        <Die 
          icon={val} 
          key={idx}
          idx={idx}
          dieHandleClick={this.props.diceHandleClick}
          locked={this.props.locked[idx]}
          disabled={this.props.disabled}

        /> 
        ))
      }
    </div>
    )
  }
}

export default Dice; 
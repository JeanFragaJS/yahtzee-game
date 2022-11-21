import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons';

import "./Die.css"; 


class Die extends Component {
  static defaultProps =  {
    dicesList: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
  }
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick () {
    this.props.dieHandleClick(this.props.idx)
  }
  render () {
    const {disabled, locked, isRolling, val} = this.props;
    let classes =  `Die`;
    let dice = this.props.dicesList[val-1];
    if ( locked ) classes += " Die-locked";
    if ( isRolling ) classes += " Die-isRolling";
    return (
      <FontAwesomeIcon className={classes} onClick={this.handleClick} icon={dice} disabled={disabled} size="5x"/>
    )
  }
}


export default Die;
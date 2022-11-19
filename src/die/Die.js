import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons';
class Die extends Component {
  static defaultProps =  {
    numberDices : [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
  }
  constructor (props) {
    super(props); 
  }

  render () {
    return <FontAwesomeIcon icon={this.props.numberDices} />
  }
}


export default Die;
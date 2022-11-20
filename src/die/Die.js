import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Die extends Component {
  static defaultProps =  {
    numberWords: ["one", "two", "three", "four", "five", "six"]
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
    let classes =  `Die-${this.props.numberWords[this.props.idx]}`;
    if ( locked ) classes += " Die-locked";
    if ( isRolling ) classes += " Die-isRolling";
    return (
      <FontAwesomeIcon className={classes} onClick={this.handleClick} icon={this.props.val} disabled={disabled}/>
    )
  }
}


export default Die;
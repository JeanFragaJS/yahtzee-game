import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Die extends Component {
  static defaultProps =  {
    numberDices : [1,2,3,4,5,6]
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
    return (
      <FontAwesomeIcon  onClick={this.handleClick} icon={this.props.icon} disabled={disabled}/>
    )
  }
}


export default Die;
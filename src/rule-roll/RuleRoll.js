import React, { Component } from "react";

class RuleRow extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { score, name, doScore, description } = this.props;
    const disabled = score !== undefined;
    return (
      <tr
        onClick={ disabled ? null : doScore }
      >
        <td>{name}</td>
        <td>{ disabled ? score : description }</td>
      </tr>
    )
  }; 
};

export default RuleRow; 
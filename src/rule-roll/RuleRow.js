import React, { Component } from "react";
import "./RuleRow.css"; 

class RuleRow extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { score, name, doScore, description } = this.props;
    const disabled = score !== undefined;
    return (
      <tr
        className={`RuleRow RulleRow-${disabled ? "disabled" : "active"}`}
        onClick={ disabled ? null : doScore }
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{ disabled ? score : description }</td>
      </tr>
    )
  }; 
};

export default RuleRow; 
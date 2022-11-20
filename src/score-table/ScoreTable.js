import React, { Component } from "react";
import RuleRow from "../rule-roll/RuleRoll";

class ScoreTable extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { score, doScore } = this.props;
    return (
      <div>

        <section>
          <h2>Upper</h2>
          <table>
            <tbody>
            <RuleRow/>
            <RuleRow/>
            <RuleRow/>
            <RuleRow/>
            <RuleRow/>
            <RuleRow/>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Lower</h2>
          <table>
            <tbody>
              <RuleRow/>
              <RuleRow/>
              <RuleRow/>
              <RuleRow/>
              <RuleRow/>
              <RuleRow/>
              <RuleRow/>
            </tbody>
          </table>
        </section>

        <h2>TOTAL SCORE: </h2>
      </div>
    );
  };
};

export default ScoreTable; 
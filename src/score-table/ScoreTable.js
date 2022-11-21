import React, { Component } from "react";
import RuleRow from "../rule-roll/RuleRow";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfSameKind,
  fourOfSameKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "../rules/rules";
import "./ScoreTable.css"

class ScoreTable extends Component {
  getTotalScores () {
    const { scores } = this.props;
    let totalScores = 0;
    for (let key in scores) {
      if(scores[key]) totalScores += scores[key] 
    }
    return totalScores; 
  }

  render () {
    const { scores, doScore } = this.props;
    return (
      <div className="ScoreTable">

        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
            <RuleRow
              name={"Ones"}
              score={scores.ones}  
              doScore={evt => doScore("ones", ones.evalRoll)}
              description={ones.description}
            />
            <RuleRow
              name={"Twos"}
              score={scores.twos}  
              doScore={evt => doScore("twos", twos.evalRoll)}
              description={twos.description}        
            />
            <RuleRow
              name={"Threes"}
              score={scores.threes}  
              doScore={evt => doScore("threes", threes.evalRoll)}
              description={threes.description}        
            />
            <RuleRow
              name={"Fours"}
              score={scores.fours}  
              doScore={evt => doScore("fours", fours.evalRoll)}
              description={fours.description}   
            />
            <RuleRow
              name={"Fives"}
              score={scores.fives}  
              doScore={evt => doScore("fives", fives.evalRoll)}
              description={fives.description}   
            />
            <RuleRow
              name={"Sixes"}
              score={scores.sixes}  
              doScore={evt => doScore("sixes", sixes.evalRoll)}
              description={sixes.description}   
            />
            </tbody>
          </table>
        </section>

        <section className="ScoreTable-section">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name={"Chance"}
                score={scores.chance}  
                doScore={evt => doScore("chance", chance.evalRoll)}
                description={chance.description}   
              />
              <RuleRow
                name={"Three of Same Kind"}
                score={scores.threeOfSameKind}  
                doScore={evt => doScore("threeOfSameKind", threeOfSameKind.evalRoll )}
                description={threeOfSameKind.description}   
              />
              <RuleRow
                name={"Four of Same Kind"}
                score={scores.fourOfSameKind}  
                doScore={evt => doScore("fourOfSameKind", fourOfSameKind.evalRoll)}
                description={fourOfSameKind.description}   
              />
              <RuleRow
                name={"Full house"}
                score={scores.fullHouse}  
                doScore={evt => doScore("fullhouse", fullHouse.evalRoll)}
                description={fullHouse.description}   
              />
              <RuleRow
                name={"Small Straight"}
                score={scores.smallStraight}  
                doScore={evt => doScore("smallStraight", smallStraight.evalRoll)}
                description={smallStraight.description}   
              />
              <RuleRow 
                name={"Large Straight"}
                score={scores.largeStraight}  
                doScore={evt => doScore("largeStraight", largeStraight.evalRoll)}
                description={largeStraight.description}   
              />
              <RuleRow
                name={"Yahtzee"}
                score={scores.yahtzee}  
                doScore={evt => doScore("yahtzee", yahtzee.evalRoll)}
                description={yahtzee.description}   
              />
            </tbody>
          </table>
        </section>

        <h2>TOTAL SCORE: {this.getTotalScores()}</h2>
      </div>
    );
  };
};

export default ScoreTable; 
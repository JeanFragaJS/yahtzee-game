import React, { Component } from "react";
import Dice from "../dice/dice";
import "./Game.css"
import ScoreTable from "../score-table/ScoreTable";
const NUM_DICES = 5;
const NUM_ROLLS = 3; 

class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dices: Array.from({length: NUM_DICES}),
      locked: Array(NUM_DICES).fill(false),
      numRolls: NUM_ROLLS,
      isRolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfSameKind: undefined,
        fourOfSameKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    }
    /* METHODS */
    this.roll = this.roll.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animationRoll =  this.animationRoll.bind(this);
    this.doScore = this.doScore.bind(this);
  }
  
  componentDidMount () {
    //this.animationRoll(); 
  }
  
  displayRollInfo () {
    let messasges = [
      '0 Rolls',
      '1 Rolls',
      '2 Rolls',
      'Starting Round'
    ]; 
    return messasges[this.state.numRolls];
  }
  
  animationRoll () {
    this.setState({ isRolling: true }, () => {
      setTimeout(this.roll, 1000);
    })
  }

  roll (evt) {
    this.setState( st => ({
      dices: st.dices.map((val, i) => st.locked[i] ? val : Math.ceil(Math.random() * 6)),
      locked: st.numRolls > 1 ? st.locked : Array(NUM_DICES).fill(true),
      numRolls: st.numRolls - 1,
      isRolling: false
    }))
  }
  
  toggleLocked (idx) {
    const { numRolls, isRolling } = this.state;
    if ( numRolls > 0 && !isRolling ) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0,idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
    }
  }
  
  doScore ( ruleName, ruleFn ) {
    this.setState(st => ({
      scores: { ...st.scores, [ruleName]: ruleFn(this.state.dices) },
      numRolls: NUM_ROLLS,
      locked: Array(NUM_DICES).fill(false)
    }));
    this.animationRoll(); 
  }


  render () {
    const { dices, locked, numRolls, isRolling, scores } = this.state;
    return (
      <div className="Game">
        <header className="Game-header">
          <h2 className="Game-title">Yahtzee!</h2>
          <section className="Game-dice-section">
            <Dice 
              dices={dices}
              locked={locked}
              isRolling={isRolling}
              disabled={numRolls === 0}
              diceHandleClick={this.toggleLocked}
            />
            <div className="Game-button-wrapper">
              <button 
                className="Game-reroll"
                disabled={ locked.every( x=>x ) || numRolls === 0 || isRolling }
                onClick={this.animationRoll}
              >
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={scores} />
      </div>
    )
  }
}

export default Game; 
import React, { Component } from "react";
import Dice from "../dice/dice";
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons';

const NUM_DICES = 5;
const NUM_ROLLS = 3; 

class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dices: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix],
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
        threeOfKind: undefined,
        fourOfKind: undefined,
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
    this.animationRoll(); 
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
      locked: st.numRolls > 1 ? st.locked : Array(5).fill(true),
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
    const { dices, numRolls, isRolling, locked } = this.state;
    return (
      <div>
        <header>
          <h1>Yahtzee!</h1>
          <section>
            <Dice 
              dices={dices}
              locked={locked}
              isRolling={isRolling}
              disabled={numRolls === 0}
              diceHandleClick={this.toggleLocked}
            />
            <div>
              <button
                disabled={ locked.every( x=>x ) || numRolls === 0 || isRolling }
              >
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        {/*ScoreTable*/}
      </div>
    )
  }
}

export default Game; 
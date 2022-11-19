import React, { Component } from "react";
import Dice from "../dice/dice";
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons';

class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dices: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix],
      locked: Array(5).fill(false),
      isRolling: false,
      numRolls: 3,
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
            />
            <div>
              <button

              >
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


class Rules {
  constructor (params) {
    Object.assign(this, params);
  }

  sum (dices) {
    /* 
      * soma todos os dados
      * dice =  [2,4,6,1,3]
      * output 16;
    */  
    return dices.reduce((prev, curr) => prev + curr); 
  }

  frequency (dices) {
    /* 
      * Frequencia que cada valor aparece nos 5 dados
      * dice =  [2,6,6,1,3]
      * Map = [[2,1], [6,2]...]
      * output = [1,2,...]
    */ 
    let freqs = new Map();
    for (let val of dices) freqs.set(val, (freqs.get(val) || 0) + 1);
    return Array.from(freqs.values()); 
  }

  count (dices, val) {
    /* 
      * Conta o numero de vezes que o valor aparece; 
      * dice =  [2,6,6,1,3]
      * count(dice, 6)
      * output = 2
    */ 
    return dices.filter( diceVal => diceVal === val).length;
  }

}


 class TotalOfOneNumber extends Rules {
  evalRoll = dices => {
    return this.val * this.count(dices, this.val); 
  }
}

/**
 * Trinca: a soma de três dados iguais (exemplo: 4-4-4-1-2 vale 12 pontos)
 * Quadra: a soma de quatro dados iguais (exemplo: 4-4-4-4-2 vale 16 pontos)
 */
 class SumDistro extends Rules {
  evalRoll = dices => {
    return this.frequency(dices).some(dice => dice >= this.count) ? this.sum(dices) : 0; 
  }
}

/**
 * Full House: a soma de três dados iguais e mais dois dados também iguais. (exemplo: 3-3-3-2-2 vale 13 pontos)
*/

class FullHouse extends Rules {
  evalRoll = dices => {
    const freq = this.frequency(dices);
    return freq.includes(3) && freq.includes(2) ? this.score : 0;
  }
}

/**
 * Small Straight | sequencia baixa 
 * (1-2-3-4, 2-3-4-5 ou 3-4-5-6)
 */
class SmallStraight extends Rules {
  evalRoll = (dices) => {
    const dValues = new Set(dices);
    // Sequencia baixa 234 + 1 ou 5; 
    if (dValues.has(2) && dValues.has(3) && dValues.has(4) && (dValues.has(1) || dValues.has(5)) ) return this.score;
    // Sequencia baixa de 345 + 2 ou 6; 
    else if (dValues.has(3) && dValues.has(4) && dValues.has(5) && (dValues.has(2) || dValues.has(6)) ) return this.score;
    else return 0;
  }
}

/**Large straight
 * (1-2-3-4-5 ou  2-3-4-5--6)
 */
class LargeStraight extends Rules {
  evalRoll = (dices) => {
    const dValues =  new Set(dices);
    return dValues.size === 5 && (!dValues.has(1) || !dValues.has(6)) ? this.score : 0;
  }
}

/** Yahtzee */
class Yahtzee extends Rules {
  evalRoll = (dices) => {
    const freq = this.frequency(dices);
    return freq[0] === 5 ? this.score : 0; 
  }
}

const ones = new TotalOfOneNumber({val: 1, description: "Soma de todos os dados de valor 1"});
const twos = new TotalOfOneNumber({val: 2, description: "Soma de todos os dados de valor 2"});
const threes = new TotalOfOneNumber({val: 3, description: "Soma de todos os dados de valor 3"});
const fours = new TotalOfOneNumber({val: 4, description: "Soma de todos os dados de valor 4"});
const fives = new TotalOfOneNumber({val: 5, description: "Soma de todos os dados de valor 5"});
const sixes = new TotalOfOneNumber({val: 6, description: "Soma de todos os dados de valor 6"});

const threeOfSameKind = new SumDistro({
  count: 3,
  description: "Três dados iguais"
});

const fourOfSameKind = new SumDistro({
  count: 4, 
  description: "Soma quatro dados iguais"
});

const fullHouse = new FullHouse({
  score: 25,
  description: "Três dados iguais e outros dois também iguais (25 pontos)"
});

const smallStraight = new SmallStraight({
  score: 30,
  description: "Quatro dados de valores consecutivos (30 pontos)"
});

const largeStraight = new LargeStraight({
  score: 40,
  description: "Cinco dados de valores consecutivos (40 pontos)"
});

const yahtzee = new Yahtzee({
  score: 50,
  description: "Cinco dados de valores iguais (50 pontos)"
});

const chance = new SumDistro({ 
  count: 0, 
  description: "Soma cinco dados aleatórios"
});

export {
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
}
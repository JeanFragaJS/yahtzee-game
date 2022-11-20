

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


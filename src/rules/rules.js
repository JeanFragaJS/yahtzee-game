

class Rules {
  constructor (params) {
    Object.assign(this, params);
  }

  sum ( dices ) {
    //soma todos os dados
    return dices.reduce((prev, curr) => prev + curr); 
  }
}
// Soldier
class Soldier {
  constructor(health, strength){
      this.health = health;
      this.strength = strength;
// const solider1 = new Solider(50,5)
// They are the same
/* const soldier1 = {
  health: 50,
  strength: 5
}
*/
  }
  attack(){
    return this.strength;

  }
  receiveDamage(damage){
    this.health -= damage;

  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }
    else{
      return `$(this.name) has died in act of combat`;
    }
  }

  battleCry(){
    return ('Odin Owns You All!');
  }
}

// Saxon
class Saxon extends Soldier {

  constructor(health,strength){
    super(health,strength)
  }
  
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }else {
      return `A Saxon has died in combat`;
    }

  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  /*
  const war1 = new War()
  const war2 = new War()

  war1 = {
    vikingArmy : [],
    saxonArmy : []
  }

   war2 = {
    vikingArmy : [],
    saxonArmy : []
  }

  */

  addViking(viking){
    this.vikingArmy.push(viking);

  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
    
  }

  vikingAttack(){
    let attackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attack = attackedSaxon.receiveDamage(vikingAttacker.attack());

    if(attackedSaxon.health <= 0){
      this.saxonArmy.splice(attackedSaxon,1);
    }

    return attack;
  }



  saxonAttack(){
    
  }

  showStatus(){
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

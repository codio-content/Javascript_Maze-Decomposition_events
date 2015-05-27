
function initGame() {
  setEnergyDefaultEnergy(10)
  setMonsterDefaultDamage(10)
  score = 30
  energy = 10
}

function turnTaken () {

  score = energy*5  / steps
  energy = energy - 1
  
}

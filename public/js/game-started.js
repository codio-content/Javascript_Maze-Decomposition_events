
function initGame() {
  setEnergyDefaultEnergy(10)
  score = 30
  energy = 10
}

function stepTaken () {

  steps = steps + 1
  score = energy*5  / steps
  energy = energy - 1
  
}

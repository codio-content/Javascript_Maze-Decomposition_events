
function hitWallEvent() {
  showMessage('Hit wall')
}


function hitEnergyEvent() {
  playSound('energy')
  showMessage('Hit energy')
}


function hitMonsterEvent() {
  showMessage('Hit monster')
}

function goalReachedEvent() {
  showMessage('Hit monster')
  playSound('goal-reached')
}

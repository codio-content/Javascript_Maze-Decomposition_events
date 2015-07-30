
{Check It!|assessment}(test-2421011552)

|||guidance

## Solution
```javascript
function initGame() {
  score = 25
  energy = 20  
}

function turnTaken() {
  // scoring is done in here  
  score = energy * 6 / steps
  energy = energy - 1
}

function hitWallEvent() {
  playSound('bump')
}

function hitEnergyEvent() {
  playSound('energy')
  energy = energy + 5
}

function hitMonsterEvent() {
  playSound('fight')
  energy = energy - 3
}

function goalReachedEvent() {
  playSound('goal-reached')
  showMessage('Reached goal!')
}
```

|||
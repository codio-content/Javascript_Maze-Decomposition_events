In the last example, no matter what object your player collided with, you played one sound.

We can also play different sounds depending on which object is collided with.

{Check It!|assessment}(test-1739412102)

|||guidance

## Solution
```javascript
function hitWallEvent() {
  showMessage('Hit wall')
  playSound('bump')
}

function hitEnergyEvent() {
  playSound('energy')
  showMessage('Hit energy')
}

function hitMonsterEvent() {
  showMessage('Hit monster')
  playSound('fight')
}

function goalReachedEvent() {
  showMessage('Reached goal')
  playSound('goal-reached')
}
```

|||
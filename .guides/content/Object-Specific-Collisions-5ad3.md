In the last example, no matter what object your player collided with, you played one sound.

We can also play different sounds depending on which object is collided with.

|||challenge
Look at the code on the left hand side. We have provided 4 different event handlers. One for each type of collision.

1. Play the `bump` sound for a collision with a wall.
1. Play the `energy` sound for a collision with an energy store.
1. Play the `fight` sound for a collision with a monster.
1. Play the `goal-reached` sound when you reach the exit.
1. Show a message for each collision as well saying simple 'hit wall', 'hit energy' and 'hit monster'.

Make sure you play then game and hit all the entity types and also reach the exit.

When you're done, press the button below.

{Check It!!|custom}(test-collision-sounds)

|||teacher

## Teacher Cheat Sheet
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
  showMessage('Hit monster')
  playSound('goal-reached')
}
```

|||
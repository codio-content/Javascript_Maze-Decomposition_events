
$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  playerHitEnergy(function(object) {
    hitEnergyEvent();
    removeObject(object);
  });     
  playerHitWall(hitWallEvent);
  playerHitMonster(hitMonsterEvent);
  playerHitGoal(goalReachedEvent)
  endOfTurn (turnTaken)
  gameStarted(initGame)
  createRandomMaze(16,8)    
  
//   console.log(_commands);
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, "Test not implemented yet. Coming soon.");
  
//   if(score == 25 && energy == 20) {
//     codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');
//   }
//   else {
//     codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
//   }
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});
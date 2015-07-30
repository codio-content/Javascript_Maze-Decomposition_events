
var fs = require('fs');

hitWallEvent = null;
hitEnergyEvent = null;
hitMonsterEvent = null;
goalReachedEvent = null;


try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/collision-events.js', 'utf8');
  eval(data);
      
  
  var _hitWallEventSound = false;
  var _hitWallEventMessage = false;

  if(typeof hitWallEvent == 'function') {
    global.playSound = function (val) {
      if(val == 'bump') _hitWallEventSound = true;
    }
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'hit wall') _hitWallEventMessage = true;
    }
    hitWallEvent();
        
    if(!_hitWallEventSound || !_hitWallEventMessage) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }       
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  

  var _hitEnergyEventSound = false;
  var _hitEnergyEventMessage = false;

  if(typeof hitEnergyEvent == 'function') {
    global.playSound = function (val) {
      if(val == 'energy') _hitEnergyEventSound = true;
    }
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'hit energy') _hitEnergyEventMessage = true;
    }
    hitEnergyEvent();
    if(!_hitEnergyEventSound || !_hitEnergyEventMessage) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }       
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }


  var _hitMonsterEventSound = false;
  var _hitMonsterEventMessage = false;

  if(typeof hitMonsterEvent == 'function') {
    global.playSound = function (val) {
      if(val == 'fight') _hitMonsterEventSound = true;
    }
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'hit monster') _hitMonsterEventMessage = true;
    }
    hitMonsterEvent();
    if(!_hitMonsterEventSound || !_hitMonsterEventMessage) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }       
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }


  var _goalReachedEventSound = false;
  var _goalReachedEventMessage = false;

  if(typeof goalReachedEvent == 'function') {
    global.playSound = function (val) {
      if(val == 'goal-reached') _goalReachedEventSound = true;
    }
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'reached goal') _goalReachedEventMessage = true;
    }
    goalReachedEvent();
    if(!_goalReachedEventSound || !_goalReachedEventMessage) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }       
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  
  process.stdout.write('Well done!');  
  process.exit(0);
}
catch(e) {
//   console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);

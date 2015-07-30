
var fs = require('fs');

initGame = null;
turnTaken = null;
hitWallEvent = null;
hitEnergyEvent = null;
hitMonsterEvent = null;
goalReachedEvent = null;


try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/diy.js', 'utf8');
  eval(data);
      
      
  if(typeof initGame == 'function') {
    score = 0;
    energy = 0;
    initGame(); 
    if(score != 25 || energy != 20) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  
  if(typeof turnTaken == 'function') {
    score = 0;
    energy = 1;
    steps = 1;
    turnTaken();
    if(score != 6 || energy != 0) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  
  var _hitWallEvent = false;

  if(typeof hitWallEvent == 'function') {
    global.playSound = function (val) {
      if(val == 'bump') _hitWallEvent = true;
    }
    hitWallEvent();
    if(!_hitWallEvent) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }       
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  

  var _hitEnergyEvent = false;

  if(typeof hitEnergyEvent == 'function') {
    energy = 0;
    global.playSound = function (val) {
      if(val == 'energy') _hitEnergyEvent = true;
    }
    hitEnergyEvent();
    if(energy != 5 || !_hitEnergyEvent) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  
  var _hitMonsterEvent  = false;

  if(typeof hitMonsterEvent == 'function') {
    energy = 3;
    global.playSound = function (val) {
      if(val == 'fight') _hitMonsterEvent = true;
    }
    hitMonsterEvent();
    if(energy != 0 || !_hitMonsterEvent) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
  }  
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  
  var _goalReachedEvent = false;
  var _goalReachedEventMessage = false;
  
  if(typeof goalReachedEvent == 'function') {
    global.playSound = function (val) {
      if(val == 'goal-reached') _goalReachedEvent = true;
    }
    global.showMessage = function (val) {
      if(val.length > 0) _goalReachedEventMessage = true;
    }
    goalReachedEvent();
    if(!_goalReachedEvent || !_goalReachedEventMessage) {
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
  console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
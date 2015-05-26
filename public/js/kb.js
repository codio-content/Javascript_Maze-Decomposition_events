
function keyBoardEvent() {

  // reload the page
  if(keyPressed('R')) {
    document.location.reload(true);
  }

  if      (keyPressed('LEFT'))  player.moveleft();
  else if (keyPressed('RIGHT')) player.moveRight();
  else if (keyPressed('UP'))    player.moveUp(); 
  else if (keyPressed('DOWN'))  player.moveDown();
  
};


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player ship 
const playerShip = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 30,
  height: 30
};

// Enemy ships 
const enemyShips = [];  

function spawnEnemy() {
  // Spawn enemy at random x position at top of screen
  enemyShips.push({
    x: Math.random() * canvas.width,
    y: 0,  // Start at top
    width: 20,
    height: 20
  });
}

function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw player ship
  ctx.fillStyle = 'blue';
  ctx.fillRect(playerShip.x, playerShip.y, playerShip.width, playerShip.height);
  
  // Update position of enemy ships and draw them
  enemyShips.forEach(ship => {
    ship.y += 5;  // Move down 
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
    
    // Remove enemy if it goes off screen
    if (ship.y > canvas.height) {
      enemyShips.splice(enemyShips.indexOf(ship), 1); 
    }
  });
  
  // Spawn new enemy every 2 seconds
  spawnEnemy(); 
}

setInterval(update, 20);


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

 Load images
const playerShipImg = new Image();
playerShipImg.src = 'images/playerShip.png';

const enemyShipImg = new Image();
enemyShipImg.src = 'images/enemyShip.png';  

// Player ship 
const playerShip = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 70,  // Set width/height to 70
  height:70
};

// Enemy ships 
const enemyShips = [];  

function spawnEnemy() {
  // Spawn enemy at random x position at top of screen
  enemyShips.push({
    x: Math.random() * canvas.width,
    y: 0,  // Start at top
    width: 70,
    height: 70
  });
}

function update() {
  // Clear canvas
  ctx.clearRect(, 0, canvas.width, canvas.height);
  
  // Draw player ship 
  ctx.drawImage(playerShipImg, playerShip.x, playerShip.y, playerShip.width, playerShip.height);
  
  // Draw enemy ships
  enemyShips.forEach(ship => {
    ctx.drawImage(enemyShipImg, ship.x, ship.y, ship.width, ship.height);
    
    // Remove enemy if it goes off screen
    if (ship.y > canvas.height) {
      enemyShips.splice(enemyShips.indexOf(ship), 1); 
    }
  });
  
  // Spawn new enemy every 2 seconds
  spawnEnemy(); 
}

setInterval(update, 20);

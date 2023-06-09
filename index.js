const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load images
const playerShipImg = new Image();
playerShipImg.src = 'images/50.png';

const enemyShipImg = new Image();
enemyShipImg.src = 'images/29.png';  

// Player ship 
const playerShip = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: playerShipImg.width,  // Set width/height to image size
  height: playerShipImg.height
};

// Enemy ships 
const enemyShips = [];  

function spawnEnemy() {
  // Spawn enemy at random x position at top of screen
  enemyShips.push({
    x: Math.random() * canvas.width,
    y: 0,  // Start at top
    width: enemyShipImg.width,
    height: enemyShipImg.height
  });
}

function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
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

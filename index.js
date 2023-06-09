const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load images
const playerShipImg = new Image();
playerShipImg.src = 'images/50.png';

const enemyShipImg = new Image();
enemyShipImg.src = 'images/68.png';

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
    y: 0,
    width: 40,
    height: 40
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

    // Check for collision between player ship and enemy ship
    if (
      playerShip.x < ship.x + ship.width &&
      playerShip.x + playerShip.width > ship.x &&
      playerShip.y < ship.y + ship.height &&
      playerShip.y + playerShip.height > ship.y
    ) {
      // Player ship hit enemy ship, so remove enemy ship
      enemyShips.splice(enemyShips.indexOf(ship), 1);
    }
  });

  // Spawn new enemy every 2 seconds
  spawnEnemy();
}

setInterval(update, 20);

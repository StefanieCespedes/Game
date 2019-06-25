
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
let interval;
const obstacles = [];
canvas.width = 800;
canvas.height = 500;

function drawBackground() {
  ctx.beginPath();
  ctx.fillStyle = '#FAF146';
  ctx.fillRect(0, 0, 900, 600);
  ctx.closePath();
}
drawBackground();

class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
  }

  icon() {
    let img = new Image();
    img.src = './images/girl dev.png';
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  // drawPlayer() {
  //   ctx.fillStyle = '#FFA8A3';
  //   ctx.fillRect(this.x, this.y, this.width, this.height);
  // }

  // update() {
  //   ctx.fillStyle = this.color;
  //   ctx.fillRect(this.x, this.y, this.width, this.height);
  // }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }

  right() {
    return this.x + this.width;
  }

  left() {
    return this.x;
  }

  bottom() {
    return this.y + this.height;
  }

  crash(bug) {
    if (this.x + this.width > bug.x && this.x < bug.x + bug.width && this.y < bug.y + bug.height && this.y + this.height > bug.y) {
    clearInterval(interval);
    }
  }
}

const devGirl = new Player(0, 225, 50, 50);
devGirl.icon();

function clear() {
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  drawBackground();
  devGirl.icon();
}

function gameTime() {
  interval = setInterval(() => {
    updateGame();
    frames += 1;
  }, 15);
}

gameTime();

function checkGameOver() {
  let crashed = obstacles.some(function (obstacles) {
    return devGirl.crash(obstacles);
  });

  if (crashed) {
    clearInterval(interval);
  }
}

function updateGame() {
  clear();
  // devGirl.update();
  devGirl.newPos();
  createObstacle();
  obstacles.forEach((obst) => {
    obst.drawObstacle();
    devGirl.crash(obst);
  });
  checkGameOver();
  // obstacles.map(obst => obst.questionMark())
  // obstacles.speedUp();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      devGirl.speedY = -2;
      break;
    case 40: // down arrow
      devGirl.speedY = 2;
      break;
    case 37: // left arrow
      devGirl.speedX = -2;
      break;
    case 39: // right arrow
      devGirl.speedX = 2;
      break;
  }
};

document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      devGirl.speedY = -2;
      break;
    case 40: // down arrow
      devGirl.speedY = 2;
      break;
    case 37: // left arrow
      devGirl.speedX = -2;
      break;
    case 39: // right arrow
      devGirl.speedX = 2;
      break;
  }
};

class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 50;
  }

  drawObstacle() {
    let img = new Image();
    img.src = './images/bug-coding.png';
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  // questionMark() {
  //   let img = new Image();
  //   img.src = './images/questionmark.png';
  //   ctx.drawImage(img, this.x, this.y, 50, 50)
  // }

  updateObstacle() {
    this.x -= 4;
  }
}

function createObstacle() {
  if (frames % 180 === 0) {
    const maxPositionY = 400;
    const minPositionY = 100;
    obstacles.push(new Obstacle(850, Math.floor(Math.random() * (maxPositionY - minPositionY)) + minPositionY));
  }
  obstacles.forEach((obst, i) => {
    obst.updateObstacle();
    if (obst.x < 0) {
      obstacles.splice(i, 1);
    }
  })
}

    // let maxSize = 200;
    // let minSize = 20;
// Math.floor(Math.random() * (maxSize - minSize)) + minSize)

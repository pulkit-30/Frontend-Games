var box = document.querySelector(".box");
var message = document.querySelector(".message");
var play = document.querySelector(".play-btn");
var score = document.querySelector(".score");
var hscore = document.querySelector(".high-score");
var x = 0;
score.textContent = "Score=0";
hscore.textContent = `High Score= 0`;
var y = 0;
var fx, fy;
var snakeElement;
var foodElement;
var direction = { x: 0, y: 0 };
// music
const food = new Audio("./music/food.mp3");
const gaemover = new Audio("./music/gameover.mp3");
const move = new Audio("./music/move.mp3");
const music = new Audio("./music/music.mp3");
//

var randomfx = Math.ceil(2 + Math.random() * 14);
var randomfy = Math.ceil(2 + Math.random() * 14);

var foodbox = { x: randomfx, y: randomfy };

var randomx = Math.ceil(2 + Math.random() * 13);
var randomy = Math.ceil(2 + Math.random() * 13);
var snakeArray = [{ x: randomx, y: randomy }];

let lasttime = 0;
speed = 8;
//
function main(time) {
  window.requestAnimationFrame(main);
  if ((time - lasttime) / 1000 < 1 / speed) {
    return;
  }
  lasttime = time;
  gameengine();
}
function iscollide(snake) {
  if (
    snake[0].x >= 20 ||
    snake[0].x <= 0 ||
    snake[0].y >= 20 ||
    snake[0].y <= 0
  ) {
    return true;
  }

  return false;
}
function gameengine() {
  if (iscollide(snakeArray)) {
    music.pause();
    message.textContent = "";
    snakeArray = [{ x: 13, y: 13 }];
    gaemover.play();
    if (y < x) {
      y = x;
      hscore.textContent = `High Score= ${y}`;
    }
    x = 0;
    alert("Game Over \n Press Ok to Restart");
  }
  //if snake eat the food
  if (snakeArray[0].x == foodbox.x && snakeArray[0].y == foodbox.y) {
    food.play();
    x = x + 10;
    score.textContent = `Score= ${x}`;
    snakeArray.unshift({
      x: snakeArray[0].x + direction.x,
      y: snakeArray[0].y + direction.y,
    });
    //new food location
    fx = Math.ceil(2 + Math.random() * 17);
    fy = Math.ceil(2 + Math.random() * 17);

    foodbox = { x: fx, y: fy };
  }
  //moving the snake

  for (let i = snakeArray.length - 2; i >= 0; i--) {
    snakeArray[i + 1] = { ...snakeArray[i] };
  }
  snakeArray[0].x += direction.x;
  snakeArray[0].y += direction.y;

  box.innerHTML = "";
  snakeArray.forEach((element, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = element.y;
    snakeElement.style.gridColumnStart = element.x;
    if (index === 0) {
      snakeElement.classList.add("snake-head");
    } else {
      snakeElement.classList.add("snake-body");
    }
    box.appendChild(snakeElement);
  });
  //food

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = foodbox.y;
  foodElement.style.gridColumnStart = foodbox.x;
  foodElement.classList.add("food");
  box.appendChild(foodElement);
}

//main logic of the program
window.requestAnimationFrame(main);
play.addEventListener("click", () => {
  move.play();
  music.play();
  key = "ArrowUp";
  gamestart(key);
  play.style.display = "none";
  message.innerHTML = "";
});

document.addEventListener("keydown", (e) => {
  message.textContent = "";
  move.play();
  music.play();

  //   console.log(e.key);

  move.play();
  gamestart(e.key);
});
function gamestart(key) {
  switch (key) {
    case "ArrowUp":
      console.log("ArrowUp");

      direction.x = 0;
      direction.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      direction.x = 0;
      direction.y = 1;
      break;

    case "ArrowLeft":
      console.log("Arrowleft");
      direction.x = -1;
      direction.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      direction.x = 1;
      direction.y = 0;
      break;
    default:
      console.log("error");
      direction.x = 0;
      direction.y = 1;
  }
}

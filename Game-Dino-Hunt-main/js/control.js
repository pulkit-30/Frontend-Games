// var name = prompt("enter your name", "player90874");
// alert("PLEASE ROTATE YOUR PHONE FOR BEST EXPERIENCE ");
var c = document.querySelector(".default-charcter img");
var cl = document.getElementById("left");
var enemy = document.querySelector(".enemy");
var scorepoints = document.querySelector(".score");
var gameoveraudio = new Audio("./audio/game over.wav");
var score = 0;
// var cl = document.querySelector(".default-charcter");
var left = 10;
var right = 123;
c.classList.remove("jump");
document.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  c.classList.remove("jump");
  if (e.keyCode == "38") {
    c.classList.add("jump");
    setTimeout(() => {
      c.classList.remove("jump");
    }, 2000);
  }
  console.log(cl.style.left);

  if (e.keyCode == 37) {
    if (left < 10) {
      console.log("already left");
    } else {
      left = left - 5;
      cl.style.left = left + "px";
    }
  }
  console.log(cl.style.right);
  if (e.keyCode == 39) {
    if (left > 1000) {
      console.log("already right");
    } else {
      left = left + 5;
      cl.style.left = left + "px";
    }
  }
});
function addjump() {
  c.classList.add("jump");
  setTimeout(() => {
    c.classList.remove("jump");
  }, 2000);
}
function moveright() {
  if (left > 500) {
    console.log("already right");
  } else {
    left = left + 5;
    cl.style.left = left + "px";
  }
}
function moveleft() {
  if (left < 10) {
    console.log("already left");
  } else {
    left = left - 5;
    cl.style.left = left + "px";
  }
}

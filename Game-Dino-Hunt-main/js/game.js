var menu = document.querySelector(".menu");
var main = document.querySelector(".main");
var btn = document.querySelector(".setting");
var enemy = document.querySelector(".enemy");
var footer = document.querySelector(".footer");
var content = document.querySelector(".content");
var cm = document.querySelector(".setc");
var character = document.querySelectorAll(".setc ul li img");
var tooglecharacter = document.querySelector(".default-charcter img");
var music = new Audio("./audio/game.mp3");
var len = character.length;
var audio = new Audio("./audio/click.wav");
music.setAttribute("loop", "true");
function alerthide() {
  document.querySelector(".alert").classList.add("display");
}
document.addEventListener("click", touchaudio);
function touchaudio() {
  audio.play();
}
function toggleplay() {
  footer.classList.add("slide");
  enemy.classList.add("moving");
  content.classList.add("display");
  btn.classList.remove("display");
  cm.classList.add("display");
  music.play();
  start();
}
function start() {
  scorepoints.classList.toggle("display");
  score = 0;
  setInterval(() => {
    var ex = parseInt(
      window.getComputedStyle(enemy, null).getPropertyValue("left")
    );
    var ey = parseInt(
      window.getComputedStyle(enemy, null).getPropertyValue("top")
    );
    var cx = parseInt(
      window.getComputedStyle(c, null).getPropertyValue("left")
    );
    var cy = parseInt(window.getComputedStyle(c, null).getPropertyValue("top"));

    var offsetx = Math.abs(ex - cx);
    var offsety = Math.abs(ey - cy);
    // console.log(offsetx);
    // console.log(offsety);
    if (offsetx < 90 && offsety < 55) {
      gameover(score);
    } else {
      scorecount();
    }
  }, 500);
}

function gameover() {
  console.log(score);
  footer.classList.remove("slide");
  enemy.classList.remove("moving");
  btn.classList.add("display");
  content.innerHTML = `Game Overscore=${score}`;
  content.classList.remove("display");
  gameoveraudio.play();
  music.pause();
  scorepoints.classList.toggle("display");
}
function scorecount() {
  score = score + 10;
  scorepoints.innerHTML = `${score}`;
}

function togglehide() {
  score = 0;
  menu.classList.toggle("display");
  console.log(menu.classList);
  main.classList.toggle("filter");
  console.log(main.classList);
  btn.classList.toggle("display");
  enemy.classList.toggle("moving");
  footer.classList.toggle("moving");
}
//charcter menu
function characterchoice() {
  scorepoints.classList.toggle("display");
  cm.classList.toggle("display");
  menu.classList.add("display");
  main.classList.remove("filter");
  // enemy.classList.("moving");
  footer.classList.remove("moving");
}
//change character
function setcharcater(x) {
  score = 0;
  console.log(x);
  console.log(character[x].getAttribute("src"));
  var att = character[x].getAttribute("src");
  tooglecharacter.setAttribute("src", att);
  // var att=character[x].setAttribute("src" , )
}

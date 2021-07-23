$(window).on("load", () => {
  $(".loader").fadeOut("slow");
});

var message = document.querySelector(".message");
var box = document.querySelectorAll(".box");
var container = document.querySelector(".container");
var levelbox = document.querySelector(".level");
var count = 0; //for checking the game is started or not
/////////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
/**********ADDING EVENT LISTENER TO EACH BOX*********************/
/////////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////
box.forEach((Element) => {
  Element.addEventListener("click", () => {
    pass++;
    Element.addEventListener("click", () => {
      Element.classList.add("active");
      setTimeout(() => {
        Element.classList.remove("active");
      }, 200);
    });
    clickaniamtecolor(Element.textContent);
    play(Element.textContent);
  });
});
/////////////////////////INITIAL GAME LEVEL//////////////////
var pass = 0;
var level = 0;
levelbox.textContent = ` Level = ${level}`;

/***********ARRAY TO START THE GAME*****************/

var samplesequence = ["red", "blue", "yellow", "green"]; //all elements
var gamesequence = [];
var usersequence = [];

/********************KEYPRESS TO START******************/
document.addEventListener("keypress", start);
function start() {
  if (count == 0) {
    clickanimate();
    count++;
    container.classList.remove("error");
    message.textContent = "";
    nextsequence();
  } else {
    console.log("err");
  }
}

function nextsequence() {
  pass = 0;

  usersequence = [];
  level++;
  levelbox.textContent = `Level = ${level}`;
  var num = Math.random();
  num = Math.floor(num * 4);
  gamesequence.push(samplesequence[num]);
  playsound(samplesequence[num]);
  autoaniamtecolor(samplesequence[num]);
  //   console.log(gamesequence);
}
function play(color) {
  //   console.log("play");
  usersequence.push(color);
  if (usersequence[pass - 1] == gamesequence[pass - 1]) {
    console.log("correct");
    if (usersequence.length == gamesequence.length) {
      setTimeout(() => {
        nextsequence();
      }, 1000);
    }
  } else {
    // console.log("err");
    gameover();
  }
  //   console.log(usersequence);

  playsound(color);
}

function gameover() {
  setTimeout(() => {
    playsound("over");
    document.querySelector("#btn").classList.add("click");
    document.querySelector("#btn").classList.remove("on");
  }, 500);
  message.innerHTML = "Wrong answer<br>Game Over<br>Press any key to restart";
  container.classList.add("error");
  count = 0;
  level = 0;
  pass = 0;
  levelbox.textContent = "";
  usersequence = [];
  gamesequence = [];
}
function clickanimate() {
  document.querySelector("#btn").classList.add("click");
  document.querySelector("#btn").classList.add("on");
  setTimeout(() => {
    document.querySelector("#btn").classList.remove("click");
  }, 500);
  setTimeout(() => {
    start();
  }, 1000);
}
///////////////
/////////////
//////////////
///////////////
/////////////
//////////////
///***animation***///
///////////////
/////////////
//////////////
///////////////
/////////////
//////////////
var box = document.querySelectorAll(".box");
function clickaniamtecolor() {
  box.forEach((Element) => {
    Element.addEventListener("click", () => {
      Element.classList.add("active");
      setTimeout(() => {
        Element.classList.remove("active");
      }, 200);
    });
  });
}
function autoaniamtecolor(color) {
  box.forEach((Element) => {
    Elementcolor = Element.textContent;
    if (color == Elementcolor) {
      Element.classList.add("active");
      setTimeout(() => {
        Element.classList.remove("active");
      }, 100);
    }
  });
}

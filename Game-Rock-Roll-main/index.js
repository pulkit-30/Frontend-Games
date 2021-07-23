var p1 = prompt("enter player 1 name", "player1");
var p2 = prompt("enter player 2 name", "player2");
document.getElementById("p1").innerHTML = p1;
document.getElementById("p2").innerHTML = p2;
function play() {
  var n = Math.random();
  n = Math.floor(n * 7);
  if (n == 0) {
    n = 1;
  }
  switch (n) {
    case 1:
      document.querySelector(".player1").setAttribute("src", "dice1.png");
      break;
    case 2:
      document.querySelector(".player1").setAttribute("src", "dice2.png");
      break;
    case 3:
      document.querySelector(".player1").setAttribute("src", "dice3.png");
      break;
    case 4:
      document.querySelector(".player1").setAttribute("src", "dice4.png");
      break;
    case 5:
      document.querySelector(".player1").setAttribute("src", "dice5.png");
      break;
    case 6:
      document.querySelector(".player1").setAttribute("src", "dice6.png");
      break;
  }
  console.log(n);
  var n2 = Math.random();

  n2 = Math.floor(n2 * 7);
  if (n2 == 0) {
    n2 = 1;
  }

  switch (n2) {
    case 1:
      document.querySelector(".player2").setAttribute("src", "dice1.png");
      break;
    case 2:
      document.querySelector(".player2").setAttribute("src", "dice2.png");
      break;
    case 3:
      document.querySelector(".player2").setAttribute("src", "dice3.png");
      break;
    case 4:
      document.querySelector(".player2").setAttribute("src", "dice4.png");
      break;
    case 5:
      document.querySelector(".player2").setAttribute("src", "dice5.png");
      break;
    case 6:
      document.querySelector(".player2").setAttribute("src", "dice6.png");
      break;
  }
  console.log(n2);

  document.querySelector(".box .player1").classList.remove("bgwin");
  document.querySelector(".box .player1").classList.remove("bglose");
  document.querySelector(".box .player2").classList.remove("bglose");
  document.querySelector(".box .player2").classList.remove("bgwin");
  if (n == n2) {
    document.querySelector(".box .player1").classList.add("bgwin");
    document.querySelector(".box .player2").classList.add("bgwin");
    document.querySelector("#heading").innerHTML = "Tie";
  } else {
    document.querySelector(".box .player1").classList.remove("bgwin");
    document.querySelector(".box .player1").classList.remove("bglose");
    document.querySelector(".box .player2").classList.remove("bglose");
    document.querySelector(".box .player2").classList.remove("bgwin");
    if (n > n2) {
      document.querySelector(".box .player1").classList.add("bgwin");
      document.querySelector(".box .player2").classList.add("bglose");
      var q2 = p1 + " wins";
      document.querySelector("#heading").innerHTML = q2;
      console.log(document.querySelector(".box .player1").classList);
    } else {
      document.querySelector(".box .player1").classList.remove("bgwin");
      document.querySelector(".box .player1").classList.remove("bglose");
      document.querySelector(".box .player2").classList.remove("bglose");
      document.querySelector(".box .player2").classList.remove("bgwin");
      if (n < n2) {
        document.querySelector(".box .player1").classList.add("bglose");
        document.querySelector(".box .player2").classList.add("bgwin");
        var q2 = p2 + " wins";
        document.querySelector("#heading").innerHTML = q2;
        console.log();
      }
    }
  }
}

function lightmode() {
  console.log(document.getElementById("body").classList);
  // var a = document.getElementById("body").classList;
  document.getElementById("body").classList.remove("bgblack");
  document.getElementById("body").classList.remove("bgyellow");

  document.getElementById("body").classList.toggle("bgwhite");
  // document.querySelector(body).classList.add("bgwhite");
}

function darkmode() {
  console.log(document.getElementById("body").classList);
  // var a = document.getElementById("body").classList;
  document.getElementById("body").classList.remove("bgwhite");
  document.getElementById("body").classList.remove("bgyellow");
  document.getElementById("body").classList.toggle("bgblack");
  // document.querySelector(body).classList.add("bgwhite");
}

function yellowmode() {
  console.log(document.getElementById("body").classList);
  // var a = document.getElementById("body").classList;
  document.getElementById("body").classList.remove("bgwhite");
  document.getElementById("body").classList.remove("bgblack");
  document.getElementById("body").classList.toggle("bgyellow");
  // document.querySelector(body).classList.add("bgwhite");
}
var bgc = "none";
function togglehide() {
  var menu = document.getElementById("menu");
  var para = document.getElementById("para");
  para.style.display = bgc;
  if (para.style.display != "none") {
    para.style.display = "none";
    bgc = "none";
  } else {
    para.style.display = "flex";
    bgc = "flex";
  }
  console.log(para.style.display);
}

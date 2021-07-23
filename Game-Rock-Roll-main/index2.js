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

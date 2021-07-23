var music = new Audio("./audio/power.wav");
playback();
document.addEventListener("onload", playback);
function playback() {
  music.setAttribute("loop", "true");
  music.play();
}
// for click sound
var audio = new Audio("./audio/click.wav");
document.addEventListener("click", touchaudio);
function touchaudio() {
  audio.play();
  music.play();
}
// animation
const slide = ScrollReveal({
  origin: "right",
  distance: "-500px",
  duration: 2000,
  reset: true,
});

slide.reveal(".character", {
  delay: 100,
});
slide.reveal(".box", {
  origin: "bottom",
  delay: 400,
});

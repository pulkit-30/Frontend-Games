//sound js
var audio = new Audio("audio/pop_up_sms_tone.mp3");
var over = new Audio("audio/wrong.mp3");
var red = new Audio("audio/red.mp3");
var blue = new Audio("audio/blue.mp3");
var yellow = new Audio("audio/yellow.mp3");
var green = new Audio("audio/green.mp3");

/********************CLICK SOUND***************** */

/********************PLAYING SOUND****************** */
function playsound(text) {
  switch (text) {
    case "red":
      red.play();
      break;
    case "green":
      green.play();
      break;
    case "blue":
      blue.play();
      break;
    case "yellow":
      yellow.play();
      break;
    case "over":
      over.play();
      break;
    default:
      audio.play();
  }
}

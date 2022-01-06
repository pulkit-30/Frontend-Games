const Projects = [
  {
    title: "Dino-Hunt",
    src: "https://pulkit203.github.io/Dono-hunt/",
  },
  {
    title: "Snake Game",
    src: "https://pulkit203.github.io/Snake-Game/",
  },
  {
    title: "Simon Game",
    src: "https://pulkit203.github.io/simon-game/",
  },
  {
    title: "Rythm",
    src: "https://pulkit203.github.io/Rythm/",
  },
];
Projects.forEach((element) => {
  var project = document.createElement("div");
  project.innerHTML = `
<hr />
    <div class="projectBox">
        <h2>${element.title}</h2>
          <div class="flex row-reverse">
            <div class="fas fa-expand">
            <span class="hide-text">${element.title}</span>
            </div>
            <iframe
            src=${element.src}
            title="description"
            class=${element.title}
            scrolling="no"
            ></iframe>
            <a href=${element.src} class="button">Play <i class="fas fa-gamepad"></i></a>
          </div>
    </div>
`;

  document.querySelector("body").appendChild(project);
});
function GenColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.querySelectorAll(".fa-expand").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .getElementsByClassName(element.textContent.trim())[0]
      .requestFullscreen();
  });
});

document.querySelectorAll(".background i").forEach((element) => {
  const x = Math.floor(Math.random() * 98);
  const y = Math.floor(Math.random() * 100);
  element.style.left = x + "vw";
  element.style.top = y + "vw";
  element.style.fontSize = Math.random() * 40 + "px";
  element.style.color = GenColor();
});

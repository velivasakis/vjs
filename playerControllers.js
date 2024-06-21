import { player as player } from "./setupVideoJs";

const pause = document.getElementById("stopBtn");
const start = document.getElementById("startBtn");
const mute = document.getElementById("muteBtn");
const unmute = document.getElementById("unmuteBtn");
const close = document.getElementById("closeBtn");

pause.addEventListener("click", () => {
  player.pause();
});

start.addEventListener("click", () => {
  player.play();
});

mute.addEventListener("click", () => {
  player.muted(true);
});
unmute.addEventListener("click", () => {
  player.muted(false);
});
close.addEventListener("click", () => {
  player.dispose();
});

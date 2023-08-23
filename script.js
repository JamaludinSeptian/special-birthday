const button = document.querySelector("#button");
const canvas = document.querySelector("#confetti");

const jsConfetti = new JSConfetti();

setTimeout(() => {
  var musik = "Selamat Ulang Tahun.mp3";
  var audio = new Audio(musik);
  audio.loop = true;
  audio.autoplay = true;
  audio.play();
  jsConfetti
    .addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
    })
    .then(() => jsConfetti.addConfetti());
}, 1000);

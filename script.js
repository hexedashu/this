const noMessages = [
  "Aww please think again... my heart says it's you. 💓",
  "Still no? You're too cute to say no twice. 🥺",
  "One more chance? I promise endless cuddles and smiles. 🌹",
  "I’ll keep asking with all my love... please say yes! 💞",
  "You can press no forever... and I’ll still choose you forever. ✨",
];

const noButtonLabels = ["No 🙈", "Really no? 😶", "Still no? 🥲", "Think again? 😘", "Nope? 💔"];

const promptText = document.getElementById("prompt-text");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const proposalPage = document.getElementById("proposal-page");
const celebrationPage = document.getElementById("celebration-page");
const heartsLayer = document.querySelector(".floating-hearts");

let noClicks = 0;

noBtn.addEventListener("click", () => {
  const loopedIndex = noClicks % noMessages.length;
  promptText.textContent = noMessages[loopedIndex];
  noBtn.textContent = noButtonLabels[loopedIndex % noButtonLabels.length];

  noClicks += 1;

  const yesScale = Math.min(1 + noClicks * 0.06, 1.35);
  const noWiggleClass = "wiggle";

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.classList.remove(noWiggleClass);
  void noBtn.offsetWidth;
  noBtn.classList.add(noWiggleClass);

  burstHearts(10);
});

yesBtn.addEventListener("click", () => {
  proposalPage.classList.remove("active");
  celebrationPage.classList.add("active");
  celebrationPage.setAttribute("aria-hidden", "false");
  proposalPage.setAttribute("aria-hidden", "true");

  burstHearts(35);
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["💖", "💕", "💗", "💘", "💞"][Math.floor(Math.random() * 5)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${3 + Math.random() * 4}s`;
  heart.style.fontSize = `${0.9 + Math.random() * 1.6}rem`;
  heartsLayer.appendChild(heart);

  setTimeout(() => heart.remove(), 7500);
}

function burstHearts(count = 6) {
  for (let i = 0; i < count; i += 1) {
    setTimeout(createHeart, i * 110);
  }
}

setInterval(createHeart, 650);

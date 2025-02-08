"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");

  setTimeout(() => {
    message.style.display = "none";
    startHeartAnimation();
  }, 3000);
});

function startHeartAnimation() {
  setInterval(() => {
    createHeart();
  }, 300);
}


function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  document.body.appendChild(heart);

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  
  heart.style.left = `${startX}px`;
  heart.style.top = `${startY}px`;

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");
  const heartContainer = document.createElement("div");
  heartContainer.classList.add("heart-container");
  document.body.appendChild(heartContainer);

  setTimeout(() => {
    message.style.color = "#fff"; // Белый текст
    message.style.display = "none";
    drawHeartLines();
  }, 3000);
});

function drawHeartLines() {
  const heartContainer = document.querySelector(".heart-container");

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  heartContainer.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "rgba(255, 0, 0, 0.8)"; // Полупрозрачный красный цвет
  ctx.shadowColor = "red";
  ctx.shadowBlur = 10;
  ctx.lineWidth = 3;
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const scale = 14; // Размер сердца
  
  const heartPoints = [];
  for (let t = 0; t <= Math.PI * 2; t += 0.05) {
    const x = 16 * Math.pow(Math.sin(t), 3) * scale + centerX;
    const y = -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    ) * scale + centerY;
    heartPoints.push({ x, y });
  }

  let i = 0;
  function animateHeart() {
    if (i < heartPoints.length - 1) {
      ctx.beginPath();
      ctx.moveTo(heartPoints[i].x, heartPoints[i].y);
      ctx.lineTo(heartPoints[i + 1].x, heartPoints[i + 1].y);
      ctx.stroke();
      i++;
      requestAnimationFrame(animateHeart);
    }
  }

  animateHeart();
}


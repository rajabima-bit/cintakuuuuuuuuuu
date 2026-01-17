const password = "sayang";
const music = document.getElementById("music");

function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === password) {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("mainPage").classList.add("active");

    music.play();
    startHearts();
  } else {
    alert("Password salah 😢");
  }

function goToFinal() {
  document.getElementById("messagePage").classList.remove("active");
  document.getElementById("finalPage").classList.add("active");
}

// LOVE ANIMATION
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// ZOOM FOTO
document.querySelectorAll(".photo-card img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("photoModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
  });
});

function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

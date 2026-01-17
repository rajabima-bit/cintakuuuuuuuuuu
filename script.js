// ===== LOGIN =====
const password = "sayang";

function login() {
  const input = document.getElementById("passwordInput").value;
  const music = document.getElementById("music");

  if (input === password) {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("mainPage").classList.add("active");

    if (music) {
      music.volume = 0.7;
      music.play().catch(() => {});
    }

    startHearts();
  } else {
    alert("Password salah 😢");
  }
}

// ===== NAVIGASI =====
function nextMessage() {
  document.getElementById("mainPage").classList.remove("active");
  document.getElementById("messagePage").classList.add("active");
}

function goToFinal() {
  document.getElementById("messagePage").classList.remove("active");
  document.getElementById("finalPage").classList.add("active");
}

// ===== LOVE ANIMATION =====
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

// ===== ZOOM FOTO =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".photo-card img").forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("photoModal").style.display = "flex";
      document.getElementById("modalImg").src = img.src;
    });
  });
});

function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

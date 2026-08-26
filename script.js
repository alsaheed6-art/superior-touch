// Shopping Cart Counter
let cart = 0;
const cartCount = document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;

    button.textContent = "Added ✓";

    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1000);
  });
});

// Flash Sale Countdown
let totalSeconds = (12 * 3600) + (45 * 60) + 18;

function updateCountdown() {
  if (totalSeconds < 0) return;

  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  document.getElementById("hrs").textContent = String(hrs).padStart(2, "0");
  document.getElementById("mins").textContent = String(mins).padStart(2, "0");
  document.getElementById("secs").textContent = String(secs).padStart(2, "0");

  totalSeconds--;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Wishlist Hearts
document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", () => {
    heart.textContent = heart.textContent === "♡" ? "❤️" : "♡";
  });
});
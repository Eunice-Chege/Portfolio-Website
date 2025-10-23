// Simple fade-in effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s";
    document.body.style.opacity = 1;
  }, 100);
});

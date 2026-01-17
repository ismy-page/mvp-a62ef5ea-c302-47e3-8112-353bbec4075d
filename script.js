(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.getElementById("ctaButton");
  const out = document.getElementById("ctaResult");
  if (btn && out) {
    btn.addEventListener("click", () => {
      out.textContent = "Thanks for your interest — share the artwork and goal, and you’ll get a tailored quote via email.";
    });
  }
})();


document.addEventListener("DOMContentLoaded", () => {
  // Create the navbar HTML
  const nav = `
    <nav class="navbar">
      <div class="nav-container">
        <a class="brand" href="index.html">Learn Pinball</a>
        <div class="nav-links">
          <a href="links.html">Links</a>
          <a href="about.html">About</a>
        </div>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      </div>
    </nav>
  `;

  // Insert navbar at the top of the body
  document.body.insertAdjacentHTML("afterbegin", nav);

  // Select elements
  const toggleButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      const isActive = navLinks.classList.toggle("active");

      // Update ARIA attribute for accessibility
      toggleButton.setAttribute("aria-expanded", isActive);
    });
  }
});

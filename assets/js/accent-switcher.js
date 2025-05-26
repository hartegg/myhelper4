 document.addEventListener("DOMContentLoaded", () => {
      const accentColors = [
        "blue", "green", "orange", "red", "purple",
        "pink", "gray", "yellow", "indigo"
      ];

      const highlightMap = {
        blue: "#1e3d57",
        green: "#28a745",
        orange: "#ff9800",
        red: "#e9361e",
        purple: "#8b5cf6",
        pink: "#ec4899",
        gray: "#6b7280",
        yellow: "#f59e0b",
        indigo: "#6366f1"
      };

      const container = document.getElementById("accent-buttons");
      if (!container) return;

      function setActiveButton(className, activeKey) {
        document.querySelectorAll(`.${className}`).forEach(btn => {
          if (btn.dataset.accentOption === activeKey) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }

      accentColors.forEach(color => {
        const btn = document.createElement("button");
        btn.className = "accent-button";
        btn.dataset.accentOption = color;
        btn.name = color; // Dodan atribut "name"
        btn.style.backgroundColor = highlightMap[color];

        btn.addEventListener("click", () => {
          document.documentElement.setAttribute("data-accent", color);
          localStorage.setItem("accent-color", color);
          setActiveButton("accent-button", color);
        });

        container.appendChild(btn);
      });

      const storedAccent = localStorage.getItem("accent-color") || "blue";
      document.documentElement.setAttribute("data-accent", storedAccent);
      setActiveButton("accent-button", storedAccent);
    });

/* v1
document.addEventListener("DOMContentLoaded", () => {
  const savedAccent = localStorage.getItem("accent-color");
  if (savedAccent) {
    document.documentElement.setAttribute("data-accent", savedAccent);
  }

  const buttons = document.querySelectorAll("[data-accent-option]");

  buttons.forEach(button => {
    const color = button.getAttribute("data-accent-option");

    // Označi aktivnu boju odmah po učitavanju
    if (color === savedAccent) {
      button.classList.add("active");
    }

    // Dodaj event za promjenu boje
    button.addEventListener("click", () => {
      document.documentElement.setAttribute("data-accent", color);
      localStorage.setItem("accent-color", color);

      // Makni 'active' s drugih, dodaj na trenutno kliknuti
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}); */
/* ============================================================
   Vital Balance — Shared interactions
   ============================================================ */

(function () {
  // Cart badge — reads localStorage on every page load
  (function initCartBadge() {
    try {
      const cart = JSON.parse(localStorage.getItem("vb_cart") || "[]");
      const count = cart.reduce((n, i) => n + (i.qty || 1), 0);
      const badge = document.getElementById("cart-badge");
      if (badge) { badge.textContent = count; badge.hidden = count === 0; }
    } catch (_) {}
  })();

  // Hamburger overlay
  const ham = document.querySelector(".nav__hamburger");
  const overlay = document.querySelector(".nav-overlay");
  const overlayClose = document.querySelector(".nav-overlay__close");

  function openOverlay() {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    ham.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeOverlay() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    ham.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (ham && overlay) {
    ham.addEventListener("click", openOverlay);
  }
  if (overlayClose && overlay) {
    overlayClose.addEventListener("click", closeOverlay);
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("is-open")) closeOverlay();
  });

  // Wishlist toggle (top-right heart on product cards)
  document.querySelectorAll(".product-card__wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
    });
  });

  // Stagger entrance for product cards (PLP/PDP pages)
  const cardIO = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        cardIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  if (cardIO) {
    document.querySelectorAll(".product-card").forEach(c => cardIO.observe(c));
  } else {
    document.querySelectorAll(".product-card").forEach(c => c.classList.add("is-visible"));
  }

  // Scroll reveal — fades elements up gently as they enter the viewport.
  // Siblings inside the same parent are auto-staggered (80ms apart).
  const revealIO = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }) : null;

  document.querySelectorAll(".reveal").forEach(el => {
    const siblings = [...el.parentElement.querySelectorAll(":scope > .reveal")];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.setProperty("--reveal-delay", `${idx * 80}ms`);
    if (revealIO) revealIO.observe(el);
    else el.classList.add("is-visible");
  });
})();

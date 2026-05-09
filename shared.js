/* ============================================================
   Vital Balance — Shared interactions
   ============================================================ */

(function () {
  // Announcement banner dismiss
  const banner = document.querySelector(".announcement-banner");
  const bannerClose = document.querySelector(".announcement-banner__close");
  if (banner && bannerClose) {
    bannerClose.addEventListener("click", () => {
      banner.classList.add("is-hidden");
      document.documentElement.style.setProperty("--banner-h", "0px");
    });
  }

  // Sticky nav: solidify after scroll past 24px (small intent threshold)
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Hamburger overlay
  const ham = document.querySelector(".nav__hamburger");
  const overlay = document.querySelector(".nav-overlay");
  const overlayClose = document.querySelector(".nav-overlay__close");
  if (ham && overlay) {
    ham.addEventListener("click", () => {
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  }
  if (overlayClose && overlay) {
    overlayClose.addEventListener("click", () => {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  }

  // Wishlist toggle (top-right heart on product cards)
  document.querySelectorAll(".product-card__wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
    });
  });

  // Stagger entrance — IntersectionObserver flips .is-visible on cards
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  if (io) {
    document.querySelectorAll(".product-card").forEach(c => io.observe(c));
  } else {
    document.querySelectorAll(".product-card").forEach(c => c.classList.add("is-visible"));
  }
})();

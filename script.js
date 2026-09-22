// Navigation Elements
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuOverlay = document.getElementById("menuOverlay");

// Search Elements
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchCloseBtn = document.getElementById("searchCloseBtn");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Global Site Directory
const sitePages = [
  {
    title: "Home",
    category: "DEUS INDUSTRIES",
    url: "index.html",
    keywords: "home deus industries future"
  },
  {
    title: "Services",
    category: "WHAT WE DO",
    url: "services.html",
    keywords: "services branding marketing digital website design automation ai"
  },
  {
    title: "Work",
    category: "SELECTED WORK",
    url: "work.html",
    keywords: "work portfolio one stop pharmacy de wealth auto tech pvzzle"
  },
  {
    title: "Products",
    category: "DEUS PRODUCTS",
    url: "products.html",
    keywords: "products tools templates resources"
  },
  {
    title: "Deus Labs",
    category: "EXPERIMENTS",
    url: "labs.html",
    keywords: "labs experiments technology ideas"
  },
  {
    title: "About",
    category: "ABOUT DEUS",
    url: "about.html",
    keywords: "about company team agency ethos ecosystem"
  },
  {
    title: "Contact",
    category: "START A PROJECT",
    url: "contact.html",
    keywords: "contact email project hire whatsapp"
  }
];

// Menu Listeners (Safe guard checks)
if (menuBtn && menuOverlay) {
  menuBtn.addEventListener("click", () => {
    menuOverlay.classList.add("active");
  });
}

if (closeBtn && menuOverlay) {
  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });
}

// Search Listeners (Safe guard checks)
if (searchBtn && searchOverlay && searchInput) {
  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    setTimeout(() => {
      searchInput.focus();
    }, 300);
  });
}

if (searchCloseBtn && searchOverlay && searchInput) {
  searchCloseBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    searchInput.value = "";
  });
}

// Search Query Handler
if (searchInput && searchResults) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    if (query === "") {
      searchResults.innerHTML = `
        <p class="search-placeholder">
          Try: branding, marketing, website design, automation, work or contact.
        </p>
      `;
      return;
    }

    const matches = sitePages.filter((page) =>
      page.title.toLowerCase().includes(query) ||
      page.category.toLowerCase().includes(query) ||
      page.keywords.includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <p class="no-results">
          Nothing found yet. Try another word.
        </p>
      `;
      return;
    }

    searchResults.innerHTML = matches.map((page) => `
      <a href="${page.url}" class="search-result">
        <small>${page.category}</small>
        <h3>${page.title} →</h3>
      </a>
    `).join("");
  });
}
// =========================
// CONTACT MODAL HANDLER
// =========================
const contactModal = document.getElementById("contactModal");
const openModalBtns = document.querySelectorAll(".open-modal-btn");
const modalCloseBtn = document.getElementById("modalCloseBtn");

if (contactModal) {
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      contactModal.classList.add("active");
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      contactModal.classList.remove("active");
    });
  }

  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
    }
  });
}
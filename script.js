// =========================
// DOM ELEMENTS
// =========================
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuOverlay = document.getElementById("menuOverlay");

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchCloseBtn = document.getElementById("searchCloseBtn");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// =========================
// MENU FUNCTIONALITY
// =========================
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

// =========================
// SEARCH FUNCTIONALITY
// =========================
const searchIndex = [
  { title: "Home", url: "index.html", type: "PAGE", keywords: "home landing main agency" },
  { title: "Services", url: "services.html", type: "PAGE", keywords: "services web design development branding automation" },
  { title: "Our Work", url: "work.html", type: "PAGE", keywords: "work portfolio projects clients" },
  { title: "Deus Labs", url: "labs.html", type: "PAGE", keywords: "labs experiment innovation future" },
  { title: "Products", url: "products.html", type: "PAGE", keywords: "products templates digital tools" },
  { title: "About Us", url: "about.html", type: "PAGE", keywords: "about team studio vision" },
  { title: "Contact", url: "contact.html", type: "PAGE", keywords: "contact email form project start" },
  { title: "One Stop Pharmacy", url: "onestop.html", type: "CASE STUDY", keywords: "one stop pharmacy healthcare branding web design" },
  { title: "Pvzzle", url: "pvzzle.html", type: "CASE STUDY", keywords: "pvzzle software tech branding" },
  { title: "De Wealth Auto Tech", url: "dewealth.html", type: "CASE STUDY", keywords: "de wealth auto tech cars automotive" }
];

if (searchBtn && searchOverlay) {
  // Open Search
  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    setTimeout(() => searchInput.focus(), 100);
  });

  // Close Search
  searchCloseBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    searchInput.value = "";
    searchResults.innerHTML = '<p class="search-placeholder">Start typing to explore Deus Industries...</p>';
  });

  // Handle Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length === 0) {
        searchResults.innerHTML = '<p class="search-placeholder">Start typing to explore Deus Industries...</p>';
        return;
      }

      // Filter matches
      const matches = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.keywords.toLowerCase().includes(query)
      );

      // Render results
      if (matches.length > 0) {
        searchResults.innerHTML = matches.map(match => `
          <a href="${match.url}" class="search-result">
            <small>${match.type}</small>
            <h3>${match.title}</h3>
          </a>
        `).join('');
      } else {
        searchResults.innerHTML = `<p class="no-results">No results found for "${query}".</p>`;
      }
    });
  }
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
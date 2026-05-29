// MangaGeek Interactive Genre Page Logic

// Curated list of genres with descriptive keywords, icons, and HSL gradients
const genresList = [
    {
        key: "action",
        title: "Action & Shonen",
        description: "High-octane fights, super powers, and legendary hero journeys.",
        icon: "fas fa-fire",
        class: "genre-action",
        keywords: ["action", "shonen"]
    },
    {
        key: "mystery",
        title: "Mystery & Thriller",
        description: "Mind-bending suspense, detective work, and dark secrets.",
        icon: "fas fa-user-secret",
        class: "genre-mystery",
        keywords: ["thriller", "mystery"]
    },
    {
        key: "horror",
        title: "Horror & Novels",
        description: "Spooky atmospheres, psychological dread, and modern novels.",
        icon: "fas fa-ghost",
        class: "genre-horror",
        keywords: ["horror", "novel"]
    },
    {
        key: "strategy",
        title: "Strategy & Self-Help",
        description: "Deep mental chess, social laws, and psychological empowerment.",
        icon: "fas fa-chess-knight",
        class: "genre-strategy",
        keywords: ["strategy", "self-help"]
    },
    {
        key: "philosophy",
        title: "Philosophy & Classics",
        description: "Ancient tactical wisdom, war philosophy, and historical teachings.",
        icon: "fas fa-monument",
        class: "genre-philosophy",
        keywords: ["philosophy"]
    },
    {
        key: "spiritual",
        title: "Spiritual & Scriptures",
        description: "Sacred texts, holy scriptures, and timeless spiritual guidance.",
        icon: "fas fa-bible",
        class: "genre-spiritual",
        keywords: ["spiritual", "scripture"]
    }
];

// Calculate how many books match a genre's keywords (fully dynamic!)
function getBooksCountForGenre(keywords) {
    return mockMangaData.filter(manga => 
        keywords.some(keyword => manga.genre.toLowerCase().includes(keyword))
    ).length;
}

// Retrieve selected genre key from URL
function getGenreFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('g') || '';
}

// Render the clickable genre cards
function renderGenreBoxes(activeKey) {
    const container = document.getElementById('genresGridContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    genresList.forEach(genre => {
        const count = getBooksCountForGenre(genre.keywords);
        const isActive = genre.key === activeKey;
        
        container.innerHTML += `
            <div class="genre-box-card ${genre.class} ${isActive ? 'active' : ''}" data-key="${genre.key}">
                <div class="genre-card-header">
                    <i class="${genre.icon} genre-icon"></i>
                    <span class="genre-count-badge">${count} ${count === 1 ? 'Book' : 'Books'}</span>
                </div>
                <div class="genre-card-info">
                    <h3>${genre.title}</h3>
                    <p>${genre.description}</p>
                </div>
            </div>
        `;
    });
    
    // Add click listeners to all box cards
    document.querySelectorAll('.genre-box-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-key');
            selectGenre(key);
        });
    });
}

// Filter and render publications under the selected genre
function selectGenre(key) {
    const resultsGrid = document.getElementById('genreResultsGrid');
    const resultsHeader = document.getElementById('genreResultsHeader');
    
    if (!resultsGrid || !resultsHeader) return;
    
    // Re-render genre cards with active state
    renderGenreBoxes(key);
    
    if (!key) {
        // Default State: Render all catalog items
        resultsHeader.innerHTML = `Showing All Publications <span>${mockMangaData.length} total</span>`;
        resultsGrid.innerHTML = '';
        mockMangaData.forEach(manga => {
            resultsGrid.innerHTML += createMangaCard(manga, false);
        });
        return;
    }
    
    const activeGenre = genresList.find(g => g.key === key);
    if (!activeGenre) return;
    
    // Update URL query parameters for modern routing/bookmarking
    const newUrl = `${window.location.pathname}?g=${key}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    
    // Filter the catalog
    const filteredManga = mockMangaData.filter(manga => 
        activeGenre.keywords.some(keyword => manga.genre.toLowerCase().includes(keyword))
    );
    
    // Update results title
    resultsHeader.innerHTML = `Category: ${activeGenre.title} <span>${filteredManga.length} ${filteredManga.length === 1 ? 'publication' : 'publications'}</span>`;
    
    // Inject filtered cards
    resultsGrid.innerHTML = '';
    if (filteredManga.length > 0) {
        filteredManga.forEach(manga => {
            // Re-use core card generator from script.js
            resultsGrid.innerHTML += createMangaCard(manga, false);
        });
    } else {
        resultsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
                <i class="fas fa-book-open" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p style="font-size: 1.2rem; font-weight: 600;">No publications found under this category</p>
            </div>
        `;
    }
    
    // Smooth scroll down to results container if user clicked on a card
    const rect = resultsHeader.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;
    // Don't auto-scroll on initial load, only on manual click
    window.scrollTo({
        top: window.scrollY + rect.top - (isMobile ? 80 : 100),
        behavior: 'auto'
    });
}

// Initialize Genre page on load
document.addEventListener('DOMContentLoaded', () => {
    const initialGenre = getGenreFromUrl().toLowerCase();
    
    // Check if the parameter is a valid genre key
    const isValidKey = genresList.some(g => g.key === initialGenre);
    
    if (isValidKey) {
        selectGenre(initialGenre);
    } else {
        selectGenre(''); // default state - show all
    }
    
    // Search redirects support inside genres page navbar
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.trim();
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });

    const searchBtn = document.querySelector('.search-bar button');
    searchBtn?.addEventListener('click', () => {
        if (searchInput) {
            const query = searchInput.value.trim();
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });
});

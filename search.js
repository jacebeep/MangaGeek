// MangaGeek Dedicated Search Logic

// Parse search term from URL query parameter
function getSearchQueryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
}

// Perform advanced matching and similarity suggestions on search.html
function executeSearch(query) {
    const resultsGrid = document.getElementById('searchResultsGrid');
    const suggestionContainer = document.getElementById('searchPageSuggestion');
    const resultsCountElement = document.getElementById('resultsCount');

    if (!resultsGrid) return;

    resultsGrid.innerHTML = '';
    if (suggestionContainer) suggestionContainer.innerHTML = '';

    const cleanQuery = query.trim().toLowerCase();

    if (cleanQuery === '') {
        // If empty, show all available catalog items
        mockMangaData.forEach(manga => {
            resultsGrid.innerHTML += createMangaCard(manga, false);
        });
        if (resultsCountElement) {
            resultsCountElement.innerHTML = `Showing all <span>${mockMangaData.length}</span> available publications`;
        }
        return;
    }

    // Filter using title, genre, and aliases from mockMangaData (defined in script.js)
    const filteredManga = mockMangaData.filter(manga => 
        manga.title.toLowerCase().includes(cleanQuery) || 
        manga.genre.toLowerCase().includes(cleanQuery) ||
        (manga.aliases && manga.aliases.some(alias => alias.toLowerCase().includes(cleanQuery)))
    );

    // Update count header
    if (resultsCountElement) {
        resultsCountElement.innerHTML = `Found <span>${filteredManga.length}</span> ${filteredManga.length === 1 ? 'masterpiece' : 'masterpieces'} matching "<span>${query}</span>"`;
    }

    if (filteredManga.length > 0) {
        filteredManga.forEach(manga => {
            resultsGrid.innerHTML += createMangaCard(manga, false);
        });
    } else {
        // Display nice helper and Levenshtein suggestion if no direct matches
        resultsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
                <i class="fas fa-search-minus" style="font-size: 4.5rem; margin-bottom: 1.5rem; color: rgba(255, 215, 0, 0.2); filter: drop-shadow(0 0 10px rgba(255,215,0,0.1));"></i>
                <p style="font-size: 1.4rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">No Exact Matches Found</p>
                <p style="font-size: 1rem; opacity: 0.7; max-width: 500px; margin: 0 auto;">We couldn't find an exact match for your search. Try checking your spelling or explore suggested items.</p>
            </div>
        `;

        // findBestMatch is available in script.js, but let's redefine or make sure it is accessible
        const { book, score } = findBestMatch(cleanQuery);
        if (book && score > 0.35 && suggestionContainer) {
            suggestionContainer.innerHTML = `
                <div class="search-suggestion" style="margin: 0 auto 3rem;">
                    <i class="fas fa-lightbulb"></i>
                    <span>Did you mean: <strong class="suggestion-link" onclick="window.applySuggestion('${book.title.replace(/'/g, "\\'")}')">${book.title}</strong>?</span>
                </div>
            `;
        }
    }
}

// Override globally exposed suggestion applicator to fit the search page
window.applySuggestion = function(title) {
    const pageInput = document.getElementById('pageSearchInput');
    const navInput = document.getElementById('navbarSearchInput');
    if (pageInput) pageInput.value = title;
    if (navInput) navInput.value = title;
    
    // Update URL query parameter without reloading page for a premium responsive single-page feel!
    const newUrl = `${window.location.pathname}?q=${encodeURIComponent(title)}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    
    executeSearch(title);
};

// Initialize search page logic
document.addEventListener('DOMContentLoaded', () => {
    const initialQuery = getSearchQueryFromUrl();
    
    const pageInput = document.getElementById('pageSearchInput');
    const navInput = document.getElementById('navbarSearchInput');

    // Populate search boxes with URL query on load
    if (initialQuery) {
        if (pageInput) pageInput.value = initialQuery;
        if (navInput) navInput.value = initialQuery;
    }

    // Execute the search on page load
    executeSearch(initialQuery);

    // Sync input handlers for page search input
    pageInput?.addEventListener('input', (e) => {
        const query = e.target.value;
        if (navInput) navInput.value = query;
        executeSearch(query);
    });

    // Sync input handlers for navbar search input
    navInput?.addEventListener('input', (e) => {
        const query = e.target.value;
        if (pageInput) pageInput.value = query;
        executeSearch(query);
    });

    // Trigger keypress listener for pressing enter to submit and keep it in historical URL state
    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value;
            const newUrl = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        }
    };
    pageInput?.addEventListener('keypress', handleEnterPress);
    navInput?.addEventListener('keypress', handleEnterPress);

    // Set up click search buttons
    document.getElementById('pageSearchBtn')?.addEventListener('click', () => {
        if (pageInput) {
            const query = pageInput.value;
            const newUrl = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
            executeSearch(query);
        }
    });

    document.getElementById('navbarSearchBtn')?.addEventListener('click', () => {
        if (navInput) {
            const query = navInput.value;
            const newUrl = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
            executeSearch(query);
        }
    });
});

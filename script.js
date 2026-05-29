// MangaGeek Logic

// Placeholder data - replace these image URLs with your local 'assets/images/filename.jpg' once you upload them!
const mockMangaData = [
    {
        id: 9,
        mangaId: "dragon-ball-super",
        title: "Dragon Ball Super",
        image: "assets/images/Dragon ball super/Chapter 1 cover.png",
        genre: "Action / Shonen",
        latestChapter: "Ch. 25",
        trending: true,
        aliases: ["dbs", "goku", "dragonball", "vegeta", "saiyan"]
    },
    {
        id: 10,
        mangaId: "death-note",
        title: "Death Note Volume 1",
        image: "assets/images/Death note/Page_001.jpg",
        genre: "Thriller / Mystery",
        latestChapter: "Ch. 17",
        trending: true,
        startChapter: 1,
        aliases: ["deathnote", "kira", "l", "shinigami", "ryuk"]
    },
    {
        id: 11,
        mangaId: "death-note",
        title: "Death Note Volume 2",
        image: "assets/images/Death note Volume 2/Page_Vol2_001.jpg",
        genre: "Thriller / Mystery",
        latestChapter: "Ch. 34",
        trending: true,
        startChapter: 18,
        aliases: ["deathnote", "kira", "l", "shinigami", "ryuk"]
    },
    {
        id: 12,
        mangaId: "death-note",
        title: "Death Note Volume 3",
        image: "assets/images/Deathh note volume 3/Page_Vol3_001.jpg",
        genre: "Thriller / Mystery",
        latestChapter: "Ch. 66",
        trending: true,
        startChapter: 35,
        aliases: ["deathnote", "kira", "l", "shinigami", "ryuk"]
    },
    {
        id: 13,
        mangaId: "stephen-king-it",
        title: "IT (Stephen King)",
        image: "assets/images/it_cover.png",
        genre: "Horror / Novel",
        latestChapter: "Full Novel",
        trending: true,
        startChapter: 1,
        aliases: ["it", "pennywise", "clown", "stephen king", "horror"]
    },
    {
        id: 14,
        mangaId: "the-48-laws-of-power",
        title: "48 Laws of Power",
        image: "assets/images/laws_cover.png",
        genre: "Strategy / Self-Help",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["power", "48 laws", "greene", "manipulation", "control"]
    },
    {
        id: 15,
        mangaId: "the-art-of-war",
        title: "The Art of War",
        image: "assets/images/art_cover.png",
        genre: "Philosophy / Strategy",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["art of war", "sun tzu", "war", "suntzu", "strategy"]
    },
    {
        id: 16,
        mangaId: "holy-bible-kjv",
        title: "Holy Bible (KJV)",
        image: "assets/images/bible_cover.png",
        genre: "Spiritual / Scripture",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["bible", "jesus", "god", "christ", "lord", "holy bible", "scripture"]
    },
    {
        id: 17,
        mangaId: "rich-dad-poor-dad",
        title: "Rich Dad Poor Dad",
        image: "assets/images/rich_dad_cover.png",
        genre: "Strategy / Self-Help",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["rich dad", "poor dad", "kiyosaki", "finance", "money", "wealth", "business"]
    },
    {
        id: 18,
        mangaId: "spiderman-3",
        title: "The Amazing Spider-Man",
        image: "assets/images/Spiderman 3/Page_001.jpg",
        genre: "Action / Superhero",
        latestChapter: "Ch. 3",
        trending: true,
        startChapter: 1,
        aliases: ["spiderman", "peter parker", "marvel", "spider-man", "webslinger", "hero"]
    },
    {
        id: 19,
        mangaId: "spiderman-701",
        title: "The Amazing Spider-Man #701",
        image: "assets/images/Spiderman/Page_001.jpg",
        genre: "Action / Superhero",
        latestChapter: "Ch. 2",
        trending: true,
        startChapter: 1,
        aliases: ["spiderman", "peter parker", "marvel", "spider-man", "webslinger", "hero", "701"]
    },
    {
        id: 20,
        mangaId: "alice-in-wonderland",
        title: "Alice's Adventures in Wonderland",
        image: "assets/images/alice_in_wonderland_cover.png",
        genre: "Fantasy / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["alice", "wonderland", "rabbit", "cheshire", "carroll", "classic"]
    },
    {
        id: 21,
        mangaId: "pride-and-prejudice",
        title: "Pride and Prejudice",
        image: "assets/images/pride_and_prejudice_cover.png",
        genre: "Romance / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["pride", "prejudice", "darcy", "elizabeth", "bennet", "austen", "classic"]
    },
    {
        id: 22,
        mangaId: "frankenstein",
        title: "Frankenstein",
        image: "assets/images/frankenstein_cover.png",
        genre: "Horror / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["frankenstein", "monster", "victor", "shelley", "gothic", "classic"]
    },
    {
        id: 23,
        mangaId: "sherlock-holmes",
        title: "The Adventures of Sherlock Holmes",
        image: "assets/images/sherlock_holmes_cover.png",
        genre: "Mystery / Detective",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["sherlock", "holmes", "watson", "doyle", "baker street", "mystery", "classic"]
    },
    {
        id: 24,
        mangaId: "dracula",
        title: "Dracula",
        image: "assets/images/dracula_cover.png",
        genre: "Horror / Mystery",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["dracula", "vampire", "harker", "van helsing", "stoker", "classic"]
    },
    {
        id: 25,
        mangaId: "great-gatsby",
        title: "The Great Gatsby",
        image: "assets/images/great_gatsby_cover.png",
        genre: "Drama / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["gatsby", "nick carraway", "daisy", "fitzgerald", "west egg", "classic"]
    },
    {
        id: 26,
        mangaId: "metamorphosis",
        title: "The Metamorphosis",
        image: "assets/images/metamorphosis_cover.png",
        genre: "Philosophy / Classic",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["metamorphosis", "samsa", "gregor", "kafka", "bug", "classic"]
    },
    {
        id: 27,
        mangaId: "tale-of-two-cities",
        title: "A Tale of Two Cities",
        image: "assets/images/tale_of_two_cities_cover.png",
        genre: "History / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["two cities", "dickens", "sydney carton", "darney", "london", "paris", "classic"]
    },
    {
        id: 28,
        mangaId: "moby-dick",
        title: "Moby Dick",
        image: "assets/images/moby_dick_cover.png",
        genre: "Adventure / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["moby", "dick", "ishmael", "ahab", "whale", "melville", "classic"]
    },
    {
        id: 29,
        mangaId: "picture-of-dorian-gray",
        title: "The Picture of Dorian Gray",
        image: "assets/images/picture_of_dorian_gray_cover.png",
        genre: "Philosophy / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["dorian", "gray", "wilde", "portrait", "lord henry", "basil", "classic"]
    },
    {
        id: 30,
        mangaId: "time-machine",
        title: "The Time Machine",
        image: "assets/images/time_machine_cover.png",
        genre: "Sci-Fi / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["time machine", "wells", "traveler", "morlocks", "eloi", "classic"]
    },
    {
        id: 31,
        mangaId: "war-of-the-worlds",
        title: "The War of the Worlds",
        image: "assets/images/war_of_the_worlds_cover.png",
        genre: "Sci-Fi / Action",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["war worlds", "martians", "tripod", "wells", "invasion", "classic"]
    },
    {
        id: 32,
        mangaId: "romeo-and-juliet",
        title: "Romeo and Juliet",
        image: "assets/images/romeo_and_juliet_cover.png",
        genre: "Drama / Classic / Philosophy",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["romeo", "juliet", "capulet", "montague", "shakespeare", "verona", "classic"]
    },
    {
        id: 33,
        mangaId: "heart-of-darkness",
        title: "Heart of Darkness",
        image: "assets/images/heart_of_darkness_cover.png",
        genre: "Adventure / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["darkness", "conrad", "marlow", "kurtz", "congo", "classic"]
    },
    {
        id: 34,
        mangaId: "treasure-island",
        title: "Treasure Island",
        image: "assets/images/treasure_island_cover.png",
        genre: "Adventure / Action",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["treasure", "island", "jim hawkins", "long john silver", "pirate", "stevenson", "classic"]
    },
    {
        id: 35,
        mangaId: "dr-jekyll-and-mr-hyde",
        title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
        image: "assets/images/dr_jekyll_and_mr_hyde_cover.png",
        genre: "Horror / Mystery",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["jekyll", "hyde", "duality", "stevenson", "utterson", "classic"]
    },
    {
        id: 36,
        mangaId: "grimms-fairy-tales",
        title: "Grimms' Fairy Tales",
        image: "assets/images/grimms_fairy_tales_cover.png",
        genre: "Fantasy / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["grimm", "fairy tales", "cinderella", "rapunzel", "hansel", "gretel", "classic"]
    },
    {
        id: 37,
        mangaId: "peter-pan",
        title: "Peter Pan",
        image: "assets/images/peter_pan_cover.png",
        genre: "Fantasy / Novel",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["peter", "pan", "wendy", "hook", "neverland", "tinkerbell", "classic"]
    },
    {
        id: 38,
        mangaId: "the-odyssey",
        title: "The Odyssey",
        image: "assets/images/the_odyssey_cover.png",
        genre: "Philosophy / Epic",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["odyssey", "homer", "odysseus", "ulysses", "epic", "greek", "classic"]
    },
    {
        id: 39,
        mangaId: "the-iliad",
        title: "The Iliad",
        image: "assets/images/the_iliad_cover.png",
        genre: "Philosophy / Epic / Action",
        latestChapter: "Full Book",
        trending: true,
        startChapter: 1,
        aliases: ["iliad", "homer", "achilles", "troy", "hector", "greek", "war", "classic"]
    }
];

function createMangaCard(manga, isPopular = false) {
    const startCh = manga.startChapter || 1;
    const starBadge = isPopular ? `<div class="popular-star-badge"><i class="fas fa-star"></i></div>` : '';
    return `
        <a href="reader.html?manga=${manga.mangaId}&chapter=${startCh}" class="manga-card ${isPopular ? 'featured-card' : ''}" style="display: block;">
            <div class="card-image-container">
                ${starBadge}
                <img src="${manga.image}" alt="${manga.title}">
                <div class="chapter-badge">${manga.latestChapter}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${manga.title}</h3>
                <p class="card-genre">${manga.genre}</p>
            </div>
        </a>
    `;
}

function renderContinueReading() {
    const continueSection = document.getElementById('continueSection');
    const continueGrid = document.getElementById('continueGrid');
    
    if (!continueSection || !continueGrid) return;
    
    const progress = JSON.parse(localStorage.getItem('mangageek_progress')) || {};
    const entries = Object.entries(progress);
    
    if (entries.length === 0) {
        continueSection.style.display = 'none';
        return;
    }
    
    // Sort by timestamp descending (most recently read first)
    entries.sort((a, b) => (b[1].timestamp || 0) - (a[1].timestamp || 0));
    
    continueSection.style.display = 'block';
    continueGrid.innerHTML = '';
    
    entries.forEach(([mangaId, record]) => {
        const manga = mockMangaData.find(m => m.mangaId === mangaId);
        if (!manga) return;
        
        const totalPages = record.totalPages || 10;
        const page = Math.min(record.page || 1, totalPages);
        const percentage = Math.round((page / totalPages) * 100);
        
        continueGrid.innerHTML += `
            <a href="reader.html?manga=${mangaId}&chapter=${record.chapter}&page=${page}" class="manga-card" style="display: block; position: relative;">
                <div class="card-image-container">
                    <div class="bookmark-badge"><i class="fas fa-bookmark"></i> Bookmark</div>
                    <img src="${manga.image}" alt="${manga.title}">
                    <div class="chapter-badge">${record.chapterTitle || ('Ch. ' + record.chapter)}</div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${manga.title}</h3>
                    <p class="card-genre">${manga.genre}</p>
                    <div class="card-progress-text">
                        <span>Pg. ${page} of ${totalPages}</span>
                        <span>${percentage}%</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${percentage}%"></div>
                    </div>
                </div>
            </a>
        `;
    });
}

function renderManga() {
    const popularGrid = document.getElementById('popularGrid');
    const latestGrid = document.getElementById('latestGrid');
    
    // Clear existing content
    if(popularGrid) popularGrid.innerHTML = '';
    if(latestGrid) latestGrid.innerHTML = '';

    // Most Popular Selection: Bible is ALWAYS first, followed by 5 random books
    const bible = mockMangaData.find(m => m.mangaId === 'holy-bible-kjv');
    const others = mockMangaData.filter(m => m.mangaId !== 'holy-bible-kjv');
    
    // Shuffle the rest of the catalog randomly
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random());
    const selectedOthers = shuffledOthers.slice(0, 5);
    
    const popularManga = [];
    if (bible) popularManga.push(bible);
    popularManga.push(...selectedOthers);

    // Render Most Popular (6 books total, Bible first, with shining gold star)
    popularManga.forEach(manga => {
        if(popularGrid) popularGrid.innerHTML += createMangaCard(manga, true);
    });

    // Render Latest Updates (all books, without star)
    mockMangaData.forEach(manga => {
        if(latestGrid) latestGrid.innerHTML += createMangaCard(manga, false);
    });
}

// Levenshtein Distance for string similarity
function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Find closest matching book from mockMangaData using titles and aliases
function findBestMatch(term) {
    let bestBook = null;
    let bestScore = -1;

    mockMangaData.forEach(manga => {
        const candidates = [manga.title, ...(manga.aliases || [])];
        candidates.forEach(cand => {
            const c = cand.toLowerCase();
            let score = 0;

            if (c.includes(term) || term.includes(c)) {
                score = Math.max(term.length / c.length, c.length / term.length) * 0.95;
            } else {
                const dist = levenshteinDistance(term, c);
                const maxLen = Math.max(term.length, c.length);
                score = 1 - (dist / maxLen);
            }

            if (score > bestScore) {
                bestScore = score;
                bestBook = manga;
            }
        });
    });

    return { book: bestBook, score: bestScore };
}

// Perform search based on user input
function performSearch(searchTerm) {
    const latestGrid = document.getElementById('latestGrid');
    const suggestionContainer = document.getElementById('searchSuggestionContainer');
    
    if (!latestGrid) return;

    latestGrid.innerHTML = '';
    if (suggestionContainer) suggestionContainer.innerHTML = '';

    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (normalizedTerm === '') {
        // If empty, render all books
        mockMangaData.forEach(manga => {
            latestGrid.innerHTML += createMangaCard(manga, false);
        });
        return;
    }

    // Filter using title, genre, and aliases
    const filteredManga = mockMangaData.filter(manga => 
        manga.title.toLowerCase().includes(normalizedTerm) || 
        manga.genre.toLowerCase().includes(normalizedTerm) ||
        (manga.aliases && manga.aliases.some(alias => alias.toLowerCase().includes(normalizedTerm)))
    );

    if (filteredManga.length > 0) {
        filteredManga.forEach(manga => {
            latestGrid.innerHTML += createMangaCard(manga, false);
        });
    } else {
        // No direct match. Display helper and try to find a smart suggestion
        latestGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
                <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 1rem; color: rgba(255,255,255,0.2);"></i>
                <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">No exact matches found</p>
                <p style="font-size: 0.95rem; opacity: 0.7;">Check your spelling or try searching for another masterpiece.</p>
            </div>
        `;

        const { book, score } = findBestMatch(normalizedTerm);
        if (book && score > 0.35 && suggestionContainer) {
            suggestionContainer.innerHTML = `
                <div class="search-suggestion">
                    <i class="fas fa-lightbulb"></i>
                    <span>Did you mean: <strong class="suggestion-link" onclick="window.applySuggestion('${book.title.replace(/'/g, "\\'")}')">${book.title}</strong>?</span>
                </div>
            `;
        }
    }
}

// Globally expose suggestion applicator
window.applySuggestion = function(title) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = title;
    }
    performSearch(title);
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderContinueReading();
    renderManga();

    // Set up search bar redirect listener (redirects to search.html)
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

    // Set up 'Read Now' button to instantly open the Holy Bible (KJV)
    document.querySelector('.btn-primary')?.addEventListener('click', () => {
        window.location.href = 'reader.html?manga=holy-bible-kjv&chapter=1';
    });
});

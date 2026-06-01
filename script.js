// MangaGeek Logic

// Catalog data expanded with 20 new legendary titles with popularity, ratings, and reads statistics
const mockMangaData = [
    {
        id: 9,
        mangaId: "dragon-ball-super",
        title: "Dragon Ball Super",
        image: "assets/images/Dragon ball super/Chapter 1 cover.png",
        genre: "Action / Shonen",
        latestChapter: "Ch. 25",
        trending: true,
        popularity: 98,
        rating: 4.9,
        views: "124.5k",
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
        popularity: 95,
        rating: 4.8,
        views: "98.2k",
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
        popularity: 94,
        rating: 4.8,
        views: "95.1k",
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
        popularity: 93,
        rating: 4.7,
        views: "92.0k",
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
        popularity: 75,
        rating: 4.5,
        views: "41.3k",
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
        popularity: 82,
        rating: 4.6,
        views: "64.8k",
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
        popularity: 86,
        rating: 4.7,
        views: "78.2k",
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
        popularity: 99,
        rating: 4.9,
        views: "500k",
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
        popularity: 80,
        rating: 4.4,
        views: "52.4k",
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
        popularity: 72,
        rating: 4.5,
        views: "38.1k",
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
        popularity: 70,
        rating: 4.4,
        views: "34.5k",
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
        popularity: 65,
        rating: 4.3,
        views: "29.4k",
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
        popularity: 68,
        rating: 4.5,
        views: "31.2k",
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
        popularity: 62,
        rating: 4.2,
        views: "24.5k",
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
        popularity: 78,
        rating: 4.6,
        views: "45.8k",
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
        popularity: 66,
        rating: 4.4,
        views: "28.1k",
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
        popularity: 71,
        rating: 4.5,
        views: "33.7k",
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
        popularity: 73,
        rating: 4.6,
        views: "35.1k",
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
        popularity: 60,
        rating: 4.1,
        views: "19.8k",
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
        popularity: 58,
        rating: 4.0,
        views: "18.3k",
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
        popularity: 70,
        rating: 4.5,
        views: "32.0k",
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
        popularity: 57,
        rating: 4.1,
        views: "16.4k",
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
        popularity: 61,
        rating: 4.2,
        views: "21.0k",
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
        popularity: 67,
        rating: 4.3,
        views: "26.5k",
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
        popularity: 55,
        rating: 4.0,
        views: "14.2k",
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
        popularity: 63,
        rating: 4.3,
        views: "22.5k",
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
        popularity: 64,
        rating: 4.3,
        views: "23.1k",
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
        popularity: 59,
        rating: 4.1,
        views: "17.8k",
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
        popularity: 62,
        rating: 4.2,
        views: "20.1k",
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
        popularity: 76,
        rating: 4.6,
        views: "41.9k",
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
        popularity: 74,
        rating: 4.5,
        views: "39.4k",
        aliases: ["iliad", "homer", "achilles", "troy", "hector", "greek", "war", "classic"]
    },
    // Adding 20 Legendary Manga Titles with complete metadata & dynamic fallbacks
    {
        id: 40,
        mangaId: "one-piece",
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
        genre: "Action / Shonen",
        latestChapter: "Ch. 1080",
        trending: true,
        popularity: 100,
        rating: 4.9,
        views: "152.0k",
        aliases: ["onepiece", "luffy", "zoro", "pirate", "strawhat", "oda"]
    },
    {
        id: 41,
        mangaId: "naruto",
        title: "Naruto",
        image: "https://cdn.myanimelist.net/images/manga/3/117681.jpg",
        genre: "Action / Shonen",
        latestChapter: "Ch. 700",
        trending: true,
        popularity: 92,
        rating: 4.7,
        views: "110.4k",
        aliases: ["naruto", "sasuke", "ninja", "hokage", "uzumaki", "kishimoto"]
    },
    {
        id: 42,
        mangaId: "attack-on-titan",
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/manga/2/37846.jpg",
        genre: "Drama / Thriller",
        latestChapter: "Ch. 139",
        trending: true,
        popularity: 94,
        rating: 4.8,
        views: "104.1k",
        aliases: ["aot", "shingeki", "eren", "mikasa", "titan", "levi"]
    },
    {
        id: 43,
        mangaId: "demon-slayer",
        title: "Demon Slayer",
        image: "https://cdn.myanimelist.net/images/manga/3/179023.jpg",
        genre: "Action / Shonen",
        latestChapter: "Ch. 205",
        trending: true,
        popularity: 96,
        rating: 4.8,
        views: "115.8k",
        aliases: ["kimetsu", "tanjiro", "nezuko", "slayer", "hashira", "muzan"]
    },
    {
        id: 44,
        mangaId: "jujutsu-kaisen",
        title: "Jujutsu Kaisen",
        image: "https://cdn.myanimelist.net/images/manga/3/216393.jpg",
        genre: "Action / Shonen",
        latestChapter: "Ch. 220",
        trending: true,
        popularity: 91,
        rating: 4.7,
        views: "95.3k",
        aliases: ["jjk", "itadori", "gojo", "sukuna", "curse", "sorcerer"]
    },
    {
        id: 45,
        mangaId: "my-hero-academia",
        title: "My Hero Academia",
        image: "https://cdn.myanimelist.net/images/manga/1/139265.jpg",
        genre: "Action / Shonen",
        latestChapter: "Ch. 385",
        trending: true,
        popularity: 89,
        rating: 4.6,
        views: "88.2k",
        aliases: ["mha", "bnha", "deku", "bakugo", "allmight", "hero"]
    },
    {
        id: 46,
        mangaId: "chainsaw-man",
        title: "Chainsaw Man",
        image: "https://cdn.myanimelist.net/images/manga/3/216464.jpg",
        genre: "Action / Thriller",
        latestChapter: "Ch. 125",
        trending: true,
        popularity: 90,
        rating: 4.7,
        views: "92.1k",
        aliases: ["csm", "denji", "power", "makima", "pochita", "devil"]
    },
    {
        id: 47,
        mangaId: "bleach",
        title: "Bleach",
        image: "https://cdn.myanimelist.net/images/manga/3/182510.jpg",
        genre: "Action / Shonen",
        latestChapter: "Ch. 686",
        trending: true,
        popularity: 87,
        rating: 4.6,
        views: "85.7k",
        aliases: ["ichigo", "rukia", "shinigami", "soul society", "aizen"]
    },
    {
        id: 48,
        mangaId: "hunter-x-hunter",
        title: "Hunter x Hunter",
        image: "https://cdn.myanimelist.net/images/manga/2/253111.jpg",
        genre: "Action / Adventure",
        latestChapter: "Ch. 400",
        trending: true,
        popularity: 93,
        rating: 4.9,
        views: "82.3k",
        aliases: ["hxh", "gon", "killua", "kurapika", "nen", "togashi"]
    },
    {
        id: 50,
        mangaId: "fullmetal-alchemist",
        title: "Fullmetal Alchemist",
        image: "https://cdn.myanimelist.net/images/manga/3/243675.jpg",
        genre: "Action / Philosophy",
        latestChapter: "Ch. 108",
        trending: true,
        popularity: 91,
        rating: 4.9,
        views: "79.1k",
        aliases: ["fma", "fmab", "edward", "elric", "alphonse", "alchemy"]
    },
    {
        id: 50,
        mangaId: "tokyo-ghoul",
        title: "Tokyo Ghoul",
        image: "https://cdn.myanimelist.net/images/manga/3/122043.jpg",
        genre: "Horror / Thriller",
        latestChapter: "Ch. 143",
        trending: true,
        popularity: 88,
        rating: 4.7,
        views: "76.5k",
        aliases: ["ghoul", "kaneki", "touka", "anteiku", "ccg"]
    },
    {
        id: 51,
        mangaId: "one-punch-man",
        title: "One Punch Man",
        image: "https://cdn.myanimelist.net/images/manga/3/80661.jpg",
        genre: "Action / Comedy",
        latestChapter: "Ch. 180",
        trending: true,
        popularity: 92,
        rating: 4.8,
        views: "90.4k",
        aliases: ["opm", "saitama", "genos", "garou", "hero", "one"]
    },
    {
        id: 52,
        mangaId: "solo-leveling",
        title: "Solo Leveling",
        image: "https://cdn.myanimelist.net/images/manga/3/222295.jpg",
        genre: "Action / Fantasy",
        latestChapter: "Ch. 179",
        trending: true,
        popularity: 97,
        rating: 4.8,
        views: "130.2k",
        aliases: ["sololeveling", "jinwoo", "hunter", "shadow", "necromancer"]
    },
    {
        id: 53,
        mangaId: "berserk",
        title: "Berserk",
        image: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
        genre: "Action / Horror / Philosophy",
        latestChapter: "Ch. 370",
        trending: true,
        popularity: 90,
        rating: 4.9,
        views: "72.8k",
        aliases: ["guts", "griffith", "casca", "behelit", "miura", "eclipse"]
    },
    {
        id: 54,
        mangaId: "monster",
        title: "Monster",
        image: "https://cdn.myanimelist.net/images/manga/3/258224.jpg",
        genre: "Thriller / Mystery",
        latestChapter: "Ch. 162",
        trending: true,
        popularity: 84,
        rating: 4.8,
        views: "55.4k",
        aliases: ["tenma", "johan", "liebert", "urazawa", "mystery"]
    },
    {
        id: 55,
        mangaId: "jojo-bizarre-adventure",
        title: "JoJo's Bizarre Adventure",
        image: "https://cdn.myanimelist.net/images/manga/3/240562.jpg",
        genre: "Action / Fantasy",
        latestChapter: "Ch. 99",
        trending: true,
        popularity: 86,
        rating: 4.7,
        views: "68.2k",
        aliases: ["jojo", "jotaro", "dio", "stand", "araki", "dio brando"]
    },
    {
        id: 56,
        mangaId: "vagabond",
        title: "Vagabond",
        image: "https://cdn.myanimelist.net/images/manga/1/259163.jpg",
        genre: "Philosophy / Drama / History",
        latestChapter: "Ch. 327",
        trending: true,
        popularity: 83,
        rating: 4.9,
        views: "48.9k",
        aliases: ["musashi", "takehiko", "inoue", "samurai", "sword"]
    },
    {
        id: 57,
        mangaId: "vinland-saga",
        title: "Vinland Saga",
        image: "https://cdn.myanimelist.net/images/manga/2/215848.jpg",
        genre: "Action / History / Philosophy",
        latestChapter: "Ch. 200",
        trending: true,
        popularity: 85,
        rating: 4.8,
        views: "52.4k",
        aliases: ["thorfinn", "askeladd", "viking", "vinland", "saga"]
    },
    {
        id: 58,
        mangaId: "slam-dunk",
        title: "Slam Dunk",
        image: "https://cdn.myanimelist.net/images/manga/2/258745.jpg",
        genre: "Drama / Sport",
        latestChapter: "Ch. 276",
        trending: true,
        popularity: 82,
        rating: 4.8,
        views: "45.1k",
        aliases: ["sakuragi", "rukawa", "basketball", "shohoku", "inoue"]
    },
    {
        id: 59,
        mangaId: "haikyuu",
        title: "Haikyuu!!",
        image: "https://cdn.myanimelist.net/images/manga/2/258756.jpg",
        genre: "Drama / Sport",
        latestChapter: "Ch. 402",
        trending: true,
        popularity: 86,
        rating: 4.8,
        views: "58.7k",
        aliases: ["hinata", "kageyama", "volleyball", "karasuno", "spiker"]
    }
];

// Fallback error-handling dynamic gradient generator for manga cover cards
function handleImageError(imgElement, title, genre) {
    const colors = getGenreColors(genre);
    const parent = imgElement.parentElement;
    if (!parent) return;

    // Create container
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'manga-cover-fallback';
    fallbackDiv.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
    fallbackDiv.innerHTML = `
        <div class="fallback-glass-overlay">
            <div class="fallback-genre-icon"><i class="${colors.icon}"></i></div>
            <div class="fallback-title">${title}</div>
            <div class="fallback-subtitle">${genre}</div>
        </div>
    `;

    // Hide original image and render the fallback card
    imgElement.style.display = 'none';
    parent.appendChild(fallbackDiv);
}

// Categorized theme presets for cover fallbacks
function getGenreColors(genre) {
    const g = genre.toLowerCase();
    if (g.includes('action') || g.includes('shonen')) {
        return { primary: '#ff416c', secondary: '#ff4b2b', icon: 'fas fa-fire' };
    } else if (g.includes('thriller') || g.includes('mystery') || g.includes('detective')) {
        return { primary: '#8a2387', secondary: '#e94057', icon: 'fas fa-user-secret' };
    } else if (g.includes('horror')) {
        return { primary: '#11998e', secondary: '#38ef7d', icon: 'fas fa-ghost' };
    } else if (g.includes('strategy') || g.includes('self-help')) {
        return { primary: '#02aab0', secondary: '#00cdac', icon: 'fas fa-chess-knight' };
    } else if (g.includes('philosophy') || g.includes('classic')) {
        return { primary: '#f12711', secondary: '#f5af19', icon: 'fas fa-monument' };
    } else if (g.includes('spiritual') || g.includes('scripture')) {
        return { primary: '#00c6ff', secondary: '#0072ff', icon: 'fas fa-bible' };
    } else if (g.includes('romance')) {
        return { primary: '#ec008c', secondary: '#fc6767', icon: 'fas fa-heart' };
    } else if (g.includes('sport')) {
        return { primary: '#f12711', secondary: '#f5af19', icon: 'fas fa-running' };
    } else {
        return { primary: '#4facfe', secondary: '#00f2fe', icon: 'fas fa-book-open' };
    }
}

// Render dynamic manga cards with premium ratings and statistics support
function createMangaCard(manga, isPopular = false) {
    const startCh = manga.startChapter || 1;
    const starBadge = isPopular ? `<div class="popular-star-badge"><i class="fas fa-star"></i></div>` : '';
    const ratingStars = manga.rating ? `<div class="card-rating"><i class="fas fa-star" style="color:#ffd700;"></i> ${manga.rating} • ${manga.views || '10k'} reads</div>` : '';
    return `
        <a href="reader.html?manga=${manga.mangaId}&chapter=${startCh}" class="manga-card ${isPopular ? 'featured-card' : ''}" style="display: block;">
            <div class="card-image-container">
                ${starBadge}
                <img src="${manga.image}" alt="${manga.title}" onerror="handleImageError(this, '${manga.title.replace(/'/g, "\\'")}', '${manga.genre}')">
                <div class="chapter-badge">${manga.latestChapter}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${manga.title}</h3>
                <p class="card-genre">${manga.genre}</p>
                ${ratingStars}
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
                    <img src="${manga.image}" alt="${manga.title}" onerror="handleImageError(this, '${manga.title.replace(/'/g, "\\'")}', '${manga.genre}')">
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

// Compute and render real-time statistics dashboard panel
function renderStatistics() {
    const statsContainer = document.getElementById('analyticsSection');
    if (!statsContainer) return;

    // Load progress
    const progress = JSON.parse(localStorage.getItem('mangageek_progress')) || {};
    const entries = Object.entries(progress);
    
    // User progress stats
    const titlesInProgress = entries.length;
    
    let totalEstimatedMinutes = 0;
    const genreTally = {};
    
    entries.forEach(([mangaId, record]) => {
        const manga = mockMangaData.find(m => m.mangaId === mangaId);
        const pagesRead = record.page || 1;
        const chaptersCount = record.chapter || 1;
        
        // Dynamic reading time estimation: 15 mins per chapter, 1.5 mins per page
        totalEstimatedMinutes += (chaptersCount - 1) * 15 + pagesRead * 1.5;
        
        if (manga) {
            const genres = manga.genre.split('/').map(g => g.trim());
            genres.forEach(g => {
                genreTally[g] = (genreTally[g] || 0) + 1;
            });
        }
    });

    const totalHours = Math.round((totalEstimatedMinutes / 60) * 10) / 10;

    // Reading streak calculations (resets if inactive > 48 hrs)
    let streak = parseInt(localStorage.getItem('mangageek_streak')) || 0;
    const lastReadTimestamp = parseInt(localStorage.getItem('mangageek_last_read')) || 0;
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    
    if (lastReadTimestamp > 0) {
        const diffMs = now - lastReadTimestamp;
        if (diffMs <= oneDayMs) {
            if (streak === 0) streak = 1;
        } else if (diffMs <= 2 * oneDayMs) {
            streak++;
            localStorage.setItem('mangageek_streak', streak);
        } else {
            streak = 1;
            localStorage.setItem('mangageek_streak', streak);
        }
    } else {
        if (titlesInProgress > 0) {
            streak = 1;
            localStorage.setItem('mangageek_streak', streak);
        }
    }
    
    if (titlesInProgress > 0 && lastReadTimestamp === 0) {
        localStorage.setItem('mangageek_last_read', now);
    }

    // Top Genre calculation
    let favoriteGenre = "None";
    let maxTally = 0;
    Object.entries(genreTally).forEach(([g, count]) => {
        if (count > maxTally) {
            maxTally = count;
            favoriteGenre = g;
        }
    });

    // Populate the global statistics dashboard template
    statsContainer.innerHTML = `
        <div class="stats-dashboard-wrapper">
            <h2 class="section-title-glow"><i class="fas fa-chart-bar" style="color: #ffd700;"></i> Analytics & Dashboard</h2>
            
            <div class="stats-grid">
                <!-- User Stat Card 1 -->
                <div class="stats-card user-stat">
                    <div class="stats-card-icon"><i class="fas fa-book-reader"></i></div>
                    <div class="stats-card-val">${titlesInProgress}</div>
                    <div class="stats-card-label">In Progress</div>
                    <div class="stats-card-sub text-glow">Personal Library</div>
                </div>
                <!-- User Stat Card 2 -->
                <div class="stats-card user-stat">
                    <div class="stats-card-icon"><i class="fas fa-hourglass-half"></i></div>
                    <div class="stats-card-val">${totalHours} hrs</div>
                    <div class="stats-card-label">Read Time</div>
                    <div class="stats-card-sub text-glow">Estimated Duration</div>
                </div>
                <!-- User Stat Card 3 -->
                <div class="stats-card user-stat">
                    <div class="stats-card-icon"><i class="fas fa-fire-alt"></i></div>
                    <div class="stats-card-val">${streak} Days</div>
                    <div class="stats-card-label">Reading Streak</div>
                    <div class="stats-card-sub text-glow">Daily Consistency</div>
                </div>
                <!-- Global Stat Card 1 -->
                <div class="stats-card global-stat">
                    <div class="stats-card-icon"><i class="fas fa-atlas"></i></div>
                    <div class="stats-card-val">${mockMangaData.length}</div>
                    <div class="stats-card-label">Catalog Size</div>
                    <div class="stats-card-sub">Active Publications</div>
                </div>
                <!-- Global Stat Card 2 -->
                <div class="stats-card global-stat">
                    <div class="stats-card-icon"><i class="fas fa-users"></i></div>
                    <div class="stats-card-val">142.4k</div>
                    <div class="stats-card-label">Active Readers</div>
                    <div class="stats-card-sub">Community Size</div>
                </div>
                <!-- Global Stat Card 3 -->
                <div class="stats-card global-stat">
                    <div class="stats-card-icon"><i class="fas fa-star"></i></div>
                    <div class="stats-card-val text-truncate">${favoriteGenre !== "None" ? favoriteGenre : "Explore Now"}</div>
                    <div class="stats-card-label">Favorite Genre</div>
                    <div class="stats-card-sub">Based on Progress</div>
                </div>
            </div>

            <div class="stats-charts-row">
                <div class="stats-chart-card">
                    <h3><i class="fas fa-medal" style="color: #ffd700;"></i> Favorite Genres Breakdown</h3>
                    <div class="genre-bars-container">
                        ${titlesInProgress === 0 ? `
                            <div class="no-stats-prompt">
                                <i class="fas fa-info-circle"></i>
                                <p>Start reading or bookmarking any manga to populate your personal favorite genre analyzer!</p>
                            </div>
                        ` : Object.entries(genreTally).sort((a,b) => b[1] - a[1]).slice(0, 4).map(([genre, count]) => {
                            const percent = Math.round((count / titlesInProgress) * 100);
                            return `
                                <div class="genre-bar-item">
                                    <div class="genre-bar-label">
                                        <span>${genre}</span>
                                        <span>${count} ${count === 1 ? 'title' : 'titles'} (${percent}%)</span>
                                    </div>
                                    <div class="genre-bar-track">
                                        <div class="genre-bar-fill" style="width: ${percent}%;"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="stats-chart-card">
                    <h3><i class="fas fa-chart-line" style="color: #ffd700;"></i> Simulation & Operations</h3>
                    <div class="simulator-box">
                        <p>Simulate dynamic reading updates to test analytics and view immediate responses.</p>
                        <button class="btn-primary btn-sm" id="btnSimulateRead" onclick="triggerMockReadingActivity()">
                            <i class="fas fa-bolt"></i> Simulate Reading Progress
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render dynamic homepage categories
function renderManga() {
    const popularGrid = document.getElementById('popularGrid');
    const latestGrid = document.getElementById('latestGrid');
    
    if(popularGrid) popularGrid.innerHTML = '';
    if(latestGrid) latestGrid.innerHTML = '';

    // Most Popular Selection: Exclude the Bible from the "Most Popular" selection, and sort by true popularity views!
    const popularManga = mockMangaData
        .filter(m => m.mangaId !== 'holy-bible-kjv')
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 6);

    // Render Most Popular
    popularManga.forEach(manga => {
        if(popularGrid) popularGrid.innerHTML += createMangaCard(manga, true);
    });

    // Render Latest Updates sorted by ID descending
    const latestManga = [...mockMangaData].sort((a, b) => b.id - a.id);
    latestManga.forEach(manga => {
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
    renderStatistics();

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

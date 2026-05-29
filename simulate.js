const fs = require('fs');
const vm = require('vm');

// Read reader.html
const html = fs.readFileSync('reader.html', 'utf8');

// Extract script blocks
const scripts = [];
const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
let match;
while ((match = scriptRegex.exec(html)) !== null) {
    scripts.push(match[1]);
}

console.log(`Extracted ${scripts.length} script blocks from reader.html.`);

// Define a lightweight mock DOM environment
const makeElement = (tag, id = '') => {
    return {
        tagName: tag.toUpperCase(),
        id: id,
        style: {
            setProperty: (name, val) => {
                console.log(`  [DOM] Style.setProperty: ${name} = ${val}`);
            }
        },
        classList: {
            add: (cls) => { console.log(`  [DOM] ClassList.add: ${cls}`); },
            remove: (cls) => { console.log(`  [DOM] ClassList.remove: ${cls}`); },
            contains: (cls) => false
        },
        childNodes: [],
        appendChild: function(child) {
            this.childNodes.push(child);
            return child;
        },
        querySelectorAll: function(sel) {
            return [];
        },
        querySelector: function(sel) {
            return makeElement('div');
        },
        addEventListener: (event, handler) => {
            console.log(`  [DOM] Registered event listener: ${event}`);
        },
        options: [],
        remove: () => {},
        getBoundingClientRect: () => ({ top: 0, left: 0, width: 800, height: 1000 })
    };
};

const documentMock = {
    title: '',
    body: makeElement('body'),
    documentElement: makeElement('html'),
    write: (str) => {
        console.log(`  [DOM] document.write called: ${str}`);
    },
    getElementById: function(id) {
        if (id === 'chapterSelect') {
            return this.chapterSelect;
        }
        return makeElement('div', id);
    },
    querySelector: function(sel) {
        return makeElement('div');
    },
    querySelectorAll: function(sel) {
        return [];
    },
    createElement: function(tag) {
        const el = makeElement(tag);
        if (tag.toLowerCase() === 'option') {
            return {
                tagName: 'OPTION',
                value: '',
                textContent: '',
                selected: false
            };
        }
        return el;
    },
    chapterSelect: {
        tagName: 'SELECT',
        id: 'chapterSelect',
        options: [],
        style: {
            setProperty: (name, val) => {
                console.log(`  [DOM] Style.setProperty: ${name} = ${val}`);
            }
        },
        appendChild: function(child) {
            this.options.push(child);
        },
        addEventListener: (event, handler) => {
            console.log(`  [DOM] Registered chapterSelect event listener: ${event}`);
        }
    }
};

const windowMock = {
    location: {
        search: '?manga=rich-dad-poor-dad&chapter=1'
    },
    localStorage: {
        getItem: (key) => null,
        setItem: (key, val) => {}
    },
    addEventListener: (event, handler) => {
        console.log(`  [DOM] Registered window event listener: ${event}`);
    },
    getSelection: () => ({ toString: () => '' })
};

// Setup sandbox context
const sandbox = {
    window: windowMock,
    document: documentMock,
    localStorage: windowMock.localStorage,
    navigator: { serviceWorker: { getRegistrations: () => Promise.resolve([]) } },
    URLSearchParams: function(search) {
        return {
            get: (key) => {
                if (key === 'manga') return 'rich-dad-poor-dad';
                if (key === 'chapter') return '1';
                return null;
            }
        };
    },
    console: console,
    setTimeout: setTimeout,
    setInterval: setInterval
};

// Bind standard DOM elements as globals in the sandbox
Object.assign(sandbox, {
    document: documentMock,
    window: windowMock,
    localStorage: windowMock.localStorage
});

// Load the data files
const dataCode = fs.readFileSync('data.js', 'utf8');
const richDadCode = fs.readFileSync('rich_dad_poor_dad_data.js', 'utf8');

const context = vm.createContext(sandbox);

console.log("Evaluating data.js...");
vm.runInContext(dataCode, context);

console.log("Evaluating rich_dad_poor_dad_data.js...");
vm.runInContext(richDadCode, context);

console.log("Evaluating reader.html scripts...");
try {
    scripts.forEach((scriptCode, index) => {
        console.log(`Executing Script Block ${index + 1}...`);
        vm.runInContext(scriptCode, context);
    });
    console.log("SUCCESS: Execution completed without throwing any runtime errors!");
    console.log("chapterSelect options count:", documentMock.chapterSelect.options.length);
    documentMock.chapterSelect.options.forEach(opt => {
        console.log(`  Option: value=${opt.value}, text=${opt.textContent}, selected=${opt.selected}`);
    });
} catch (err) {
    console.error("RUNTIME EXCEPTION DETECTED DURING EXECUTION:");
    console.error(err.stack);
}

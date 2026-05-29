// MangaGeek Client-Side Authentication Engine

// Get all registered users from LocalStorage
function getRegisteredUsers() {
    return JSON.parse(localStorage.getItem('mangageek_users')) || {};
}

// Save users list to LocalStorage
defUserList = getRegisteredUsers(); // Initial load

function saveRegisteredUsers(users) {
    localStorage.setItem('mangageek_users', JSON.stringify(users));
}

// Register a new user
function registerUser(name, email, password) {
    const users = getRegisteredUsers();
    const cleanEmail = email.trim().toLowerCase();
    
    if (users[cleanEmail]) {
        return { success: false, message: "Email is already registered!" };
    }
    
    // Save new user profile
    users[cleanEmail] = {
        name: name.trim(),
        email: cleanEmail,
        password: password // simple password storage for prototype purposes
    };
    
    saveRegisteredUsers(users);
    
    // Auto-login after successful registration
    return loginUser(cleanEmail, password);
}

// Log in a user and start session
function loginUser(email, password) {
    const users = getRegisteredUsers();
    const cleanEmail = email.trim().toLowerCase();
    const user = users[cleanEmail];
    
    if (!user || user.password !== password) {
        return { success: false, message: "Invalid email or password!" };
    }
    
    // Set active session in sessionStorage (expires when browser tab is closed)
    sessionStorage.setItem('mangageek_session', JSON.stringify({
        name: user.name,
        email: user.email
    }));
    
    return { success: true };
}

// Log out user
function logoutUser() {
    sessionStorage.removeItem('mangageek_session');
    window.location.href = 'index.html';
}

// Get currently logged in user details
function getCurrentUser() {
    const session = sessionStorage.getItem('mangageek_session');
    return session ? JSON.parse(session) : null;
}

// Helper to compute initials from user's name
function getNameInitials(name) {
    if (!name) return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
}

// Dynamically inject the correct Auth state in the Navbars across all pages
function updateNavbarAuth() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    // Check if auth container already exists, if so clear it
    let authContainer = document.getElementById('navAuthContainer');
    if (authContainer) {
        authContainer.remove();
    }
    
    // Create new auth container
    authContainer = document.createElement('div');
    authContainer.id = 'navAuthContainer';
    authContainer.className = 'auth-nav-container';
    
    const user = getCurrentUser();
    
    if (user) {
        // Logged-in state: Display premium initials badge & dropdown menu
        const initials = getNameInitials(user.name);
        authContainer.innerHTML = `
            <div class="user-profile-badge" id="profileBadge">${initials}</div>
            <div class="profile-dropdown" id="profileDropdown">
                <div class="profile-dropdown-header">Logged in as:<br><strong>${user.name}</strong></div>
                <div class="profile-dropdown-item" onclick="window.location.href='index.html'"><i class="fas fa-home"></i> Home</div>
                <div class="profile-dropdown-item" onclick="window.location.href='genres.html'"><i class="fas fa-book-open"></i> Genres</div>
                <div class="profile-dropdown-item" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Sign Out</div>
            </div>
        `;
    } else {
        // Logged-out state: Display premium CTA redirecting to login.html
        authContainer.innerHTML = `
            <button class="nav-auth-btn" onclick="window.location.href='login.html'">Sign In</button>
        `;
    }
    
    // Append to navbar
    navbar.appendChild(authContainer);
    
    // Add dropdown toggling listeners
    const profileBadge = document.getElementById('profileBadge');
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (profileBadge && profileDropdown) {
        profileBadge.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', () => {
            profileDropdown.classList.remove('show');
        });
        
        // Bind logout button click
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            logoutUser();
        });
    }
}

// Automatically sync navbar session status on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    updateNavbarAuth();
});


const products = [
    {
        id: 1,
        name: "Red Dead Redemption II",
        category: "action",
        price: 6999,  
        image: "../images/Rectangle135.png",
        video: { type: "youtube", id: "eaW0tYpxyp0" },
        description: "Amérique, 1899. L'Ouest sauvage touche à sa fin. Après un braquage qui tourne mal, Arthur Morgan et le gang de Van der Linde sont traqués par les forces de l'ordre.",
        featured: true, promo: false, discount: 0,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 2,
        name: "Starfield",
        category: "rpg",
        price: 6999,  
        image: "../images/Rectangle145.png",
        video: { type: "youtube", id: "01tvuM7hew4" },
        description: "Explorez une galaxie immense dans ce jeu de rôle spatial développé par Bethesda Game Studios.",
        featured: true, promo: false, discount: 0,
        platforms: ["PC", "Xbox"]
    },
    {
        id: 3,
        name: "Cyberpunk 2077",
        category: "action",
        price: 6999,  
        image: "../images/Rectangle137.png",
        video: { type: "youtube", id: "1DSutjnvTX4" },
        description: "Bienvenue à Night City. Plonge dans l'univers sombre et futuriste de Cyberpunk où la technologie règne et le danger est partout.",
        featured: true, promo: false, discount: 0,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 4,
        name: "Call of Duty",
        category: "action",
        price: 6999,  
        image: "../images/Rectangle166.png",
        video: { type: "youtube", id: "wBwHvW06J_w" },
        description: "Prépare-toi pour le combat. Plonge dans l'univers intense de Call of Duty où chaque mission peut changer le cours de la bataille.",
        featured: true, promo: false, discount: 0,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 5,
        name: "Horizon Forbidden West",
        category: "aventure",
        price: 6999,
        image: "../images/HorizonForbiddenWest.jpg",
        video: { type: "youtube", id: "Xk-xq6_Lr6E" },
        description: "Rejoignez Aloy dans une aventure épique à travers l'Ouest interdit.",
        featured: false, promo: true, discount: 20,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 6,
        name: "The Legend of Zelda",
        category: "aventure",
        price: 6999,
        image: "../images/Zelda.jpg",
        video: { type: "youtube", id: "vumJiWdxQSs" },
        description: "Tears of the Kingdom — Rejoignez Link dans une aventure extraordinaire à travers le royaume d'Hyrule.",
        featured: false, promo: true, discount: 20,
        platforms: ["Switch"]
    },
    {
        id: 7,
        name: "Resident Evil Requiem",
        category: "horreur",
        price: 6999,
        image: "../images/Resident Evil Requiem.jpg",
        video: { type: "youtube", id: "e2mpfyEcuHI" },
        description: "Préparez-vous à vivre une expérience de survival horror terrifiante.",
        featured: false, promo: true, discount: 20,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 8,
        name: "Gran Turismo 7",
        category: "sport",
        price: 6999,
        image: "../images/Rectangle198.png",
        video: { type: "youtube", id: "9tR6oOlnkw4" },
        description: "Prenez le volant des voitures les plus emblématiques du monde.",
        featured: false, promo: true, discount: 20,
        platforms: ["PS5"]
    },
    {
        id: 9,
        name: "Baldur's Gate",
        category: "rpg",
        price: 6999,
        image: "../images/Baldusgate.jpg",
        video: { type: "youtube", id: "7UIT8IGMQaw" },
        description: "Embarquez dans une aventure de rôle épique inspirée de l'univers de Baldur's Gate 3.",
        featured: false, promo: true, discount: 20,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 10,
        name: "God of War Ragnarok",
        category: "action",
        price: 6999,
        image: "../images/GodofwarRagnarok.jpg",
        video: { type: "youtube", id: "0taDnGk3oK4" },
        description: "Suivez Kratos et son fils Atreus dans une aventure mythologique.",
        featured: false, promo: true, discount: 20,
        platforms: ["PS5"]
    },
    {
        id: 11,
        name: "Starfield",
        category: "rpg",
        price: 6999,
        image: "../images/Startfield.jpg",
        video: { type: "youtube", id: "01tvuM7hew4" },
        description: "Explorez les étoiles dans ce RPG spatial.",
        featured: false, promo: true, discount: 20,
        platforms: ["PC", "Xbox"]
    },
    {
        id: 12,
        name: "Forza Horizon 5",
        category: "sport",
        price: 6999,
        image: "../images/ForzaHorizon5.jpg",
        video: { type: "youtube", id: "Rv7xLt5yNsM" },
        description: "Explorez un monde ouvert immense et dynamique inspiré du Mexique.",
        featured: false, promo: true, discount: 20,
        platforms: ["PC", "Xbox"]
    }
];


const defaultUsers = [{ id: 1, email: "demo@gaminghub.dz", password: "demo123", name: "Utilisateur Demo", registered: "2024-01-15" }];


const RegexPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^0[1-9]([ .-]?[0-9]{2}){4}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
    name: /^[a-zA-ZàâäéèêëïîôùûüÿçÀÂÄÉÈÊËÏÎÔÙÛÜÇ\s'-]{2,50}$/,
    postalCode: /^[0-9]{5}$/,
    city: /^[a-zA-ZàâäéèêëïîôùûüÿçÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ\s'-]{2,100}$/
};


function formatPriceDA(price) {
    return new Intl.NumberFormat('fr-DZ', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price).replace('DZD', 'DA');
}


function getDiscountedPrice(price, discount) {
    return discount > 0 ? Math.round(price * (1 - discount/100)) : price;
}


function renderFeaturedGames() {
    const container = document.getElementById('games-grid') || document.querySelector('.games-grid');
    if (!container) return;
    const featured = products.filter(p => p.featured);
    if (container.children.length > 0 && !container.dataset.dynamic) return;
    container.innerHTML = featured.map((product, index) => {
        const isReverse = index % 2 === 1 ? 'reverse' : '';
        return `<article class="game-card ${isReverse}" data-id="${product.id}" data-category="${product.category}">
            <div class="bg-layer" style="--card-bg-image: url('${product.image}')"></div>
            <div class="game-text-box"><h2 class="game-title">${product.name.toUpperCase()}</h2><p class="game-description">${product.description}</p></div>
            <div class="game-image"><img src="${product.image}" alt="${product.name}"><button class="btn-panier" onclick="addToCart(${product.id})">Panier</button></div>
        </article>`;
    }).join('');
    container.dataset.dynamic = 'true';
}

function renderPromoGames() {
    const container = document.querySelector('.promo-grid');
    if (!container) return;
    const promo = products.filter(p => p.promo);
    if (container.children.length > 0 && !container.dataset.dynamic) return;
    container.innerHTML = promo.map(product => {
        const originalPrice = formatPriceDA(product.price);
        const discountedPrice = formatPriceDA(getDiscountedPrice(product.price, product.discount));
        return `<div class="promo-card" data-id="${product.id}" data-category="${product.category}">
            <div class="discount-badge">-${product.discount}%</div>
            <img src="${product.image}" alt="${product.name}" class="game-cover">
            <div class="game-info"><h3 class="game-title">${product.name}</h3><p class="game-platforms">(${product.platforms.join(', ')})</p>
            <p class="game-date">18 février 2022</p><p style="color:#4CAF50;font-weight:bold;margin-top:5px;">${discountedPrice} <small style="text-decoration:line-through;color:#888;font-size:0.9em;">${originalPrice}</small></p></div>
        </div>`;
    }).join('');
    container.dataset.dynamic = 'true';
}

function renderFAQ() {
    const container = document.querySelector('.faq-container');
    if (!container || container.children.length > 0) return;
    const faqData = [
        { q: "Qui sommes-nous ?", a: "Gaming.HUB est une plateforme de référence dédiée aux passionnés de jeux vidéo. Fondée en 2020, notre équipe d'experts sélectionne pour vous les meilleurs jeux et accessoires gaming." },
        { q: "Que proposons-nous exactement ?", a: "Nous proposons une large gamme de produits gaming : jeux vidéo pour toutes les plateformes (PC, PlayStation, Xbox, Nintendo), consoles, accessoires et produits dérivés." },
        { q: "Pourquoi choisir notre site ?", a: "Prix compétitifs en dinars, livraison rapide en Algérie, service client 6j/7, conseils d'experts, et garantie satisfait ou remboursé de 7 jours." },
        { q: "Comment passer une commande ?", a: "Créez un compte, ajoutez les produits au panier, validez votre commande, choisissez votre mode de paiement (CCP, CIB, PayPal) et confirmez." }
    ];
    container.innerHTML = faqData.map(item => `<div class="faq-item"><div class="faq-question" onclick="toggleFaq(this)"><span>${item.q}</span><i class="fas fa-chevron-down"></i></div><div class="faq-answer"><p>${item.a}</p></div></div>`).join('');
}


function filterByCategory(category) {
    document.querySelectorAll('.promo-card, .game-card').forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
    });
}

function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (!searchInput) return;
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.promo-card, .game-card').forEach(card => {
            const title = card.querySelector('.game-title')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.game-description')?.textContent.toLowerCase() || '';
            card.style.display = (title.includes(query) || desc.includes(query)) ? '' : 'none';
        });
    });
}


const CART_KEY = 'cart';  

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showToast('❌ Produit non trouvé');
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        showToast(`✅ +1 ${product.name} dans le panier`);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            discount: product.discount || 0
        });
        showToast(`✅ ${product.name} ajouté au panier`);
    }
    
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartDisplay();
    
  
    const btn = event?.target?.closest('button');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => btn.style.transform = '', 150);
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartDisplay();
    showToast('🗑️ Produit retiré du panier');
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    
    // Badge desktop
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = `(${totalItems})`;
        cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
    }
    
    // Badge mobile
    const mobCartDot = document.querySelector('.mob-dot');
    if (mobCartDot) {
        mobCartDot.style.display = totalItems > 0 ? 'block' : 'none';
    }
    
    // Icône panier animée
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon && totalItems > 0) {
        cartIcon.style.animation = 'pulse 0.3s ease';
        setTimeout(() => cartIcon.style.animation = '', 300);
    }
}

function getCartProducts() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return product ? { ...product, quantity: item.quantity || 1 } : null;
    }).filter(p => p !== null);
}

function calculateCartTotal() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        if (!product) return total;
        const price = item.discount > 0 
            ? product.price * (1 - item.discount/100) 
            : product.price;
        return total + (price * (item.quantity || 1));
    }, 0);
}

// 7. AUTH
function loadUsers() {
    const stored = localStorage.getItem('gaminghub_users');
    if (stored) return JSON.parse(stored);
    localStorage.setItem('gaminghub_users', JSON.stringify(defaultUsers));
    return [...defaultUsers];
}
function saveUsers(users) { localStorage.setItem('gaminghub_users', JSON.stringify(users)); }
function registerUser(email, password, name) {
    const users = loadUsers();
    if (users.find(u => u.email === email)) return { success: false, message: "Cet email est déjà utilisé" };
    users.push({ id: users.length + 1, email, password, name, registered: new Date().toISOString() });
    saveUsers(users);
    return { success: true, message: "Compte créé avec succès!" };
}
function loginUser(email, password) {
    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('gaminghub_session', JSON.stringify({ userId: user.id, email: user.email, name: user.name, loginTime: new Date().toISOString() }));
        return { success: true, user };
    }
    return { success: false, message: "Email ou mot de passe incorrect" };
}
function logoutUser() { localStorage.removeItem('gaminghub_session'); updateAuthUI(); window.location.href = 'index.html'; }
function getCurrentUser() {
    const session = localStorage.getItem('gaminghub_session');
    return session ? JSON.parse(session) : null;
}
function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;
    const user = getCurrentUser();
    if (user) {
        authButtons.innerHTML = `<i class="fas fa-shopping-cart cart-icon"></i><span id="cart-count" style="display:none">(0)</span><span style="color:#888;font-size:0.9rem;">Bonjour, ${user.name.split(' ')[0]}!</span><button class="btn-connexion" onclick="logoutUser()" style="background:#ff6b35;">Déconnexion</button>`;
        updateCartDisplay();
    }
}

// 8. VALIDATION
function validateEmail(email) { return RegexPatterns.email.test(email); }
function validatePhone(phone) { return RegexPatterns.phone.test(phone.replace(/\s/g, '')); }
function validatePassword(password) { return RegexPatterns.password.test(password); }
function validateName(name) { return RegexPatterns.name.test(name); }
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) { input.style.borderColor = '#ff4444'; return; }
    input.classList.add('error');
    let errorSpan = formGroup.querySelector('.error-message');
    if (!errorSpan) { errorSpan = document.createElement('span'); errorSpan.className = 'error-message'; errorSpan.style.cssText = 'color:#ff4444;font-size:0.85rem;display:block;'; formGroup.appendChild(errorSpan); }
    errorSpan.textContent = message;
}
function clearError(input) {
    input.classList.remove('error'); input.style.borderColor = '';
    const errorSpan = input.closest('.form-group')?.querySelector('.error-message');
    if (errorSpan) errorSpan.textContent = '';
}
function setupFormValidation() {
    const inscriptionForm = document.getElementById('inscription-form');
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = { nom: document.getElementById('nom')?.value.trim(), prenom: document.getElementById('prenom')?.value.trim(), email: document.getElementById('email')?.value.trim(), password: document.getElementById('password')?.value, confirmPassword: document.getElementById('confirm-password')?.value, telephone: document.getElementById('telephone')?.value.trim() };
            if (!validateName(formData.nom)) { showError(document.getElementById('nom'), 'Nom invalide'); return; }
            if (!validateName(formData.prenom)) { showError(document.getElementById('prenom'), 'Prénom invalide'); return; }
            if (!validateEmail(formData.email)) { showError(document.getElementById('email'), 'Email invalide'); return; }
            if (!validatePassword(formData.password)) { showError(document.getElementById('password'), 'Mot de passe trop faible'); return; }
            if (formData.password !== formData.confirmPassword) { showError(document.getElementById('confirm-password'), 'Mots de passe différents'); return; }
            const result = registerUser(formData.email, formData.password, `${formData.prenom} ${formData.nom}`);
            if (result.success) { showToast('✅ Compte créé!'); setTimeout(() => window.location.href = 'connexion.html', 1500); }
            else { showError(document.getElementById('email'), result.message); }
        });
    }
    const connexionForm = document.getElementById('connexion-form');
    if (connexionForm) {
        connexionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email')?.value.trim(), password = document.getElementById('password')?.value;
            if (!validateEmail(email)) { showError(document.getElementById('email'), 'Email invalide'); return; }
            const result = loginUser(email, password);
            if (result.success) { showToast(`✅ Bienvenue ${result.user.name}!`); updateAuthUI(); setTimeout(() => window.location.href = 'index.html', 1500); }
            else { showError(document.getElementById('email'), result.message); }
        });
    }
    document.querySelectorAll('.form-input').forEach(input => { input.addEventListener('input', () => clearError(input)); input.addEventListener('blur', () => { if(input.value) clearError(input); }); });
}

// 9. UTILITAIRES
function showToast(message) {
    // Supprimer toast existant
    const existingToast = document.getElementById('global-toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.style.cssText = `position:fixed;bottom:30px;right:30px;background:linear-gradient(135deg,#4CAF50,#45a049);color:white;padding:15px 25px;border-radius:15px;font-family:'Jaini Purva',cursive;z-index:9999;box-shadow:0 5px 20px rgba(76,175,80,0.4);animation:slideIn 0.3s ease;display:flex;align-items:center;gap:10px;`;
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    
    setTimeout(() => { 
        toast.style.animation = 'slideOut 0.3s ease'; 
        setTimeout(() => toast.remove(), 300); 
    }, 2500);
}

if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style'); 
    style.id = 'toast-styles';
    style.textContent = `@keyframes slideIn{from{transform:translateX(150%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slideOut{from{transform:translateX(0);opacity:1}to{transform:translateX(150%);opacity:0}}`;
    document.head.appendChild(style);
}

function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) faqItem.classList.add('active');
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('.newsletter-input')?.value;
    if (email && validateEmail(email)) { 
        showToast('✅ Inscrit à la newsletter!'); 
        event.target.reset(); 
    }
}

// 10. MENU MOBILE
function setupMobileMenu() {
    const menuToggle = document.getElementById('mob-menu-toggle'), menuClose = document.getElementById('mob-menu-close'), menuDrawer = document.getElementById('mob-menu-drawer'), menuOverlay = document.getElementById('mob-menu-overlay'), searchToggle = document.getElementById('mob-search-toggle'), searchBar = document.getElementById('mob-search-bar');
    function openMenu() { menuDrawer?.classList.add('open'); menuOverlay?.classList.add('open'); document.body.classList.add('modal-open'); }
    function closeMenu() { menuDrawer?.classList.remove('open'); menuOverlay?.classList.remove('open'); document.body.classList.remove('modal-open'); }
    menuToggle?.addEventListener('click', openMenu); menuClose?.addEventListener('click', closeMenu); menuOverlay?.addEventListener('click', closeMenu);
    searchToggle?.addEventListener('click', () => { searchBar?.classList.toggle('mob-search-visible'); if (searchBar?.classList.contains('mob-search-visible')) document.getElementById('mob-search-input')?.focus(); });
    document.addEventListener('click', (e) => { if (searchBar?.classList.contains('mob-search-visible') && !searchBar.contains(e.target) && e.target !== searchToggle) searchBar.classList.remove('mob-search-visible'); });
    updateCartDisplay();
    const currentPath = window.location.pathname;
    document.querySelectorAll('.mob-tab-item').forEach(link => { const href = link.getAttribute('href'); if (href && currentPath.includes(href.split('/').pop())) link.classList.add('active'); });
}



function loadVideoInModal(videoData, posterImage, container) {
    container.innerHTML = '';
    const videoContainer = document.createElement('div');
    videoContainer.className = 'modal-video-container';
    
    const poster = document.createElement('div');
    poster.className = 'modal-video-poster';
    poster.style.backgroundImage = `url('${posterImage}')`;
    
    const posterOverlay = document.createElement('div');
    posterOverlay.className = 'modal-video-poster-overlay';
    
    const playButton = document.createElement('button');
    playButton.className = 'modal-video-play-btn';
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    playButton.setAttribute('aria-label', 'Lancer la vidéo');
    
    const spinner = document.createElement('div');
    spinner.className = 'modal-video-loading hidden';
    spinner.innerHTML = '<div class="spinner"></div>';
    
    const iframe = document.createElement('iframe');
    iframe.className = 'modal-video-iframe';
    iframe.style.display = 'none';
    iframe.loading = 'lazy';
    
    let iframeSrc = '';
    if (videoData.type === 'youtube') {
        iframeSrc = `https://www.youtube-nocookie.com/embed/${videoData.id}?controls=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&playsinline=1`;
    } else if (videoData.type === 'vimeo') {
        iframeSrc = `https://player.vimeo.com/video/${videoData.id}?byline=0&title=0&portrait=0`;
    }
    
    poster.appendChild(posterOverlay);
    poster.appendChild(playButton);
    videoContainer.appendChild(poster);
    videoContainer.appendChild(spinner);
    videoContainer.appendChild(iframe);
    container.appendChild(videoContainer);
    
    playButton.addEventListener('click', () => {
        spinner.classList.remove('hidden');
        playButton.style.display = 'none';
        posterOverlay.style.display = 'none';
        
        iframe.src = iframeSrc;
        iframe.style.display = 'block';
        
        if (!iframe.src.includes('autoplay=1')) {
            iframe.src = iframe.src.includes('?') 
                ? iframe.src + '&autoplay=1&mute=0'
                : iframe.src + '?autoplay=1&mute=0';
        }
        
        iframe.addEventListener('load', () => {
            spinner.classList.add('hidden');
        }, { once: true });
    });
    
    iframe.addEventListener('error', () => {
        spinner.innerHTML = '<i class="fas fa-exclamation-triangle" style="font-size:2rem;color:#ff6b35;"></i><p style="color:#fff;margin-top:10px;">Vidéo indisponible</p>';
        console.warn(`Vidéo non chargée: ${videoData.id}`);
    });
}

function openGameModal(gameId) {
    const game = products.find(p => p.id === gameId);
    if (!game) return;
    
    const modal = document.getElementById('gameModal');
    if (!modal) return;
    
    const modalVideo = document.getElementById('modalGameVideo');
    const modalTitle = document.getElementById('modalGameTitle');
    const modalDesc = document.getElementById('modalGameDescription');
    const modalPlatforms = document.getElementById('modalGamePlatforms');
    const modalPrice = document.getElementById('modalGamePrice');
    const modalOriginalPrice = document.getElementById('modalGameOriginalPrice');
    const modalDiscount = document.getElementById('modalGameDiscount');
    const modalAddBtn = document.getElementById('modalAddToCart');
    
    if (modalVideo) modalVideo.innerHTML = '';
    
    if (game.video) {
        loadVideoInModal(game.video, game.image, modalVideo);
    }
    
    modalTitle.textContent = game.name;
    modalDesc.textContent = game.description;
    modalPlatforms.textContent = game.platforms.join(' • ');
    

    if (game.discount > 0) {
        const discountedPrice = formatPriceDA(getDiscountedPrice(game.price, game.discount));
        const originalPrice = formatPriceDA(game.price);
        modalPrice.textContent = discountedPrice;
        modalPrice.style.display = 'inline';
        modalOriginalPrice.textContent = originalPrice;
        modalOriginalPrice.style.display = 'inline';
        modalDiscount.textContent = `-${game.discount}%`;
        modalDiscount.style.display = 'inline';
    } else {
        modalPrice.textContent = formatPriceDA(game.price);
        modalPrice.style.display = 'inline';
        modalOriginalPrice.style.display = 'none';
        modalDiscount.style.display = 'none';
    }
    
    modalAddBtn.onclick = () => { 
        addToCart(game.id); 
        closeModal(); 
    };
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('gameModal');
    if (!modal) return;
    
    const iframe = modal.querySelector('iframe');
    if (iframe) {
        if (iframe.src.includes('youtube')) {
            try { iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); } catch(e) {}
        }
        iframe.src = '';
    }
    
    const modalVideo = document.getElementById('modalGameVideo');
    if (modalVideo) modalVideo.innerHTML = '';
    
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    
    setTimeout(() => {
        if (!modal.classList.contains('active')) {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.position = '';
        }
    }, 100);
}

function setupGameCardsClick() {
    document.querySelectorAll('.game-card[data-game]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-panier')) return;
            const gameKey = card.dataset.game;
            const gameMap = { 'rdr2': 1, 'starfield': 2, 'cyberpunk': 3, 'cod': 4 };
            const gameId = gameMap[gameKey];
            if (gameId) openGameModal(gameId);
        });
    });
    document.querySelectorAll('.promo-card[data-promo]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const promoKey = card.dataset.promo;
            const promoMap = { 'horizon': 5, 'zelda': 6, 're': 7, 'gt7': 8, 'baldurs': 9, 'gow': 10, 'starfield2': 11, 'forza': 12 };
            const gameId = promoMap[promoKey];
            if (gameId) openGameModal(gameId);
        });
    });
}

// 11. INITIALISATION
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    renderFeaturedGames();
    renderPromoGames();
    renderFAQ();
    setupSearch();
    setupFormValidation();
    updateAuthUI();
    updateCartDisplay();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.promo-card, .game-card, .faq-item').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    const seeMoreBtn = document.querySelector('.btn-voir-plus');
    if (seeMoreBtn) seeMoreBtn.addEventListener('click', () => { window.location.href = 'Content/produits.html'; });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
    
    setupMobileMenu();
    setupGameCardsClick();
    
    const modalClose = document.getElementById('modalClose'), modalOverlay = document.getElementById('gameModal');
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    
    // Sécurité scroll
    const observerModal = new MutationObserver(() => {
        const modal = document.getElementById('gameModal');
        if (!modal && document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }
    });
    observerModal.observe(document.body, { childList: true, subtree: true });
});

if (typeof module !== 'undefined' && module.exports) { module.exports = { products, addToCart, loginUser, registerUser, validateEmail, formatPriceDA }; }

// Mobile toggles
const mobSearch = document.getElementById('mob-search-toggle'), mobileSearchBar = document.getElementById('mobileSearchBar');
if(mobSearch && mobileSearchBar) { mobSearch.addEventListener('click', () => { mobileSearchBar.classList.toggle('mob-search-visible'); if(mobileSearchBar.classList.contains('mob-search-visible')) document.getElementById('searchInputMobile')?.focus(); }); }

const menuToggle = document.getElementById('mob-menu-toggle'), menuClose = document.getElementById('mob-menu-close'), drawer = document.getElementById('mobMenuDrawer'), overlay = document.getElementById('mobMenuOverlay');
function openMenu() { drawer?.classList.add('open'); overlay?.classList.add('open'); document.body.classList.add('modal-open'); }
function closeMenu() { drawer?.classList.remove('open'); overlay?.classList.remove('open'); document.body.classList.remove('modal-open'); }
menuToggle?.addEventListener('click', openMenu); menuClose?.addEventListener('click', closeMenu); overlay?.addEventListener('click', closeMenu);
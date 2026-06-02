

let cart = [];


const gamesData = {
    'the-calistor-protocol': { id: 1, name: 'The Calistor Protocol', genre: 'Horreur', platform: 'PS5', price: 6999, image: '../images/calistor-protocol.jpg' },
    'dead-island-2': { id: 2, name: 'Dead Island 2', genre: 'Horreur', platform: 'PC/PS5', price: 6999, image: '../images/dead-island-2.jpg' },
    'sea-of-stars': { id: 3, name: 'Sea of Stars', genre: 'RPG', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/JJ.jpg' },
    'Alan Wake 2': { id: 4, name: 'Alan Wake 2', genre: 'Horreur', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/AlaneWake2.png' },
    'Resident Evil 4': { id: 5, name: 'Resident Evil 4', genre: 'Horreur', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/Residentevil4.png' },
    'Dredge': { id: 6, name: 'Dredge', genre: 'Horreur', platform: 'Horreur', price: 6999, image: '../images/Dredge.png' },
    'Horizon Forbidden West': { id: 7, name: 'Horizon Forbidden West', genre: 'aventure', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/HorizaForbiddenWest.jpg' },
    'The Legend of Zelda': { id: 8, name: 'The Legend of Zelda', genre: 'aventure', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/Zelda.jpg' },
    'Starfield': { id: 9, name: 'Starfield', genre: 'aventure', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/Zelda.jpg' },
    'Dave the Diver': { id: 10, name: 'Dave the Diver', genre: 'aventure', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/DaveTheDriver.png' },
    'F1 23': { id: 11, name: 'F1 23', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/F123.png' },
    'Rocket League': { id: 12, name: 'Rocket League', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/RocketLeague.png' },
    'NBA 2K23': { id: 13, name: 'NBA 2K23', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/NBA2K23.png' },
    'Gran Turismo 7': { id: 14, name: 'Gran Turismo 7', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/GranTurismo7.png' },
    'FIFA 23': { id: 15, name: 'FIFA 23', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/FIFA23.png' },
    'Resident Evil 6': { id: 16, name: 'Resident Evil 6', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/Residentevil6' },
    'Grand Theft Auto V': { id: 17, name: 'Grand Theft Auto V', genre: 'Compétition', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/GTA.png' },
    'God of War Ragnarok': { id: 18, name: 'God of War Ragnarok', genre: 'Guerre', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/GOW.png' },
    'Forza Horizon 5': { id: 19, name: 'Forza Horizon 5', genre: 'course', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/ForzaHorizon5.png' },
    'Red Dead Redemption 2': { id: 20, name: 'Red Dead Redemption 2', genre: 'aventure', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/Rectangle135.png' },
    'Fortnite': { id: 21, name: 'Fortnite', genre: 'aventure', platform: 'PC/Xbox/PS5', price: 6999, image: '../images/Fortnite.png' },
};

const DELIVERY_PRICES = { standard: 0, express: 700 };

function updateCartCounter() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        let badge = cartIcon.querySelector('.cart-count');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-count';
            badge.style.cssText = `position:absolute;top:-8px;right:-8px;background:#ff6b00;color:white;font-size:11px;font-weight:bold;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:transform 0.2s ease;`;
            cartIcon.style.position = 'relative';
            cartIcon.appendChild(badge);
        }
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    const cartTitle = document.querySelector('.cart-title-centered');
    if (cartTitle) cartTitle.textContent = `Votre Panier (${totalItems})`;
    return totalItems;
}

function addToCart(gameId = 'sea-of-stars') {
    const game = gamesData[gameId];
    if (!game) { showToast('Erreur: Jeu non trouvé', 'error'); return false; }
    const existingItem = cart.find(item => item.id === game.id);
    if (existingItem) { existingItem.quantity = (existingItem.quantity || 1) + 1; showToast(`+1 ${game.name} dans le panier`, 'info'); } 
    else { cart.push({ id: game.id, name: game.name, genre: game.genre, platform: game.platform, price: game.price, image: game.image, quantity: 1 }); showToast(`${game.name} ajouté au panier`, 'success'); }
    updateCartCounter(); updateCartDisplay(); saveCart(); return true;
}

function removeItem(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        const item = cart[itemIndex]; const itemName = item.name; const itemQuantity = item.quantity || 1;
        if (itemQuantity > 1) { item.quantity -= 1; showToast(`-1 ${itemName} (reste ${item.quantity})`, 'info'); } 
        else { cart.splice(itemIndex, 1); showToast(`${itemName} supprimé du panier`, 'success'); }
        updateCartCounter(); updateCartDisplay(); saveCart(); return true;
    }
    return false;
}

function removeItemCompletely(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) { const itemName = cart[itemIndex].name; cart.splice(itemIndex, 1); updateCartCounter(); updateCartDisplay(); saveCart(); showToast(`${itemName} retiré du panier`, 'success'); return true; }
    return false;
}

function addToCartForId(gameId) { const gameKey = Object.keys(gamesData).find(key => gamesData[key].id === gameId); if (gameKey) addToCart(gameKey); }

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
function loadCart() { const saved = localStorage.getItem('cart'); if (saved) { try { cart = JSON.parse(saved); } catch (e) { cart = []; } } updateCartCounter(); }

function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items-container');
    if (!cartContainer) return;
    cartContainer.innerHTML = '';
    if (cart.length === 0) { cartContainer.innerHTML = `<div style="text-align:center;padding:40px;color:#888;"><i class="fas fa-shopping-cart" style="font-size:3rem;margin-bottom:20px;"></i><p>Votre panier est vide</p></div>`; updateOrderSummary(); return; }
    cart.forEach(item => {
        const itemElement = document.createElement('div'); itemElement.className = 'cart-item-block';
        itemElement.innerHTML = `<div class="cart-item-image"><img src="${item.image}" alt="${item.name}" onerror="this.src='../images/default-game.jpg'"></div><div class="cart-item-details"><h3 class="cart-item-name">${item.name}</h3><p class="cart-item-info">genre : ${item.genre}</p><p class="cart-item-info">Plateforme : ${item.platform}</p><div class="cart-item-price-row"><span class="cart-item-price-label">Prix :</span><span class="cart-item-price">${(item.price * (item.quantity || 1)).toLocaleString()} DA</span></div><div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;"><button class="btn-delete-item" onclick="removeItem(${item.id})" style="padding:5px 12px;font-size:0.8rem;"><i class="fas fa-minus"></i></button><span style="color:#fff;display:flex;align-items:center;min-width:20px;justify-content:center;">${item.quantity || 1}</span><button class="btn-delete-item" onclick="addToCartForId(${item.id})" style="padding:5px 12px;font-size:0.8rem;background:#4ade80;border-color:#4ade80;"><i class="fas fa-plus"></i></button><button class="btn-delete-item" onclick="removeItemCompletely(${item.id})" style="margin-left:auto;background:#ff4444;border-color:#ff4444;"><i class="fas fa-trash"></i> Supprimer</button></div></div>`;
        cartContainer.appendChild(itemElement);
    });
    updateOrderSummary();
}

function calculateDeliveryCost() { const selectedDelivery = document.querySelector('input[name="delivery"]:checked'); if (!selectedDelivery) return 0; return DELIVERY_PRICES[selectedDelivery.value] || 0; }
function updateDeliveryDisplay() { const deliveryCost = calculateDeliveryCost(); const deliveryElement = document.querySelector('.summary-bar-value.free'); if (!deliveryElement) return; deliveryElement.style.transition = 'all 0.3s ease'; deliveryElement.style.opacity = '0.7'; setTimeout(() => { if (deliveryCost === 0) { deliveryElement.textContent = 'Gratuit'; deliveryElement.className = 'summary-bar-value free'; deliveryElement.style.color = '#4ade80'; } else { deliveryElement.textContent = `${deliveryCost.toLocaleString()} DA`; deliveryElement.className = 'summary-bar-value'; deliveryElement.style.color = '#ff6b00'; } deliveryElement.style.opacity = '1'; }, 150); }
function updateOrderSummary() { const subtotal = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0); const deliveryCost = calculateDeliveryCost(); const discountElement = document.querySelector('.summary-bar-value.discount'); let discount = 0; if (discountElement && discountElement.textContent.includes('-')) { discount = parseInt(discountElement.textContent.replace(/[^0-9]/g, '')) || 0; } const total = Math.max(0, subtotal + deliveryCost - discount); updateDeliveryDisplay(); const totalElement = document.querySelector('.summary-total-value'); if (totalElement) { totalElement.style.transition = 'all 0.3s ease'; totalElement.style.transform = 'scale(1.1)'; setTimeout(() => totalElement.style.transform = 'scale(1)', 200); totalElement.textContent = `${total.toLocaleString()} DA`; } }

function applyPromoCode() { const promoInput = document.querySelector('.promo-input'); const promoCode = promoInput ? promoInput.value.trim().toUpperCase() : ''; const promoCodes = { 'GAMING20': 2000, 'WELCOME': 1500, 'NEWUSER': 1000, 'SAVE2K': 2000 }; const discount = promoCodes[promoCode]; if (discount) { const discountElement = document.querySelector('.summary-bar-value.discount'); if (discountElement) discountElement.textContent = `-${discount.toLocaleString()} DA`; showToast(`Code promo appliqué: -${discount.toLocaleString()} DA`, 'success'); updateOrderSummary(); } else { showToast('Code promo invalide', 'error'); } }
function confirmOrder() { if (cart.length === 0) { showToast('Votre panier est vide', 'error'); return; } const form = document.getElementById('checkoutForm'); if (form && !form.checkValidity()) { showToast('Veuillez remplir tous les champs', 'error'); form.reportValidity(); return; } const deliveryCost = calculateDeliveryCost(); const total = document.querySelector('.summary-total-value')?.textContent || '0 DA'; const confirmMessage = `📦 Récapitulatif :\nArticles: ${cart.length}\nLivraison: ${deliveryCost === 0 ? 'Gratuit' : deliveryCost + ' DA'}\n💰 TOTAL: ${total}\n⚠️ Confirmez-vous ?`; if (confirm(confirmMessage)) { showToast('Commande confirmée ! ✓', 'success'); cart = []; updateCartCounter(); updateCartDisplay(); saveCart(); const confirmBtn = document.querySelector('.btn-confirm-order'); if (confirmBtn) { confirmBtn.disabled = true; confirmBtn.style.opacity = '0.6'; confirmBtn.textContent = 'Commande envoyée...'; } setTimeout(() => { alert('Merci ! Commande enregistrée.'); }, 1000); } }

function showToast(message, type = 'success') { const toast = document.getElementById('toast'); const toastMessage = document.getElementById('toast-message'); if (!toast || !toastMessage) { alert(message); return; } const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' }; const colors = { success: '#4ade80', error: '#ff4444', info: '#0066ff' }; toast.querySelector('i').className = `fas ${icons[type]}`; toast.querySelector('i').style.color = colors[type]; toast.style.borderColor = colors[type]; toastMessage.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); }

function togglePayment(method) { const cardForm = document.getElementById('card-form'); const paypalForm = document.getElementById('paypal-form'); if (cardForm) cardForm.classList.remove('active'); if (paypalForm) paypalForm.classList.remove('active'); if (method === 'card' && cardForm) cardForm.classList.add('active'); else if (method === 'paypal' && paypalForm) paypalForm.classList.add('active'); }
function formatCardNumber(value) { const cleaned = value.replace(/\s/g, ''); const matches = cleaned.match(/.{1,4}/g); return matches ? matches.join(' ') : cleaned; }
function validatePayment() { const selectedMethod = document.querySelector('input[name="payment_method"]:checked'); if (!selectedMethod) { showToast('Veuillez sélectionner un mode de paiement', 'error'); return false; } let message = ''; switch(selectedMethod.value) { case 'card': const cardNumber = document.getElementById('card-number')?.value.trim(); const cardName = document.getElementById('card-name')?.value.trim(); const cardDate = document.getElementById('card-date')?.value.trim(); const cardCVV = document.getElementById('card-cvv')?.value.trim(); if (cardNumber && cardName && cardDate && cardCVV) { if (cardNumber.replace(/\s/g, '').length < 16) { showToast('Numéro de carte incomplet', 'error'); return false; } message = 'Paiement par carte validé !'; } else { showToast('Remplissez les champs carte', 'error'); return false; } break; case 'paypal': const paypalEmail = document.querySelector('.paypal-input')?.value.trim(); if (paypalEmail && paypalEmail.includes('@')) message = 'Redirection vers PayPal...'; else { showToast('Email PayPal invalide', 'error'); return false; } break; case 'cod': message = 'Paiement à la livraison.'; break; } showToast(message, 'success'); const validateBtn = document.getElementById('validateBtn'); if (validateBtn) { validateBtn.innerHTML = '<i class="fas fa-check"></i> Validé'; validateBtn.style.background = '#22c55e'; validateBtn.disabled = true; } return true; }

function handleCheckout(event) { event.preventDefault(); const telephone = document.getElementById('telephone')?.value || ''; if (!/^[0-9]{10}$/.test(telephone)) { showToast('Numéro invalide', 'error'); return; } showToast('Infos enregistrées ✓', 'success'); const deliverySection = document.querySelector('.delivery-options'); if (deliverySection) deliverySection.scrollIntoView({ behavior: 'smooth' }); }

function setupEventListeners() { document.querySelectorAll('input[name="delivery"]').forEach(radio => { radio.addEventListener('change', () => { updateOrderSummary(); showToast(`✓ Livraison sélectionnée`, 'info'); }); }); const promoBtn = document.querySelector('.btn-apply-promo'); if (promoBtn) promoBtn.addEventListener('click', (e) => { e.preventDefault(); applyPromoCode(); }); const confirmBtn = document.querySelector('.btn-confirm-order'); if (confirmBtn) confirmBtn.addEventListener('click', (e) => { e.preventDefault(); confirmOrder(); }); document.querySelectorAll('.btn-add-cart').forEach(btn => { btn.addEventListener('click', (e) => { e.preventDefault(); addToCart('sea-of-stars'); }); }); const checkoutForm = document.getElementById('checkoutForm'); if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout); const validateBtn = document.getElementById('validateBtn'); if (validateBtn) validateBtn.addEventListener('click', (e) => { e.preventDefault(); validatePayment(); }); const cardNumberInput = document.getElementById('card-number'); if (cardNumberInput) cardNumberInput.addEventListener('input', function(e) { e.target.value = formatCardNumber(e.target.value); }); }

document.addEventListener('DOMContentLoaded', () => { loadCart(); setupEventListeners(); updateCartDisplay(); updateDeliveryDisplay(); });
window.getCart = () => cart; window.clearCart = () => { cart = []; updateCartCounter(); updateCartDisplay(); saveCart(); showToast('Panier vidé', 'info'); };
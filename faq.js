document.addEventListener('DOMContentLoaded', function() {
    initializeFAQPage();
});

function initializeFAQPage() {
    setupFAQEventListeners();
    initializeFAQItems();
    updateCartAndFavorites();
}

function setupFAQEventListeners() {

    const faqSearch = document.getElementById('faqSearch');
    const faqSearchBtn = document.getElementById('faqSearchBtn');
    
    faqSearchBtn.addEventListener('click', function() {
        searchFAQ(faqSearch.value);
    });
    
    faqSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchFAQ(this.value);
        }
    });
    
    faqSearch.addEventListener('input', function() {
        if (this.value === '') {
            clearSearch();
        }
    });
    
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
       
            categoryBtns.forEach(b => b.classList.remove('active'));

            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterFAQByCategory(category);
        });
    });
    
    updateCartAndFavorites();
}

function searchFAQ(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        clearSearch();
        return;
    }
    
    const faqItems = document.querySelectorAll('.faq-item');
    const faqSections = document.querySelectorAll('.faq-section');
    const noResults = document.getElementById('noResults');
    let foundResults = false;
    
    faqSections.forEach(section => {
        section.classList.add('hidden');
    });
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            item.parentElement.parentElement.classList.remove('hidden');
            item.parentElement.parentElement.classList.add('visible');
            foundResults = true;
            
            if (!item.classList.contains('active')) {
                item.classList.add('active');
            }
        } else {
            item.style.display = 'none';
        }
    });
    
    if (!foundResults) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
    const firstVisibleSection = document.querySelector('.faq-section.visible');
    if (firstVisibleSection) {
        firstVisibleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function clearSearch() {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqSections = document.querySelectorAll('.faq-section');
    const noResults = document.getElementById('noResults');
    
    faqSections.forEach(section => {
        section.classList.remove('hidden');
        section.classList.remove('visible');
    });
    
    faqItems.forEach(item => {
        item.style.display = 'block';
    });
    
    noResults.style.display = 'none';
}

function filterFAQByCategory(category) {
    const faqSections = document.querySelectorAll('.faq-section');
    const noResults = document.getElementById('noResults');
    
    if (category === 'all') {
  
        faqSections.forEach(section => {
            section.style.display = 'block';
        });
        noResults.style.display = 'none';
        return;
    }
    
    let foundResults = false;
    
    faqSections.forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSections = document.querySelectorAll(`.faq-section[data-category="${category}"]`);
    targetSections.forEach(section => {
        section.style.display = 'block';
        foundResults = true;
    });
    
    if (!foundResults) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
    const firstSection = document.querySelector(`.faq-section[data-category="${category}"]`);
    if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function initializeFAQItems() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
       
            const parentSection = this.closest('.faq-items');
            const siblings = parentSection.querySelectorAll('.faq-item');
            
            siblings.forEach(sibling => {
                if (sibling !== item) {
                    sibling.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
}

function updateCartAndFavorites() {
   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteCount = document.querySelector('.favorite-count');
    favoriteCount.textContent = favorites.length;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('active');
}

function hideLoading() {
    const loading = document.getElementById('loading');
    loading.classList.remove('active');
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

const cartIcon = document.querySelector('.cart-icon');
const closeCart = document.querySelector('.close-cart');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');

if (cartIcon) {
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartDisplay();
    });
}

if (closeCart) {
    closeCart.addEventListener('click', closeCartSidebar);
}

if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartSidebar);
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 20px;"></i>
                <p style="color: var(--gray-color); text-align: center;">سلة التسوق فارغة</p>
                <a href="index.html#products" class="cta-button" style="display: block; text-align: center; margin-top: 15px;">تسوق الآن</a>
            </div>
        `;
        totalPrice.textContent = '0.00 $';
        return;
    }
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${item.price} $</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalPrice.textContent = `${total.toFixed(2)} $`;
    
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function updateCartQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartAndFavorites();
        }
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartAndFavorites();
    showNotification('تم إزالة المنتج من السلة', 'info');
}

const checkoutBtn = document.querySelector('.checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (cart.length === 0) {
            showNotification('سلة التسوق فارغة. أضف بعض المنتجات أولاً.', 'error');
            return;
        }
        
        showNotification('سيتم توجيهك إلى صفحة الدفع...', 'success');
        
        setTimeout(() => {
       
            localStorage.removeItem('cart');
            updateCartDisplay();
            updateCartAndFavorites();
            closeCartSidebar();
            showNotification('تم إتمام الطلب بنجاح! شكراً لشرائك.', 'success');
        }, 2000);
    });
}

window.addEventListener('load', function() {
    setTimeout(() => {
        hideLoading();
    }, 1000);
});
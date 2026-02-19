document.addEventListener('DOMContentLoaded', function() {
    initializeShippingPage();
});

function initializeShippingPage() {
    setupShippingEventListeners();
    initializeFAQ();
    updateCartAndFavorites();
}

function setupShippingEventListeners() {
    const trackOrderBtn = document.getElementById('trackOrder');
    const orderNumberInput = document.getElementById('orderNumber');
    const trackingResult = document.getElementById('trackingResult');
    
    trackOrderBtn.addEventListener('click', function() {
        const orderNumber = orderNumberInput.value.trim();
        
        if (orderNumber === '') {
            showNotification('يرجى إدخال رقم الطلب', 'error');
            return;
        }
        
        showLoading();
        
        setTimeout(() => {
            hideLoading();
            
            if (orderNumber.length >= 3) {
                trackingResult.style.display = 'block';
                trackingResult.scrollIntoView({ behavior: 'smooth' });
                showNotification('تم العثور على تفاصيل الطلب', 'success');
            } else {
                showNotification('رقم الطلب غير صحيح', 'error');
            }
        }, 1500);
    });
    
    orderNumberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            trackOrderBtn.click();
        }
    });
    
    updateCartAndFavorites();
}

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
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
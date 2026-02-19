document.addEventListener('DOMContentLoaded', function() {
    initializeRegisterPage();
});

function initializeRegisterPage() {
    setupRegisterEventListeners();
    updateCartAndFavorites();
}

function setupRegisterEventListeners() {
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            
            if (passwordInput) {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                const icon = this.querySelector('i');
                icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
            }
        });
    });
    
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegistration();
        });
    }
    
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            showNotification('جاري التوجيه إلى إنشاء حساب بحساب جوجل...', 'info');
            setTimeout(() => {
                showNotification('تم إنشاء الحساب بنجاح باستخدام جوجل!', 'success');
                redirectToDashboard();
            }, 2000);
        });
    }
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            showNotification('جاري التوجيه إلى إنشاء حساب بحساب فيسبوك...', 'info');
            setTimeout(() => {
                showNotification('تم إنشاء الحساب بنجاح باستخدام فيسبوك!', 'success');
                redirectToDashboard();
            }, 2000);
        });
    }
}

function handleRegistration() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const agreeTerms = document.getElementById('agreeTerms').checked;
    const newsletter = document.getElementById('newsletter').checked;
    const registerBtn = document.getElementById('registerBtn');
    
    if (!validateForm(fullName, email, password, confirmPassword, agreeTerms)) {
        return;
    }
    
    registerBtn.disabled = true;
    registerBtn.classList.add('btn-loading');
    
    setTimeout(() => {
        registerBtn.disabled = false;
        registerBtn.classList.remove('btn-loading');
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(u => u.email === email);
        
        if (existingUser) {
            showNotification('هذا البريد الإلكتروني مسجل بالفعل!', 'error');
            return;
        }
        
        const newUser = {
            id: Date.now().toString(),
            name: fullName,
            email: email,
            phone: phone,
            password: password,
            newsletter: newsletter,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        const userSession = {
            isLoggedIn: true,
            userId: newUser.id,
            email: newUser.email,
            name: newUser.name,
            rememberMe: true
        };
        
        localStorage.setItem('currentUser', JSON.stringify(userSession));
        
        showNotification('تم إنشاء حسابك بنجاح!', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    }, 1500);
}

function validateForm(fullName, email, password, confirmPassword, agreeTerms) {
    if (fullName.length < 3) {
        showNotification('الاسم الكامل يجب أن يكون 3 أحرف على الأقل', 'error');
        return false;
    }
    
    if (!validateEmail(email)) {
        showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showNotification('كلمتا المرور غير متطابقتين', 'error');
        return false;
    }
    
    if (!agreeTerms) {
        showNotification('يجب الموافقة على الشروط والأحكام', 'error');
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function redirectToDashboard() {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function updateCartAndFavorites() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteCount = document.querySelector('.favorite-count');
    if (favoriteCount) {
        favoriteCount.textContent = favorites.length;
    }
}

function showNotification(message, type = 'info') {
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type] || icons.info}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transition: all 0.3s ease;
        max-width: 350px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: inherit;
    `;
    
    document.body.appendChild(notification);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });

    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 4000);
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
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 20px;"></i>
                <p style="color: var(--gray-color); text-align: center;">سلة التسوق فارغة</p>
                <a href="index.html#products" class="cta-button" style="display: block; text-align: center; margin-top: 15px;">تسوق الآن</a>
            </div>
        `;
        if (totalPrice) totalPrice.textContent = '0.00 $';
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
    
    if (totalPrice) totalPrice.textContent = `${total.toFixed(2)} $`;
    
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
        const loading = document.getElementById('loading');
        if (loading) loading.classList.remove('active');
    }, 1000);
});
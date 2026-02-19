document.addEventListener('DOMContentLoaded', function() {
    initializeTrackingPage();
});

function initializeTrackingPage() {
    setupTrackingEventListeners();
    updateCartAndFavorites();
}

function setupTrackingEventListeners() {
    const searchOptions = document.querySelectorAll('.search-option');
    const orderNumberGroup = document.getElementById('orderNumberGroup');
    const emailGroup = document.getElementById('emailGroup');
    const phoneGroup = document.getElementById('phoneGroup');
    
    searchOptions.forEach(option => {
        option.addEventListener('click', function() {
            searchOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            const searchType = this.getAttribute('data-type');
            
            orderNumberGroup.style.display = 'none';
            emailGroup.style.display = 'none';
            phoneGroup.style.display = 'none';
            
            if (searchType === 'order') {
                orderNumberGroup.style.display = 'block';
            } else if (searchType === 'email') {
                emailGroup.style.display = 'block';
            } else if (searchType === 'phone') {
                phoneGroup.style.display = 'block';
            }
        });
    });
    
    const trackingForm = document.getElementById('trackingForm');
    
    trackingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const activeOption = document.querySelector('.search-option.active');
        const searchType = activeOption.getAttribute('data-type');
        let searchValue = '';
        
        if (searchType === 'order') {
            searchValue = document.getElementById('orderNumber').value.trim();
        } else if (searchType === 'email') {
            searchValue = document.getElementById('email').value.trim();
        } else if (searchType === 'phone') {
            searchValue = document.getElementById('phone').value.trim();
        }
        
        if (searchValue === '') {
            showNotification('يرجى إدخال البيانات المطلوبة', 'error');
            return;
        }
        
        trackOrder(searchType, searchValue);
    });
    
    const tryButtons = document.querySelectorAll('.try-btn');
    tryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const orderNumber = this.getAttribute('data-order');
            document.getElementById('orderNumber').value = orderNumber;
            
            searchOptions.forEach(opt => opt.classList.remove('active'));
            document.querySelector('[data-type="order"]').classList.add('active');
            orderNumberGroup.style.display = 'block';
            emailGroup.style.display = 'none';
            phoneGroup.style.display = 'none';
            
            trackOrder('order', orderNumber);
        });
    });
    
    updateCartAndFavorites();
}

function trackOrder(searchType, searchValue) {
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        
        const trackingResults = document.getElementById('trackingResults');
        const sampleOrders = {
            'ORD-123456': {
                status: 'delivered',
                date: '15 مارس 2024',
                total: '449.99 $',
                payment: 'الدفع عند الاستلام',
                shipping: 'التوصيل السريع',
                address: 'القاهرة - التجمع التالت - القطامية - عمارة 123 - الشقة 45',
                name: 'محمد أحمد',
                phone: '+201154589632'
            },
            'ORD-789123': {
                status: 'preparing',
                date: '16 مارس 2024',
                total: '189.99 $',
                payment: 'بطاقة ائتمان',
                shipping: 'التوصيل العادي',
                address: 'الجيزة - العياط - بجوار محطة القطار',
                name: 'أحمد حسن',
                phone: '+201236589745'
            },
            'ORD-456789': {
                status: 'shipping',
                date: '14 مارس 2024',
                total: '329.99 $',
                payment: 'الدفع عند الاستلام',
                shipping: 'التوصيل السريع',
                address: 'القليوبية - المنصورة - شارع السوق',
                name: 'فاطمة علي',
                phone: '+011012021025'
            },
            'ORD-321654': {
                status: 'delivered',
                date: '12 مارس 2024',
                total: '149.99 $',
                payment: 'بطاقة ائتمان',
                shipping: 'التوصيل العادي',
                address: 'القاهرة - حلوان - بجوار دهب مول',
                name: 'خالد سعيد',
                phone: '+210105849848'
            }
        };
        
        let orderData;
        
        if (searchType === 'order' && sampleOrders[searchValue]) {
            orderData = sampleOrders[searchValue];
        } else {
            orderData = sampleOrders['ORD-123456'];
            showNotification('لم نعثر على الطلب، عرض بيانات تجريبية', 'info');
        }
        
        updateOrderDisplay(searchValue, orderData);
        
        trackingResults.style.display = 'block';
        trackingResults.scrollIntoView({ behavior: 'smooth' });
        
        showNotification('تم العثور على تفاصيل الطلب', 'success');
    }, 1500);
}

function updateOrderDisplay(orderNumber, orderData) {
    document.getElementById('displayOrderNumber').textContent = orderNumber;
    document.getElementById('orderDate').textContent = orderData.date;
    document.getElementById('orderTotal').textContent = orderData.total;
    document.getElementById('paymentMethod').textContent = orderData.payment;
    document.getElementById('shippingMethod').textContent = orderData.shipping;
    
    const statusElement = document.getElementById('orderStatus');
    statusElement.textContent = getStatusText(orderData.status);
    statusElement.className = 'order-status ' + orderData.status;
    
    document.getElementById('shippingAddress').textContent = orderData.address;
    document.getElementById('customerName').textContent = orderData.name;
    document.getElementById('customerPhone').textContent = orderData.phone;
    
    updateTimeline(orderData.status);
}

function getStatusText(status) {
    const statusMap = {
        'preparing': 'جاري التجهيز',
        'shipping': 'قيد الشحن',
        'delivered': 'تم التوصيل'
    };
    return statusMap[status] || 'قيد المعالجة';
}

function updateTimeline(status) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.classList.remove('completed', 'current', 'pending');
        item.classList.add('pending');
    });
    
    if (status === 'preparing') {
        timelineItems[0].classList.remove('pending');
        timelineItems[0].classList.add('completed');
        timelineItems[1].classList.remove('pending');
        timelineItems[1].classList.add('current');
    } else if (status === 'shipping') {
        timelineItems[0].classList.remove('pending');
        timelineItems[0].classList.add('completed');
        timelineItems[1].classList.remove('pending');
        timelineItems[1].classList.add('completed');
        timelineItems[2].classList.remove('pending');
        timelineItems[2].classList.add('completed');
        timelineItems[3].classList.remove('pending');
        timelineItems[3].classList.add('current');
    } else if (status === 'delivered') {
        timelineItems.forEach(item => {
            item.classList.remove('pending');
            item.classList.add('completed');
        });
        timelineItems[5].classList.add('current');
    }
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
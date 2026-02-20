const products = [
    {
        id: 1,
        name: "تيشيرت رجالي",
        price: 49.99,
        originalPrice: 69.99,
        category: "men",
        image: "Product Image/2U6A1108.jpg",
        badge: "جديد",
        rating: 4.5,
        reviews: 23
    },
    {
        id: 2,
        name: "فستان نسائي",
        price: 89.99,
        originalPrice: 119.99,
        category: "women", 
        image: "Product Image/DSC6864.jpg",
        badge: "عرض",
        rating: 4.8,
        reviews: 45
    },
    {
        id: 3,
        name: "جينز أطفال",
        price: 39.99,
        category: "kids",
        image: "Product Image/جينز اطفال.jpg",
        rating: 4.2,
        reviews: 12
    },
    {
        id: 4,
        name: "جينز رجالي",
        price: 129.99,
        originalPrice: 159.99,
        category: "men",
        image: "Product Image/DS11.jpg",
        badge: "الأكثر مبيعاً",
        rating: 4.7,
        reviews: 67
    },
    {
        id: 5,
        name: "بلوزة نسائية",
        price: 59.99,
        category: "women",
        image: "Product Image/DSC6866.jpg",
        rating: 4.3,
        reviews: 34
    },
    {
        id: 6,
        name: "قميص أطفال", 
        price: 29.99,
        category: "kids",
        image: "Product Image/قميص ط.jpg",
        badge: "جديد",
        rating: 4.6,
        reviews: 18
    },
    {
        id: 7,
        name: "جاكيت رجالي",
        price: 199.99,
        originalPrice: 249.99,
        category: "men",
        image: "Product Image/جاكت.jpg",
        badge: "محدود",
        rating: 4.9,
        reviews: 89
    },
    {
        id: 8,
        name: "تنورة نسائية",
        price: 69.99,
        category: "women",
        image: "Product Image/DSC6867.jpg",
        rating: 4.4,
        reviews: 27
    },
    {
        id: 9,
        name: "بدلة رجالية رسمية",
        price: 299.99,
        originalPrice: 399.99,
        category: "men",
        image: "Product Image/بدلة رجالي.jpg",
        badge: "عرض خاص",
        rating: 4.8,
        reviews: 56
    },
    {
        id: 10,
        name: "بدلة نسائي رسمية",
        price: 149.99,
        originalPrice: 199.99,
        category: "women",
        image: "Product Image/بدلة.jpg",
        badge: "جديد",
        rating: 4.6,
        reviews: 42
    },
    {
        id: 11,
        name: "سويت شيرت أطفال",
        price: 45.99,
        category: "kids",
        image: "Product Image/سويت شيرت.jpg",
        badge: "شتوي",
        rating: 4.3,
        reviews: 19
    },
    {
        id: 12,
        name: "قميص رجالي كاجوال",
        price: 79.99,
        category: "men",
        image: "Product Image/قميص كاجول.jpg",
        rating: 4.4,
        reviews: 38
    },
    {
        id: 13,
        name: "بنطلون جينز نسائي",
        price: 99.99,
        originalPrice: 129.99,
        category: "women",
        image: "Product Image/بنطلون جينز نسائي.jpg",
        badge: "الأكثر مبيعاً",
        rating: 4.7,
        reviews: 78
    },
    {
        id: 14,
        name: "حذاء أطفال رياضي",
        price: 65.99,
        category: "kids",
        image: "Product Image/حذاء.jpg",
        badge: "جديد",
        rating: 4.5,
        reviews: 24
    },
    {
        id: 15,
        name: "بلوفر رجالي",
        price: 159.99,
        originalPrice: 209.99,
        category: "men",
        image: "Product Image/بلوفر.jpg",
        badge: "عرض",
        rating: 4.6,
        reviews: 31
    },
    {
        id: 16,
        name: "فستان ميدي",
        price: 249.99,
        originalPrice: 329.99,
        category: "women",
        image: "Product Image/فستان.jpg",
        badge: "مميز",
        rating: 4.9,
        reviews: 63
    },
    {
        id: 17,
        name: "بدلة سباحة أطفال",
        price: 35.99,
        category: "kids",
        image: "Product Image/ملابس سباحة اطفالي.jpg",
        badge: "صيفي",
        rating: 4.2,
        reviews: 15
    },
    {
        id: 18,
        name: "جاكت كوخ رجالي",
        price: 349.99,
        originalPrice: 449.99,
        category: "men",
        image: "Product Image/بالطو.jpg",
        badge: "محدود",
        rating: 4.8,
        reviews: 47
    },
    {
        id: 19,
        name: "شال نسائي",
        price: 29.99,
        category: "women",
        image: "Product Image/شال.jpg",
        rating: 4.3,
        reviews: 29
    },
    {
        id: 20,
        name: "طاقية أطفال",
        price: 19.99,
        category: "kids",
        image: "Product Image/طاقية.jpg",
        badge: "جديد",
        rating: 4.1,
        reviews: 22
    },
    {
        id: 21,
        name: "حقيبة رجالية",
        price: 89.99,
        originalPrice: 119.99,
        category: "men",
        image: "Product Image/حقيبة رجالي.jpg",
        badge: "عرض",
        rating: 4.5,
        reviews: 41
    },
    {
        id: 22,
        name: "حذاء كعب عالي",
        price: 129.99,
        category: "women",
        image: "Product Image/كعب.jpg",
        badge: "أنيق",
        rating: 4.7,
        reviews: 58
    },
    {
        id: 23,
        name: "حقيبة ظهر أطفال",
        price: 39.99,
        category: "kids",
        image: "Product Image/حقيبة.jpg",
        rating: 4.4,
        reviews: 17
    },
    {
        id: 24,
        name: "نظارة شمسية رجالية",
        price: 49.99,
        originalPrice: 69.99,
        category: "men",
        image: "Product Image/نظارة.jpg",
        badge: "صيفي",
        rating: 4.6,
        reviews: 33
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let favoriteProducts = JSON.parse(localStorage.getItem('favorites')) || [];
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let sliderInterval;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeUserManagement();
    debugUserStatus(); 
});

function initializeApp() {
    displayProducts(products);
    setupEventListeners();
    updateCartCount();
    updateFavoriteCount();
    updateCategoryCounts();
    startSlider();
    updateCartDisplay();
    
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) loading.classList.remove('active');
    }, 1000);
}

function setupEventListeners() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            showLoading();
            
            setTimeout(() => {
                filterProducts(currentFilter);
                hideLoading();
            }, 300);
        });
    });
    
    const cartIcon = document.querySelector('.cart-icon');
    const closeCart = document.querySelector('.close-cart');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', openCartSidebar);
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.', 'success');
            this.reset();
        });
    }
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
        
        updateCartProgress();
    });
    
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (this.value.length > 2) {
                searchProducts(this.value);
            } else if (this.value.length === 0) {
                const resultsContainer = document.getElementById('searchResults');
                if (resultsContainer) {
                    resultsContainer.style.display = 'none';
                }
                displayProducts(products);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            if (searchInput && searchInput.value.length > 0) {
                searchProducts(searchInput.value);
            }
        });
    }
    
    const sliderNext = document.querySelector('.slider-next');
    const sliderPrev = document.querySelector('.slider-prev');
    
    if (sliderNext) sliderNext.addEventListener('click', nextSlide);
    if (sliderPrev) sliderPrev.addEventListener('click', prevSlide);
    
    const newsletterBtn = document.querySelector('.newsletter button');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const emailInput = this.parentElement.querySelector('input');
            if (emailInput && validateEmail(emailInput.value)) {
                showNotification('شكراً للاشتراك في نشرتنا البريدية!', 'success');
                emailInput.value = '';
            } else {
                showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            }
        });
    }
    
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', processCheckout);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCartSidebar();
        }
    });
}

function openCartSidebar() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartSidebar() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 20px;"></i>
                <h3 style="color: var(--gray-color);">لم يتم العثور على منتجات</h3>
                <p>جرب البحث بكلمات أخرى أو استعرض جميع المنتجات</p>
                <button class="cta-button" onclick="filterProducts('all')" style="margin-top: 15px;">عرض جميع المنتجات</button>
            </div>
        `;
        return;
    }
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<span class="product-badge">${product.badge}</span>`;
        }
        
        let originalPriceHTML = '';
        if (product.originalPrice) {
            originalPriceHTML = `<span class="original-price">${product.originalPrice} $</span>`;
        }
        
        const isFavorite = favoriteProducts.includes(product.id);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x400?text=صورة+غير+متوفرة'">
                ${badgeHTML}
                <div class="product-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${product.price} $</span>
                    ${originalPriceHTML}
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    أضف إلى السلة
                </button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            toggleFavorite(productId, this);
        });
    });
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function filterProducts(category) {
    console.log('جاري تصفية المنتجات حسب:', category);
    
    let filteredProducts;
    
    if (category === 'all') {
        filteredProducts = products;
    } else if (category === 'sale') {
        filteredProducts = products.filter(product => product.originalPrice);
    } else if (category === 'men' || category === 'women' || category === 'kids') {
        filteredProducts = products.filter(product => product.category === category);
    } else {
        filteredProducts = products;
    }
    
    console.log('المنتجات المصفاة:', filteredProducts.length); 
    displayProducts(filteredProducts);
    
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function searchProducts(query) {
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        (product.badge && product.badge.toLowerCase().includes(query.toLowerCase()))
    );
    
    const resultsContainer = document.getElementById('searchResults');
    const resultsCount = document.getElementById('resultsCount');
    
    if (resultsContainer && resultsCount) {
        if (searchResults.length > 0) {
            resultsContainer.style.display = 'block';
            resultsCount.textContent = `عثرنا على ${searchResults.length} منتج لـ "${query}"`;
        } else {
            resultsContainer.style.display = 'block';
            resultsCount.textContent = `لم نعثر على منتجات لـ "${query}"`;
        }
    }
    
    displayProducts(searchResults);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        saveCartToStorage();
        updateCartCount();
        updateCartDisplay();
        updateCartProgress();
        showNotification(`تم إضافة ${product.name} إلى سلة التسوق`, 'success');
        
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.classList.add('pulse');
            setTimeout(() => cartIcon.classList.remove('pulse'), 600);
        }
    }
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    const cartSubtotal = document.querySelector('.cart-subtotal');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 20px;"></i>
                <p style="color: var(--gray-color); text-align: center;">سلة التسوق فارغة</p>
                <a href="#products" class="cta-button" style="display: block; text-align: center; margin-top: 15px;">تسوق الآن</a>
            </div>
        `;
        if (totalPrice) totalPrice.textContent = '0.00 $';
        if (cartSubtotal) cartSubtotal.textContent = '0.00 $';
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
                <img src="${item.image}" alt="${item.name}" loading="lazy">
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
    if (cartSubtotal) cartSubtotal.textContent = `${total.toFixed(2)} $`;
    
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
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartToStorage();
            updateCartCount();
            updateCartDisplay();
            updateCartProgress();
        }
    }
}

function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    updateCartProgress();
    showNotification(`تم إزالة ${product.name} من السلة`, 'info');
}

function updateCartProgress() {
    const progressBar = document.getElementById('progressBar');
    const cartProgress = document.getElementById('cartProgress');
    const progressText = document.getElementById('progressText');
    
    if (!progressBar || !cartProgress) return;
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (totalItems > 0) {
        cartProgress.style.display = 'block';
        const progress = Math.min((totalItems / 10) * 100, 100);
        progressBar.style.width = `${progress}%`;
        
        if (progressText) {
            const itemsNeeded = Math.max(0, 10 - totalItems);
            progressText.textContent = itemsNeeded === 0 ? 
                'لقد وصلت للشحن المجاني!' : 
                `أضف ${itemsNeeded} منتجات أخرى للشحن المجاني`;
        }
    } else {
        cartProgress.style.display = 'none';
    }
}

function toggleFavorite(productId, button) {
    const index = favoriteProducts.indexOf(productId);
    const product = products.find(p => p.id === productId);
    
    if (index > -1) {
        favoriteProducts.splice(index, 1);
        button.classList.remove('active');
        showNotification(`تم إزالة ${product.name} من المفضلة`, 'info');
    } else {
        favoriteProducts.push(productId);
        button.classList.add('active');
        showNotification(`تم إضافة ${product.name} إلى المفضلة`, 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favoriteProducts));
    updateFavoriteCount();
}

function updateFavoriteCount() {
    const favoriteCount = document.querySelector('.favorite-count');
    if (favoriteCount) {
        favoriteCount.textContent = favoriteProducts.length;
        favoriteCount.style.display = favoriteProducts.length > 0 ? 'flex' : 'none';
    }
}

function updateCategoryCounts() {
    const menCount = products.filter(p => p.category === 'men').length;
    const womenCount = products.filter(p => p.category === 'women').length;
    const kidsCount = products.filter(p => p.category === 'kids').length;
    
    document.querySelectorAll('.category-count').forEach((span, index) => {
        if (index === 0) span.textContent = `${menCount} منتجات`;
        if (index === 1) span.textContent = `${womenCount} منتجات`;
        if (index === 2) span.textContent = `${kidsCount} منتجات`;
    });
}

function showNotification(message, type = 'info') {
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
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
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#3498db'};
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

function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.add('active');
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.remove('active');
    }
}

function startSlider() {
    if (slides.length === 0) return;
    
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function processCheckout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    console.log('حالة المستخدم:', currentUser); 
    console.log('محتويات السلة:', cart);
    
    if (cart.length === 0) {
        showNotification('سلة التسوق فارغة. أضف بعض المنتجات أولاً.', 'error');
        return;
    }
    
    if (!currentUser || currentUser.isLoggedIn !== true) {
        showNotification('يرجى تسجيل الدخول لإتمام عملية الشراء', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    showNotification('جاري معالجة طلبك...', 'info');
    
    setTimeout(() => {
        showNotification('تم إتمام الطلب بنجاح! سيصلك تأكيد بالبريد الإلكتروني.', 'success');
        
        const order = {
            id: 'ORD-' + Date.now(),
            userId: currentUser.userId,
            date: new Date().toISOString(),
            items: [...cart],
            total: total,
            status: 'مكتمل',
            customerName: currentUser.name,
            customerEmail: currentUser.email
        };
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        cart.length = 0;
        saveCartToStorage();
        updateCartCount();
        updateCartDisplay();
        updateCartProgress();
        closeCartSidebar();
        
        console.log('تم إنشاء الطلب:', order);
    }, 2000);
}

function initializeUserManagement() {
    checkLoginStatus();
    setupUserEventListeners();
}

function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    console.log('التحقق من حالة المستخدم:', currentUser); 
    
    if (currentUser && currentUser.isLoggedIn === true) {
        updateNavForLoggedInUser(currentUser.name);
        return true;
    } else {
        resetLoginLink();
        return false;
    }
}

function resetLoginLink() {
    const loginLink = document.querySelector('.nav-link[href="login.html"]');
    if (loginLink) {
        loginLink.innerHTML = 'تسجيل الدخول';
        loginLink.href = "login.html";
        loginLink.classList.remove('user-profile');
        
        const newLoginLink = loginLink.cloneNode(true);
        loginLink.parentNode.replaceChild(newLoginLink, loginLink);
    }
}

function updateNavForLoggedInUser(userName) {
    const loginLink = document.querySelector('.nav-link[href="login.html"]');
    if (loginLink) {
        loginLink.innerHTML = `
            <i class="fas fa-user"></i>
            ${userName}
        `;
        loginLink.href = "#";
        loginLink.classList.add('user-profile');
        
        const newLink = loginLink.cloneNode(true);
        loginLink.parentNode.replaceChild(newLink, loginLink);
        
        newLink.addEventListener('click', function(e) {
            e.preventDefault();
            toggleUserDropdown();
        });
    }
}

function toggleUserDropdown() {
    const existingDropdown = document.querySelector('.user-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
        return;
    }
    
    const dropdown = document.createElement('div');
    dropdown.className = 'user-dropdown';
    dropdown.innerHTML = `
        <a href="profile.html"><i class="fas fa-user"></i> الملف الشخصي</a>
        <a href="orders.html"><i class="fas fa-shopping-bag"></i> طلباتي</a>
        <a href="wishlist.html"><i class="fas fa-heart"></i> المفضلة</a>
        <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
    `;
    
    const userLink = document.querySelector('.user-profile');
    userLink.parentNode.appendChild(dropdown);
    
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    document.addEventListener('click', function closeDropdown(e) {
        if (!userLink.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.remove();
            document.removeEventListener('click', closeDropdown);
        }
    });
}

function handleLogout(e) {
    e.preventDefault();
    
    localStorage.removeItem('currentUser');
    
    showNotification('تم تسجيل الخروج بنجاح', 'success');
    
    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

function setupUserEventListeners() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            if (cart.length === 0) {
                showNotification('سلة التسوق فارغة. أضف بعض المنتجات أولاً.', 'error');
                return;
            }
            
            if (!currentUser || !currentUser.isLoggedIn) {
                showNotification('يرجى تسجيل الدخول لإتمام عملية الشراء', 'warning');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
                return;
            }
            
            processCheckout();
        });
    }
}

function debugUserStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    console.log('=== حالة النظام ===');
    console.log('المستخدم الحالي:', currentUser);
    console.log('المستخدمين المسجلين:', users);
    console.log('السلة:', JSON.parse(localStorage.getItem('cart')) || []);
    console.log('==================');
}

window.filterProducts = filterProducts;
window.addToCart = addToCart;
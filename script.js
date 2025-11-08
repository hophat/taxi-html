// Taxi Lagi Bình Thuận - JavaScript
// Script đơn giản cho hiệu ứng smooth scroll và tương tác cơ bản
// Bao gồm cập nhật thông tin từ config file cho dễ quảng cáo

// Notification Banner Functionality
document.addEventListener('DOMContentLoaded', function() {
    const notificationBanner = document.getElementById('notification-banner');
    const closeBtn = document.querySelector('.notification-close');
    const body = document.body;

    // Check if banner was previously dismissed (using localStorage)
    const bannerDismissed = localStorage.getItem('notification-banner-dismissed');

    if (bannerDismissed === 'true') {
        notificationBanner.classList.add('hidden');
        body.classList.remove('banner-visible');
    } else {
        // Show banner and adjust layout
        body.classList.add('banner-visible');
    }

    // Close button functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            notificationBanner.classList.add('hidden');
            body.classList.remove('banner-visible');

            // Store dismissal in localStorage (persistent across reloads)
            localStorage.setItem('notification-banner-dismissed', 'true');
        });
    }
});

// Cập nhật thông tin từ config
function updateContactInfo() {
    if (window.taxiConfig) {
        // Cập nhật title và meta
        const titleElement = document.getElementById('page-title');
        if (titleElement) titleElement.textContent = taxiConfig.seo.title;

        const metaDesc = document.getElementById('meta-description');
        if (metaDesc) metaDesc.content = taxiConfig.seo.description;

        // Cập nhật tên công ty - bỏ qua vì giờ dùng logo
        // const companyName = document.getElementById('company-name');
        // if (companyName) companyName.textContent = taxiConfig.companyName;

        // Cập nhật số điện thoại
        const phoneElements = [
            document.getElementById('call-button'),
            document.getElementById('contact-phone'),
            document.getElementById('footer-phone')
        ];
        phoneElements.forEach(el => {
            if (el) {
                el.href = `tel:${taxiConfig.contact.phone}`;
                el.textContent = taxiConfig.contact.phone;
            }
        });

        // Cập nhật Zalo
        const zaloElements = [
            document.getElementById('zalo-button'),
            document.getElementById('contact-zalo'),
            document.getElementById('footer-zalo')
        ];
        zaloElements.forEach(el => {
            if (el) {
                el.href = taxiConfig.contact.zaloUrl();
                // Chỉ cập nhật text content cho các element có text, không cập nhật cho float button
                if (el.id !== 'zalo-button') {
                    el.textContent = taxiConfig.contact.zaloId;
                }
            }
        });

        // Cập nhật floating buttons
        const floatPhone = document.querySelector('.phone-btn');
        const floatZalo = document.querySelector('.zalo-btn');
        if (floatPhone) floatPhone.href = `tel:${taxiConfig.contact.phone}`;
        if (floatZalo) floatZalo.href = taxiConfig.contact.zaloUrl();

        // Cập nhật khu vực phục vụ
        const serviceArea = document.getElementById('service-area');
        if (serviceArea) serviceArea.textContent = taxiConfig.serviceArea;

        console.log('Contact info updated from config:', taxiConfig.contact);
    }
}

// Smooth scroll cho navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Thêm class active cho navigation khi scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Animation cho các element khi scroll vào view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Áp dụng animation cho service items và contact items
document.querySelectorAll('.service-item, .contact-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Click tracking cho các nút liên hệ (có thể tích hợp Google Analytics sau)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent.trim());
        // Có thể thêm tracking code ở đây
    });
});

// Mobile menu toggle (nếu cần thêm hamburger menu)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) {
        nav.classList.toggle('mobile-menu-open');
    }
}

// Thêm event listener cho mobile menu button (nếu có)
document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật thông tin liên hệ từ config
    updateContactInfo();

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
        });

        // Close menu when clicking outside or on a link
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('show');
            }
        });

        // Close menu when clicking on a menu item
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('show');
            });
        });
    }

    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const slideTitle = document.getElementById('slide-title');
    const slideDescription = document.getElementById('slide-description');

    // Slide content data
    const slideData = [
        {
            title: 'Chào Mừng Đến Với Taxi Lagi Bình Thuận',
            description: 'Dịch vụ taxi chất lượng cao tại Bình Thuận. Luôn sẵn sàng phục vụ bạn 24/7 với đội ngũ tài xế chuyên nghiệp.'
        },
        {
            title: 'Taxi Chuyên Nghiệp Bình Thuận',
            description: 'Đội ngũ tài xế giàu kinh nghiệm, phương tiện hiện đại, phục vụ tận tâm.'
        },
        {
            title: 'Dịch Vụ Đón Tiễn Sân Bay',
            description: 'Đón tiễn sân bay Phan Thiết đúng giờ, an toàn, giá cả hợp lý.'
        }
    ];

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Update content
        if (slideTitle && slideDescription) {
            slideTitle.textContent = slideData[index].title;
            slideDescription.textContent = slideData[index].description;
        }

        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto slide
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Thêm hiệu ứng loading nếu cần
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);

    // Log để debug
    console.log('Taxi Lagi Bình Thuận website loaded successfully');
});

// Fallback cho trình duyệt cũ không hỗ trợ IntersectionObserver
if (!window.IntersectionObserver) {
    document.querySelectorAll('.service-item, .contact-item').forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
}
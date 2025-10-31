script.js:
// Toggle technical notice
function toggleTechNotice() {
    const notice = document.getElementById('techNotice');
    notice.classList.toggle('active');
}

// Handle language change
const languageSelector = document.getElementById('language');
languageSelector.addEventListener('change', function() {
    const language = this.value;
    // Note: To fully support language change, you need to implement content updates here for every element.
    if (language === 'en') {
        document.querySelector('.tagline').textContent = 'Experts in Monitoring, Evaluation, Accountability and Learning systems for development and humanitarian projects';
        // Add more English translations here...
    } else {
        document.querySelector('.tagline').textContent = 'الخبراء في أنظمة الرصد والتقييم والمساءلة والتعلم للمشاريع التنموية والإنسانية';
        // Add more Arabic content here...
    }
});

// Handle resources tabs
const resourceTabs = document.querySelectorAll('.resource-tab');
resourceTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        resourceTabs.forEach(t => t.classList.remove('active'));
        // Add active class to current tab
        this.classList.add('active');
        
        // Hide all content sections
        document.querySelectorAll('.resource-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the content section related to the tab
        const tabId = this.getAttribute('data-tab');
        document.getElementById(`${tabId}-content`).classList.add('active');
    });
});

// Handle payment option selection
function selectPayment(element) {
    // Remove selected class from all options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    // Add selected class to clicked option
    element.classList.add('selected');
}

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = this.querySelectorAll('[required]');
    let valid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#e2e8f0';
        }
    });
    
    if (!valid) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // Simulate form submission and show success message
    alert('شكراً لك على رسالتك! سنتواصل معك في أقرب وقت ممكن.');
    contactForm.reset();
    
    // Reset payment selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation effects on scroll (using IntersectionObserver)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply effects to animated elements
document.querySelectorAll('.service-card, .testimonial, .feature, .news-item, .book-item, .expert-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize payment options event listeners
document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
        selectPayment(this);
    });
});

// Initialize country code dropdown (for logging purposes, or any future logic)
const countryCode = document.getElementById('countryCode');
if (countryCode) {
    countryCode.addEventListener('change', function() {
        console.log('Country code selected:', this.value);
    });
}

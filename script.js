// Language switching functionality
const translations = {
    en: {},
    pt: {}
};

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
    // Store original text (now Portuguese is default)
    document.querySelectorAll('[data-en]').forEach(element => {
        const enKey = element.getAttribute('data-en');
        const ptKey = element.getAttribute('data-pt');
        translations.en[enKey] = enKey;
        translations.pt[enKey] = ptKey;
    });
    
    // Set initial language to Portuguese
    switchLanguage('pt');
    
    // Language selector functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

function switchLanguage(lang) {
    // Update text content
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(input => {
        const key = input.getAttribute('data-placeholder-en');
        const ptKey = input.getAttribute('data-placeholder-pt');
        if (lang === 'pt' && ptKey) {
            input.placeholder = ptKey;
        } else {
            input.placeholder = key;
        }
    });
    
    // Update select options
    document.querySelectorAll('option[data-en]').forEach(option => {
        const key = option.getAttribute('data-en');
        const ptKey = option.getAttribute('data-pt');
        if (lang === 'pt' && ptKey) {
            option.textContent = ptKey;
        } else {
            option.textContent = key;
        }
    });
}

// Smooth Scrolling
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

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});


// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
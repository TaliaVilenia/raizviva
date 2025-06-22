// ====== OTHERWORLDLY RAIZ VIVA - COSMIC INTERACTIONS ======

// Performance optimizations
const setWillChange = (elements, properties) => {
    elements.forEach(el => {
        el.style.willChange = properties;
    });
};

// Language system with enhanced animations
const translations = {
    en: {},
    pt: {}
};

// Initialize cosmic functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSystem();
    initializeNavigation();
    initializeCosmicEffects();
    initializeScrollAnimations();
    initializePerformanceOptimizations();
});

// ====== LANGUAGE SYSTEM ======
function initializeLanguageSystem() {
    // Store original text with cosmic transitions
    document.querySelectorAll('[data-en]').forEach(element => {
        const enKey = element.getAttribute('data-en');
        const ptKey = element.getAttribute('data-pt');
        translations.en[enKey] = enKey;
        translations.pt[enKey] = ptKey;
    });
    
    // Set initial language to Portuguese
    switchLanguage('pt');
    
    // Enhanced language selector with holographic effects
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            
            // Add cosmic ripple effect
            createRippleEffect(btn, e);
            
            // Switch language with animation
            switchLanguageWithAnimation(lang);
            
            // Update active button with glow effect
            langButtons.forEach(b => {
                b.classList.remove('active');
                b.style.animation = '';
            });
            btn.classList.add('active');
            btn.style.animation = 'pulseGlow 0.6s ease-out';
        });
    });
}

function switchLanguage(lang) {
    // Update text content with staggered animation
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach((element, index) => {
        setTimeout(() => {
            const key = element.getAttribute('data-en');
            if (translations[lang] && translations[lang][key]) {
                element.style.opacity = '0.7';
                element.style.transform = 'translateY(-5px)';
                
                setTimeout(() => {
                    element.textContent = translations[lang][key];
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150);
            }
        }, index * 50);
    });
    
    // Update placeholders with cosmic effect
    document.querySelectorAll('[data-placeholder-en]').forEach(input => {
        const key = input.getAttribute('data-placeholder-en');
        const ptKey = input.getAttribute('data-placeholder-pt');
        
        input.style.transition = 'all 0.3s ease';
        input.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            if (lang === 'pt' && ptKey) {
                input.placeholder = ptKey;
            } else {
                input.placeholder = key;
            }
            input.style.transform = 'scale(1)';
        }, 150);
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

function switchLanguageWithAnimation(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach((element, index) => {
        element.style.transition = 'all 0.3s ease';
        element.style.opacity = '0.5';
        element.style.filter = 'blur(2px)';
        
        setTimeout(() => {
            switchLanguage(lang);
            element.style.filter = 'blur(0)';
        }, 100);
    });
}

// ====== NAVIGATION SYSTEM ======
function initializeNavigation() {
    // Enhanced mobile navigation with cosmic effects
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            
            // Toggle menu with animation
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger bars
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (isActive) {
                    span.style.transform = '';
                    span.style.opacity = '1';
                } else {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(6px, 6px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                }
            });
            
            // Add cosmic glow effect
            if (!isActive) {
                createCosmicGlow(navToggle);
            }
        });
        
        // Close mobile menu with cosmic effect
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                createRippleEffect(link, e);
                
                setTimeout(() => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = '';
                        span.style.opacity = '1';
                    });
                }, 200);
            });
        });
    }
    
    // Enhanced smooth scrolling with cosmic effects
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Add cosmic trail effect
                createCosmicTrail(e.clientX, e.clientY);
                
                // Smooth scroll with easing
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add pulse effect to target
                target.style.animation = 'sectionPulse 1s ease-out';
                setTimeout(() => {
                    target.style.animation = '';
                }, 1000);
            }
        });
    });
    
    // Enhanced header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const header = document.querySelector('.header');
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.05)';
            header.style.backdropFilter = 'blur(30px)';
            header.style.boxShadow = '0 20px 60px rgba(108, 92, 231, 0.6)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.1)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 20px 60px rgba(108, 92, 231, 0.4)';
        }
        
        // Add parallax effect to header
        header.style.transform = `translateX(-50%) translateY(${currentScrollY * 0.1}px)`;
        
        lastScrollY = currentScrollY;
    });
}

// ====== COSMIC EFFECTS SYSTEM ======
function initializeCosmicEffects() {
    // Add cosmic interactions to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            createCosmicParticles(card);
            card.style.animation = 'cardFloatHover 0.6s ease-out forwards';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animation = '';
        });
        
        card.addEventListener('click', (e) => {
            createRippleEffect(card, e);
            createCosmicExplosion(e.clientX, e.clientY);
        });
    });
    
    // Enhanced CTA button effects
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            createCosmicGlow(ctaButton);
        });
        
        ctaButton.addEventListener('click', (e) => {
            createCosmicExplosion(e.clientX, e.clientY);
            createRippleEffect(ctaButton, e);
        });
    }
    
    // Add cosmic cursor trail
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            createCosmicCursor(e.clientX, e.clientY);
        }
    });
    
    // Enhanced logo interaction
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            createCosmicExplosion(e.clientX, e.clientY);
            logo.style.animation = 'logoCosmicSpin 2s ease-out';
            setTimeout(() => {
                logo.style.animation = 'logoFloat 4s ease-in-out infinite';
            }, 2000);
        });
    }
}

// ====== SCROLL ANIMATIONS ======
function initializeScrollAnimations() {
    // Enhanced intersection observer with staggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add cosmic reveal animation
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.filter = 'blur(0)';
                
                // Add particle effect on reveal
                createCosmicParticles(element);
                
                // Staggered animation for child elements
                const children = element.querySelectorAll('*');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements with enhanced setup
    document.querySelectorAll('.service-card, .about-text, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.filter = 'blur(5px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
    
    // Parallax scrolling for cosmic elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
        
        // Hero parallax effect
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent && heroImage) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
}

// ====== COSMIC EFFECT CREATORS ======
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: rippleEffect 0.8s ease-out;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 800);
}

function createCosmicGlow(element) {
    element.style.boxShadow = `
        0 0 20px rgba(0, 255, 255, 0.8),
        0 0 40px rgba(255, 0, 110, 0.6),
        0 0 60px rgba(255, 215, 0, 0.4)
    `;
    
    setTimeout(() => {
        element.style.boxShadow = '';
    }, 1000);
}

function createCosmicParticles(element) {
    const rect = element.getBoundingClientRect();
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, #00FFFF, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: particleFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
}

function createCosmicExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(0, 255, 255, 0.4) 50%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: cosmicExplosion 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 600);
}

function createCosmicTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(108, 92, 231, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        animation: trailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
}

function createCosmicCursor(x, y) {
    if (Math.random() > 0.95) { // Throttle for performance
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 3px;
            height: 3px;
            background: rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 998;
            animation: cursorTrail 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(cursor);
        setTimeout(() => cursor.remove(), 1500);
    }
}

// ====== PERFORMANCE OPTIMIZATIONS ======
function initializePerformanceOptimizations() {
    // Set will-change for animated elements
    const animatedElements = document.querySelectorAll(`
        .service-card, .hero-logo, .shape, .stars, 
        .cosmic-dust, .floating-shapes, .nav-brand .logo
    `);
    
    setWillChange(animatedElements, 'transform, opacity');
    
    // Throttle scroll events
    let scrollTicking = false;
    
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });
    
    // Optimize animations based on device capabilities
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.style.setProperty('--animation-duration', '0.01ms');
    }
    
    // Memory cleanup for removed elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    node.style && (node.style.willChange = 'auto');
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

// ====== CSS ANIMATIONS ======
// Add dynamic CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes particleFloat {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-100px) scale(0); opacity: 0; }
    }
    
    @keyframes cosmicExplosion {
        0% { transform: scale(0); opacity: 1; }
        50% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes trailFade {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(0); opacity: 0; }
    }
    
    @keyframes cursorTrail {
        0% { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(0); opacity: 0; }
    }
    
    @keyframes cardFloatHover {
        0% { transform: translateY(0) rotateX(0) rotateY(0); }
        100% { transform: translateY(-25px) rotateX(8deg) rotateY(8deg); }
    }
    
    @keyframes logoCosmicSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.3); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes sectionPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(11, 11, 47, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0 0 25px 25px;
        padding: 2rem;
        gap: 1rem;
        animation: menuSlideDown 0.3s ease-out;
    }
    
    @keyframes menuSlideDown {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;

document.head.appendChild(style);

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCosmicEffects);
} else {
    initializeCosmicEffects();
}
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
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
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .social-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// FAQ Accordion Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('FAQ items found:', faqItems.length);
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        console.log('FAQ item', index, 'question found:', !!question);
        
        if (question) {
            // Remove any existing listeners
            question.removeEventListener('click', handleFAQClick);
            
            // Add click event listener
            question.addEventListener('click', function(e) {
                handleFAQClick(e, item, index, faqItems);
            });
            
            // Ensure cursor is pointer
            question.style.cursor = 'pointer';
        }
    });
}

function handleFAQClick(e, item, index, faqItems) {
    e.preventDefault();
    e.stopPropagation();
    console.log('FAQ clicked:', index);
    
    const isActive = item.classList.contains('active');
    console.log('Is active:', isActive);
    
    // Close all other FAQ items first
    faqItems.forEach((otherItem, otherIndex) => {
        if (otherIndex !== index) {
            otherItem.classList.remove('active');
            console.log('Closed FAQ item:', otherIndex);
        }
    });
    
    // Toggle current item
    if (isActive) {
        item.classList.remove('active');
        console.log('FAQ closed:', index);
    } else {
        item.classList.add('active');
        console.log('FAQ opened:', index);
    }
}

// Initialize FAQ when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Try immediately
    initFAQ();
    
    // Also try after a short delay
    setTimeout(initFAQ, 100);
    
    // And try again after a longer delay
    setTimeout(initFAQ, 500);
});

// Hero Video Hover Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('.hero-video-player');
    const playButton = document.querySelector('.play-button');
    const videoOverlay = document.querySelector('.video-overlay');
    
    if (videoContainer && video) {
        let isPlaying = false;
        let hoverTimeout;
        let videoLoaded = false;
        
        // Test if video file exists
        console.log('Video source:', video.src || video.currentSrc);
        console.log('Video ready state:', video.readyState);
        console.log('Video network state:', video.networkState);
        
        // Try to load the video immediately
        video.load();
        
        // Check if video can load
        video.addEventListener('loadstart', function() {
            console.log('Video loading started');
        });
        
        video.addEventListener('loadedmetadata', function() {
            console.log('Video metadata loaded');
        });
        
        video.addEventListener('loadeddata', function() {
            console.log('Video data loaded');
        });
        
        video.addEventListener('canplay', function() {
            console.log('Video can play');
            videoLoaded = true;
        });
        
        video.addEventListener('canplaythrough', function() {
            console.log('Video can play through');
        });
        
        video.addEventListener('error', function(e) {
            console.log('Video error:', e);
            console.log('Video error details:', video.error);
            console.log('Video network state:', video.networkState);
            console.log('Video ready state:', video.readyState);
            
            // Show fallback message or hide video
            if (videoOverlay) {
                videoOverlay.innerHTML = `
                    <div class="video-fallback">
                        <div class="fallback-icon">
                            <i class="fas fa-image"></i>
                        </div>
                        <div class="fallback-text">
                            <h3>Design Process</h3>
                            <p>Creating beautiful wedding stationery</p>
                        </div>
                    </div>
                `;
            }
        });
        
        // Additional debugging
        video.addEventListener('stalled', function() {
            console.log('Video stalled');
        });
        
        video.addEventListener('suspend', function() {
            console.log('Video suspended');
        });
        
        video.addEventListener('abort', function() {
            console.log('Video aborted');
        });
        
        // Play video on hover
        videoContainer.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                if (!isPlaying && videoLoaded) {
                    video.play().then(() => {
                        isPlaying = true;
                        console.log('Video started playing');
                    }).catch(error => {
                        console.log('Video play failed:', error);
                        // Fallback: show static content
                        if (videoOverlay) {
                            videoOverlay.style.opacity = '0';
                        }
                    });
                }
            }, 300); // Small delay for smooth transition
        });
        
        // Pause video when hover ends
        videoContainer.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                console.log('Video paused');
                // Show overlay again
                if (videoOverlay) {
                    videoOverlay.style.opacity = '1';
                }
            }
        });
        
        // Play button click
        if (playButton) {
            console.log('Play button found, adding click listener');
            playButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Play button clicked');
                console.log('Current video state - isPlaying:', isPlaying, 'videoLoaded:', videoLoaded);
                console.log('Video ready state:', video.readyState);
                console.log('Video network state:', video.networkState);
                
                if (isPlaying) {
                    console.log('Pausing video');
                    video.pause();
                    isPlaying = false;
                    if (videoOverlay) {
                        videoOverlay.style.opacity = '1';
                    }
                } else {
                    console.log('Attempting to play video');
                    // Try to play regardless of loading state
                    video.play().then(() => {
                        console.log('Video play successful');
                        isPlaying = true;
                        videoLoaded = true;
                        if (videoOverlay) {
                            videoOverlay.style.opacity = '0';
                        }
                    }).catch(error => {
                        console.log('Video play failed:', error);
                        console.log('Error name:', error.name);
                        console.log('Error message:', error.message);
                        
                        // Show fallback content if video fails
                        if (videoOverlay) {
                            videoOverlay.innerHTML = `
                                <div class="video-fallback">
                                    <div class="fallback-icon">
                                        <i class="fas fa-image"></i>
                                    </div>
                                    <div class="fallback-text">
                                        <h3>Design Process</h3>
                                        <p>Creating beautiful wedding stationery</p>
                                    </div>
                                </div>
                            `;
                        }
                    });
                }
            });
        } else {
            console.log('Play button not found');
        }
        
        // Also add click handler to video overlay for testing
        if (videoOverlay) {
            console.log('Video overlay found, adding click listener');
            videoOverlay.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Video overlay clicked');
                
                // Try to play video
                video.play().then(() => {
                    console.log('Video play successful from overlay click');
                    isPlaying = true;
                    videoLoaded = true;
                    videoOverlay.style.opacity = '0';
                }).catch(error => {
                    console.log('Video play failed from overlay click:', error);
                });
            });
        } else {
            console.log('Video overlay not found');
        }
        
        // Handle video events
        video.addEventListener('play', function() {
            isPlaying = true;
            if (videoOverlay) {
                videoOverlay.style.opacity = '0';
            }
        });
        
        video.addEventListener('pause', function() {
            isPlaying = false;
            if (videoOverlay) {
                videoOverlay.style.opacity = '1';
            }
        });
        
        video.addEventListener('ended', function() {
            isPlaying = false;
            if (videoOverlay) {
                videoOverlay.style.opacity = '1';
            }
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Touch-friendly interactions for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add touch feedback to buttons and interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .gallery-item, .social-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
});

// Smooth Animations - CSS moved to styles.css

// Focus styles for keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('.btn, .nav-link, .social-card a');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #ff6b6b';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});
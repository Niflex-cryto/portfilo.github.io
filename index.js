// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to top button functionality
const topButton = document.getElementById('top-button');

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation to project cards when they come into view
const projectCards = document.querySelectorAll('.project');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-in-out';
    observer.observe(card);
});

// Initialize highlight.js if code blocks are present
if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
}

// Add hover effect to skills
const skillCards = document.querySelectorAll('.skill');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
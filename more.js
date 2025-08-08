// more.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animated typing effect for a headline
const headline = document.getElementById('headline');
if (headline) {
    const text = headline.textContent;
    headline.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            headline.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();
}

// Fade-in effect for sections on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '30px';
backToTop.style.right = '30px';
backToTop.style.padding = '10px 18px';
backToTop.style.fontSize = '18px';
backToTop.style.borderRadius = '50%';
backToTop.style.background = '#0078d7';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.cursor = 'pointer';
backToTop.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
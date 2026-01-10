document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll-Triggered Animation (Reveal Effect)
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 2. Navbar Background Change on Scroll
    const nav = document.querySelector("#mainNav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // 3. Smooth Scroll to Sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
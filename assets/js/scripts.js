document.addEventListener("DOMContentLoaded", () => {
    // 1. Precise Navbar Scroll Management
    const nav = document.querySelector('#mainNav');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. High-Performance Intersection Observer
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    };
    observeElements();

    // 3. Mobile Navigation Auto-Collapse
    const navItems = document.querySelectorAll('.nav-link, .btn');
    const navCollapse = document.querySelector('.navbar-collapse');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });
});
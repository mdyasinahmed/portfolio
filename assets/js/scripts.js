document.addEventListener("DOMContentLoaded", () => {
    // 1. Navbar Scroll Effect
    const mainNav = document.querySelector("#mainNav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                scrollObserver.unobserve(entry.target); // Animates only once
            }
        });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        scrollObserver.observe(el);
    });

    // 3. Mobile Nav Auto-Close
    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById("navbarNav");
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

    // 4. Smooth Scroll Spy (Active link coloring)
    window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    });
});
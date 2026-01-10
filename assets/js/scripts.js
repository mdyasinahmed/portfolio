document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Reveal Animation with Typography Focus
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
    });

    // Handle the Filter Bar Link State
    const filterLinks = document.querySelectorAll(".filter-link");
    filterLinks.forEach(link => {
        link.addEventListener("click", function() {
            filterLinks.forEach(l => l.style.borderBottom = "none");
            this.style.borderBottom = "2px solid white";
        });
    });
});
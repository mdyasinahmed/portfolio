document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // 2. Simple Category Filter Logic
    const filters = document.querySelectorAll(".filter-link");
    const projects = document.querySelectorAll(".project-item");

    filters.forEach(filter => {
        filter.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Toggle active class
            filters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");

            const category = filter.getAttribute("data-filter");

            projects.forEach(project => {
                if (category === "all" || project.classList.contains(category)) {
                    project.style.display = "block";
                    setTimeout(() => project.style.opacity = "1", 10);
                } else {
                    project.style.opacity = "0";
                    setTimeout(() => project.style.display = "none", 400);
                }
            });
        });
    });
});
// Fade in page
document.body.style.opacity = 0;
document.body.style.transition = "opacity 1s ease";

window.onload = () => {
    document.body.style.opacity = 1;
};

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

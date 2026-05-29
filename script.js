// simple animation when page loads
window.onload = () => {
    document.body.style.opacity = "1";
};

// smooth page transition effect
document.body.style.opacity = "0";
document.body.style.transition = "0.5s";

// fake contact form send
function send(e) {
    e.preventDefault();
    alert("Message sent successfully!");
}
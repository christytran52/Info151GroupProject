document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".player-card");

    // Add hidden state
    cards.forEach(card => {
        card.classList.add("roster-hidden");
    });

    // Observer to reveal cards
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("roster-show");
                observer.unobserve(entry.target); // animate once
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});

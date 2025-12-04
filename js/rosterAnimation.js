/* 
    INFO151 Group Project - Phanatic Stat 
    File: rosterAnimation.js
    Sarah Bunting, Alyssa Diallo, Iyana Miller, Christy Tran
    This js file handles scroll-based animations for roster player cards
*/
// Selects All Player Cards
// Retrieves all elements that should animate on scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".player-card");
    // Add hidden state
    // Adds a class so cards are invisible before animation
    cards.forEach(card => {
        card.classList.add("roster-hidden");
    });
    // reveal cards when scrolled into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // when card becomes visible on screen 
            if (entry.isIntersecting) {
                entry.target.classList.add("roster-show");
                // animates once
                observer.unobserve(entry.target); 
            }
        });
    },
    // triggers when 20% of the card is visible
    { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
});

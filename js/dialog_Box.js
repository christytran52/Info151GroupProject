document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       SUBSCRIBE FORM FUNCTIONALITY
    ------------------------------ */
    const subscribeForm = document.getElementById("subscribe-form");
    const subscribeMessage = document.getElementById("subscribe-message");

    subscribeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("subscribe-email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            subscribeMessage.textContent = "Please enter a valid email address.";
            subscribeMessage.style.color = "red";
            return;
        }

        subscribeMessage.textContent = "Subscribed successfully!";
        subscribeMessage.style.color = "green";
        subscribeForm.reset();
    });


    /* ------------------------------
       COMMENT FORM FUNCTIONALITY
    ------------------------------ */
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");
    const commentMessage = document.getElementById("comment-message");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("comment-name").value.trim();
        const comment = document.getElementById("comment-text").value.trim();

        if (comment.length < 10) {
            commentMessage.textContent = "Comment must be at least 10 characters.";
            commentMessage.style.color = "red";
            return;
        }

        // Add comment to list
        const li = document.createElement("li");
        li.textContent = `${name}: ${comment}`;
        commentList.appendChild(li);

        commentMessage.textContent = "Comment added!";
        commentMessage.style.color = "green";

        commentForm.reset();
    });


    /* ------------------------------
       AUTO-UPDATE FOOTER YEAR
    ------------------------------ */
    document.getElementById("year").textContent = new Date().getFullYear();
});

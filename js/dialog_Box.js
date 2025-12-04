/*
    INFO151 Group Project - Phanatic Stat 
    File: dialog_Box.js
    Sarah Bunting, Alyssa Diallo, Iyana Miller, Christy Tran
    This js file is for interactions and dynamic page behavior
*/

document.addEventListener("DOMContentLoaded", () => {
    // SUBSCRIBE FORM 
    // Handles email validation + subscription message 
    const subscribeForm = document.getElementById("subscribe-form");
    const subscribeMessage = document.getElementById("subscribe-message");
    // Prevents page reload on form submit 
    subscribeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Retrieves email & gets rid of whitespace 
        const email = document.getElementById("subscribe-email").value.trim();
        // email validation pattern 
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // checks if email is valid using pattern 
        if (!emailPattern.test(email)) {
            subscribeMessage.textContent = "Please enter a valid email address.";
            subscribeMessage.style.color = "red";
            return;
        }
        // success message + form reset 
        subscribeMessage.textContent = "Subscribed successfully!";
        subscribeMessage.style.color = "green";
        subscribeForm.reset();
    });

    // COMMENT FORM 
    // Validates comment length + displays comments 
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");
    const commentMessage = document.getElementById("comment-message");
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Retrieves name + comment text 
        const name = document.getElementById("comment-name").value.trim();
        const comment = document.getElementById("comment-text").value.trim();
        // makes sure comment has enough characters 
        if (comment.length < 10) {
            commentMessage.textContent = "Comment must be at least 10 characters.";
            commentMessage.style.color = "red";
            return;
        }
        // Creates new list item for comment
        const li = document.createElement("li");
        li.textContent = `${name}: ${comment}`;
        // Adds comment to list
        commentList.appendChild(li);
        // Success message  + form reset
        commentMessage.textContent = "Comment added!";
        commentMessage.style.color = "green";
        commentForm.reset();
    });
    // AUTO-UPDATE FOOTER YEAR
    // changes to current year into footer
    document.getElementById("year").textContent = new Date().getFullYear();
});

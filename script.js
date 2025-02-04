document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.querySelector("#menu a[href='#contact-section']");
    const contactFormContainer = document.getElementById("contact-form-container");
    const closeBtn = document.getElementById("close-btn");

    // Show the contact form when the Contact button is clicked
    contactButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        contactFormContainer.classList.remove("hidden");
    });

    // Close the form when clicking the close button
    closeBtn.addEventListener("click", function() {
        contactFormContainer.classList.add("hidden");
    });

    // Close the form when clicking outside of it
    contactFormContainer.addEventListener("click", function(event) {
        if (event.target === contactFormContainer) {
            contactFormContainer.classList.add("hidden");
        }
    });
});
